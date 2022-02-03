import styled from "styled-components";
import { PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";

export const ProfileContainer = styled.div`
  padding: 20px 0;
  display: grid;
  margin: auto;
  width: 80%;
  grid-template-columns: 25% auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

///// PROFILE HEADER 

export const ProfileHeader = styled.div`
 grid-area: 1 / 1 / 2 / 3;
 border-radius: 100px 0 0 100px;
 border-top: 2px solid ${SecondaryColor};
 display: flex;
 flex-direction: row;
 background-color: ${PrimaryColor};
`

export type PictureProps = {
  imageUrl?: string
}

export const ProfilePicture = styled.div<PictureProps>(({imageUrl})=>`
 margin: 20px;
 background-image: url(${imageUrl});
 background-color: ${SecondaryColor};
 background-size: 100px;
 height: 100px;
 width: 100px;
 border-radius: 50px;
`)

export const MainInformation = styled.div`
  margin: auto 0;
  font-size: 20px;
`
///// PERSONAL INFORMATION

export const ProfileInformation = styled.div`
  
  grid-area: 2 / 1 / 3 / 2; 
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  border: 1px solid ${SecondaryColor};
  border-radius: 50px 0 0 0;
  
`

export const ProfileInformationP = styled.p`
  border-bottom: 1px solid ${SecondaryColor};
  text-align: center;
  width: 100%;
  font-size: 20px;
  margin:0;
  padding: 10px 20px;
`

///// PROFILE CONTENT

export const ProfileContent = styled.div`
  grid-area: 2 / 2 / 4 / 3;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
`

export const ProfileContentTitle = styled.div`
  font-size: 30px;
  border-bottom: 2px solid ${TextColor};
  text-align: center;
`

export const AboutMe = styled.div`
  padding: 10px;
`

export const FeaturedCourse = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-column-gap: 0px;
`

export const FeaturedCourseMainContent = styled.div`
  font-size: 20px;
  padding: 10px;
  
`

export const FeaturedCourseTitle = styled.div`
  font-size: 20px;
  border-bottom: 1px solid ${SecondaryColor};
  text-align: center;
  margin: 0 20px 10px;
`

export const FeaturedCourseMiniature = styled.div<PictureProps>(({imageUrl})=>`
  justify-content: right;
  margin: 20px;
  background-image: url(${imageUrl});
  background-color: ${SecondaryColor};
  background-size: 355px;
  height: 200px;
  width: 355px;
  border-radius: 20px;
`)