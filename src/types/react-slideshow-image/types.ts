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

