export enum ChapterType{
  Video,
  Text,
  Quiz
}

export interface ChapterDto{
  id: number,
  title: string
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

export interface ChapterCreateDto {
  title?: string,
  description?: string,
  type?: ChapterType,
  videoUrl?: string,
  content?: string
}