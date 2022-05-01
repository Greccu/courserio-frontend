import { UserDto } from "./user";

export interface AnswerDto {
  id: number,
  chapterId: number,
  content: string,
  anonymous: boolean,
  createdAt: Date,
  user: UserDto,
}

export interface QuestionDto {  
  id: number,
  chapterId: number,
  content: string,
  anonymous: boolean,
  createdAt: Date,
  user: UserDto,
  answers: AnswerDto[],
  expandAnswers: boolean
}
