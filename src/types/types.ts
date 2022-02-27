export enum ChapterType{
  Video,
  Text,
  Quiz
}

export interface UserDto{
  id: number,
  username: string
}

export interface CourseDto {
  id?: number,
  coverImage: string,
  miniatureImage?: string,
  title: string,
  description?: string,
  createdAt?: Date,
  creator?: UserDto
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
  featuredCourse: CourseDto
}

export interface ChapterDto{
  id: number,
  title: string
}

export interface CoursePageDto {
  id: number,
  coverImage: string,
  miniatureImage: string,
  title: string,
  description: string,
  createdAt: Date,
  creator: UserDto
  chapters: ChapterDto[]
}

export interface ChapterPageDto {
  id: number,
  createdAt: Date,
  title: string,
  description: string,
  type: ChapterType,
  videoUrl: string,
  content: string,
  courseId: string
}
