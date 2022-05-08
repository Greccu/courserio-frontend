import { ChapterCreateDto, ChapterDto } from "./chapter"
import { UserDto } from "./user"

export interface CourseDto {
  id?: number,
  coverImage: string,
  miniatureImage?: string,
  title: string,
  description?: string,
  averageRating?: number,
  ratingsCount?: number,
  createdAt?: Date,
  createdAtRelative?: string,
  creator?: UserDto
}

export interface CoursePageDto {
  id: number,
  createdAt: Date,
  createdAtRelative: string,
  coverImage: string,
  miniatureImage: string,
  title: string,
  description: string,
  averageRating?: number,
  ratingsCount?: number,
  userRating?: number,
  creator: UserDto
  chapters: ChapterDto[]
}

export interface CourseCreateDto {
  creatorId?: number,
  coverImage?: string,
  miniatureImage?: string,
  title?: string,
  description?: string,
  chapters: ChapterCreateDto[]
}