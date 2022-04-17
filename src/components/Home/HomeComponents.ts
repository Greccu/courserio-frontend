import styled from "styled-components";
import {BackgroundColor, PrimaryColor, SecondaryColor} from "../../utils/theme"
import backgroundImg from '../../assets/loginbg.png'

export const HomeContainer = styled.div`
  background-image: url("${backgroundImg}");
  padding-top: 20px;
  width: 100%;
  z-index: 1;
`;

export const HomeContentContainer = styled.div`
  width: 90%;
  background-color: ${BackgroundColor};
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 40px;

`

export const CoursesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 24%);
  grid-column-gap: 1.5%;
  grid-row-gap: 4%;
  padding-bottom: 20px;
`
export type CourseMiniatureProps = {
  active : boolean
}

export const CourseMiniatureContainer = styled.div<CourseMiniatureProps>(
 ({active = false})=>`
 width: 300px;
 background-color: yellow;
`)

export const CourseMiniatureImage = styled.div`
  background-color: ${SecondaryColor};
  width: 100%;
  aspect-ratio: 16/9;
`

export const CourseMiniatureContent = styled.div`
  background-color: red;
  width: 100%;
  /* aspect-ratio: 16/7; */
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`

export const CourseMiniatureCreatorImage = styled.div`
  grid-area: 1 / 1 / 3 / 2; 
  margin:10px;
  background-color: ${SecondaryColor};
  background-size: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50px;
`


export const CourseMiniatureTitle = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  width: 100%;
  background-color:blue;
`
export const CourseMiniatureInfo = styled.div`
  grid-area: 2 / 2 / 4 / 3;
  background-color:green;
`

