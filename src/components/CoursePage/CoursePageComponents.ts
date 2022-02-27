import styled from "styled-components";
import { AccentColor, BackgroundColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";

export const CoursePageBackground = styled.div` 
  z-index: 0;
  height: 100%;
  width: 100%;
  position: absolute;
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
  grid-template-rows: 10% 35% 30% 15% 10%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const CoursePageTitle = styled.div`
  z-index: 1;
  grid-area: 1 / 1 / 3 / 2;
  font-size: 60px;
  width: 100%;
  height: 100%;
  justify-content: center;
  text-align: center;
  display:flex;
  align-items:center;
`

export const CoursePageContent = styled.div`
  z-index: 1;
  grid-area: 3 / 1 / 6 / 2;
  display:flex;
  flex-direction: column;
  align-items:center;
  font-size: 25px;
`


export const CoursePagePreview = styled.div`
  z-index: 2;
  grid-area: 2 / 2 / 5 / 3;
  background-color: ${PrimaryColor};
  border-radius: 20px;
  padding: 10px;
`

export const CoursePageScrollableList = styled.div`
  max-height: 63%;
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
