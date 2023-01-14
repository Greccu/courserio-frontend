import { CourseDto } from "./course"

export interface UserDto{
  id: number,
  username: string,
  profilePicture: string
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