export interface TagDto {
  id: number,
  name: string
}

export interface TagCourseDto {
  id: number,
  name: string,
  isFollowed: boolean
}

export interface TagOptionDto {
  id: number,
  name: string,
  label: string
}