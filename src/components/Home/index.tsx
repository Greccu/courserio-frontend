import { Pagination } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { SecondaryColor } from "../../utils/theme";
import { CourseMiniatureContainer, CourseMiniatureContent, CourseMiniatureCreatorImage, CourseMiniatureImage, CourseMiniatureInfo, CourseMiniatureTitle, CoursesContainer, HomeContainer, HomeContentContainer } from "./HomeComponents";
import Slideshow from "./slideshow";



const HomePage = () => {
  const [courses, setCourses] = useState(Array.from(Array(8).keys()));

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number)=>{
    console.log("TEST PAGE "+page)
  }
  
  return (
      <>
        <HomeContainer>
          <Slideshow/>
          <HomeContentContainer>
            <div>
              LIST CONTROLS
            </div>
            <CoursesContainer>
              {courses.map(()=>{
              return <CourseMiniatureContainer active = {true}>
                        <CourseMiniatureImage/>
                        <CourseMiniatureContent>
                          <CourseMiniatureCreatorImage/>
                          <CourseMiniatureTitle>TEST TITLE TEST TITLE</CourseMiniatureTitle>
                          <CourseMiniatureInfo>TEST Description TEST Description TEST Description TEST Description </CourseMiniatureInfo>
                        </CourseMiniatureContent>
                      </CourseMiniatureContainer>

              })}
            </CoursesContainer>
            <Pagination count={10} 
              color="secondary" 
              onChange={handlePaginationChange}
              sx={{
                marginTop:"10px",
                "& .css-19micn4-MuiButtonBase-root-MuiPaginationItem-root": {
                  color: SecondaryColor
                },
                "& .css-1v2lvtn-MuiPaginationItem-root": {
                  color: SecondaryColor
                }
              }}/>
          </HomeContentContainer>
        </HomeContainer>
      </>
  );
};

export default HomePage;