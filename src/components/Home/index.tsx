import { Button, Pagination } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { CourseDto } from "../../types/course";
import { apiClient } from "../../utils/apiClient";
import { SecondaryColor } from "../../utils/theme";
import CourseMiniature from "../General/courseMiniature";
import { CourseMiniatureContainer, CourseMiniatureContent, CourseMiniatureCreatorImage, CourseMiniatureImage, CourseMiniatureInfo, CourseMiniatureTitle, CoursesContainer, HomeContainer, HomeContentContainer } from "./HomeComponents";
import Slideshow from "./slideshow";



const HomePage = () => {
  // const [courses, setCourses] = useState(Array.from(Array(8).keys()));
  const [page, setPage] = useState(1);
  const context = useContext(UserContext);
  const [courses, setCourses] = useState<CourseDto[]>();
  const [recommendedCourses, setRecommendedCourses] = useState<CourseDto[]>();
  const [selectedButton, setSelectedButton] = useState(1);

  const handlePaginationChange = (event: React.ChangeEvent<unknown>, page: number)=>{
    console.log("TEST PAGE "+page)
  }

  const getHomeCourses = async () => {
    // try {
      await apiClient
        .get("course", {
          params: {
            IsPagingEnabled: true,
            PageSize: 8,
            Page: page
          },
          headers: {
            "Authorization": "Bearer " + context.jwt
          }
        })
        .then((res) => {
          const coursesData = res.data;
          setCourses(coursesData);
          setRecommendedCourses(coursesData.slice(0,4));
          console.log(coursesData);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response);
          if(error.response.status == 401){
            console.log("LOGGING OUT");
            context.logOut();
          }
        });
      
  }

  useEffect(() => {
    getHomeCourses();
  },[]);

  
  return (
      <>
        <HomeContainer>
          <Slideshow/>
          <HomeContentContainer >
            <div style={{
              fontSize: "24px",
              marginBottom: "15px",
              marginLeft: "10px"
            }}>
              JUST FOR YOU
            </div>
            <hr style = {{width:"100%", backgroundColor:SecondaryColor, marginBottom:"5px"}}/>
            <CoursesContainer>
              {recommendedCourses?.map(course =>{
                return <CourseMiniature {...course}/>
              })}
            </CoursesContainer>
            <div style={{
              fontSize: "24px",
              marginBottom: "15px",
              marginLeft: "10px"
            }}>
              All Courses
            </div>
            <div style = {{
                marginBottom:"10px",
                display: "flex",
                flexDirection: "row",
                gap: "10px"
              }}>
              <Button variant={selectedButton == 1?"contained":"outlined"} onClick={()=>{setSelectedButton(1)}}> New </Button>
              <Button variant={selectedButton == 2?"contained":"outlined"} onClick={()=>{setSelectedButton(2)}}> Rating </Button>
              <Button variant={selectedButton == 3?"contained":"outlined"} onClick={()=>{setSelectedButton(3)}}> Popularity </Button>
            </div>
            <hr style = {{width:"100%", backgroundColor:SecondaryColor, marginBottom:"5px"}}/>
            <CoursesContainer>
              {courses?.map(course =>{
                return <CourseMiniature {...course}/>
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