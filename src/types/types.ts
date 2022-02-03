export interface CourseListDto {
  id?: number,
  coverImage: string,
  miniatureImage?: string,
  title: string,
  description?: string,
  createdAt?: Date,
  creator?: {
    id: number,
    username: string
  }
}

export interface UserProfileDto {
  id: number,
  email: string,
  username: string,
  firstName: string,
  lastName: string,
  profilePicture: string,
  dateOfBirth: Date,
  gender: string,
  phoneNumber: string,
  aboutMe: string,
  featuredCourse: CourseListDto
}


