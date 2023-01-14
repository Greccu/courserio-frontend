public async Task<List<CourseListDto>> GetRecommendedAsync(string username)
{
    var user = await _userRepository
        .AsQueryable()
        .Where(x => x.Username == username)
        .Include(x => x.Ratings)
        .Include(x => x.Tags)
        .FirstOrDefaultAsync();

    if (user is null)
        throw new CustomNotFoundException("User not found!");
    var userRatings = user.Ratings.Select(x => x.CourseId).ToList();
    var userTags = user.Tags.Select(x => x.Id).ToList();
    if (userRatings.Count == 0)
        throw new CustomBadRequestException("You need to rate at least one course!");
    // base query for recommended courses
    var baseQuery = _courseRepository.AsQueryable()
        .Include(x => x.Creator)
        .Include(course => course.Ratings)
        .Include(course => course.Tags)
        .Where(course => !userRatings.Contains(course.Id)) // exclude courses that user already rated
        .Where(course => course.CreatorId != user.Id); // exclude courses that user created

    // get top rated courses
    var topRatedCourses = await baseQuery
        .OrderByDescending(course => course.AverageRating)
        .Take(5)
        .ToListAsync();

    // get most popular courses
    var popularCourses = await baseQuery
        .OrderByDescending(course => course.RatingsCount)
        .Take(5)
        .ToListAsync();

    // get courses with similar tags
    var similarCourses = await baseQuery
        .OrderByDescending(course => course.Tags.Count(tag => userTags.Contains(tag.Id)))
        .Take(10)
        .ToListAsync();

    var courses = topRatedCourses
        .Concat(popularCourses)
        .Concat(similarCourses)
        .DistinctBy(course => course.Id)
        .OrderByDescending(course => _modelService.Predict(new ModelInput
        {
            CourseId = course.Id,
            UserId = user.Id
        }).Score)
        .Take(4)
        .ToList();

    return courses.Select(_mapper.Map<CourseListDto>).ToList();
}