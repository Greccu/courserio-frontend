import styled from "styled-components";
import { AccentColor, BackgroundColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";

export const ChapterPageContainer = styled.div`
  padding: 20px 0;
  display: grid;
  margin: auto;
  width: 90%;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 10px;
`;

export const ChapterVideoContainer = styled.div`
  grid-area: 1 / 1 / 2 / 3; 
  width: 80%;
  margin: auto; 
  aspect-ratio: 16/9;
  background-color: ${PrimaryColor};
`

export const DescriptionContainer = styled.div`
 width: 80%;
 margin: 20px auto;
 grid-area: 2 / 1 / 3 / 3;
 background-color: ${PrimaryColor};
 border-radius: 10px;
 padding: 20px 30px;
`

export const ChapterTextContentContainer = styled.div`
  grid-area: 2 / 1 / 3 / 3; 
  width: 80%;
  margin: 10px auto; 
  padding: 20px 30px;
  background-color: ${PrimaryColor};
`

export const DescriptionTextContainer = styled.div`
 width: 80%;
 margin: 10px auto;
 grid-area: 1 / 1 / 2 / 3;
 background-color: ${PrimaryColor};
 border-radius: 10px;
 padding: 20px 30px;
`

export const QnAContainer = styled.div`
 grid-area: 3 / 1 / 5 / 2;
 width: 100%;
 background-color: ${PrimaryColor};
 border-radius: 10px;
 height: auto;
`

export const OtherContainer = styled.div`
 grid-area: 3 / 2 / 4 / 3; 
 width: 100%;
 background-color: ${PrimaryColor};
 border-radius: 10px;
 padding: 20px;
 height: auto;
`

export const QuestionContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 30px auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 10px;
  margin-bottom: 25px;
`

export const QnAHeader = styled.div`
  /* background-color: #000000; */
  grid-area: 1 / 2 / 2 / 3; 
  margin: 0;
  padding: 0;
`

export const QnAContent = styled.div`
 /* background-color: green; */
 grid-area: 2 / 2 / 3 / 3;
 width: 100%;
 height: auto;
`

export const Answers = styled.div`
  /* background-color: yellow; */
  grid-area: 3 / 2 / 4 / 3;
`

export const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 30px auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 10px;
  margin-left: 0;
`

export type PictureProps = {
  imageUrl?: string
}

export const QnAProfilePicture = styled.div<PictureProps>(({imageUrl})=>`
  grid-area: 1 / 1 / 3 / 2; 
  margin: 20px;
  background-image: url(${imageUrl});
  background-color: ${SecondaryColor};
  background-size: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
`)
