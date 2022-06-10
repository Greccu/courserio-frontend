import styled from "styled-components";
import { AccentColor, BackgroundColor, FadedSecondaryColor, Fadedx2SecondaryColor, PrimaryColor, SecondaryColor, TagColor, TextColor } from "../../utils/theme";

export const CoursePageBackground = styled.div` 
  z-index: 0;
  height: 100%;
  /* width: 1920px; */
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${BackgroundColor};
  background: linear-gradient(0deg, ${SecondaryColor} -200%, ${BackgroundColor} 50%);
`;

export const CoursePageContainer = styled.div`
  padding: 20px 0;
  display: grid;
  margin: auto;
  width: 70%;
  height: 85%;
  grid-template-columns: 65% 35%;
  grid-template-rows: auto auto auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const CoursePageTitle = styled.div`
  z-index: 1;
  grid-area: 1 / 1 / 3 / 2;
  font-size: 60px;
  width: 100%;
  /* height: 100%; */
  justify-content: center;
  text-align: center;
  display:flex;
  align-items:center;
`

export const CoursePageContent = styled.div`
  z-index: 1;
  grid-area: 3 / 1 / 6 / 2;
  height: 500px;
  display:flex;
  flex-direction: column;
  align-items:center;
  font-size: 25px;
`


export const CoursePagePreview = styled.div`
  z-index: 2;
  grid-area: 2 / 2 / 5 / 3;
  height: 480px;
  background-color: ${PrimaryColor};
  border-radius: 20px;
  padding: 10px;
`

export const CoursePageScrollableList = styled.div`
  max-height: 55%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 12px;   
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background: ${BackgroundColor};        /* color of the tracking area */
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
  background-color: ${AccentColor};    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid ${BackgroundColor};  /* creates padding around scroll thumb */
}
`

export const CourseTag = styled.div`
  background-color: ${TagColor};
  margin: 5px;
  padding: 2px 2px 2px 15px;
  border-radius: 20px;
`

export const CourseFollowTagButton = styled.button`
  color: black;
  background-color: transparent;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  vertical-align: -5px;
  border: none;
  &:hover{
    color: #2f2f2f;
  }
  &:active{
    color: #4f4f4f
  }
`