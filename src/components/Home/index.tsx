import { Button, Pagination } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { CourseDto } from "../../types/course";
import { PagedResult } from "../../types/global";
import { apiClient } from "../../utils/apiClient";
import { SecondaryColor } from "../../utils/theme";
import CourseMiniature from "../Public/courseMiniature";
import { CourseMiniatureContainer, CourseMiniatureContent, CourseMiniatureCreatorImage, CourseMiniatureImage, CourseMiniatureInfo, CourseMiniatureTitle, CoursesContainer, HomeContainer, HomeContentContainer, HomePageBackground } from "./HomeComponents";
import Slideshow from "./slideshow";

const PAGE_SIZE = 8;

const HomePage = () => {
  // const [courses, setCourses] = useState(Array.from(Array(8).keys()));
  const {enqueueSnackbar} = useSnackbar();
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState('new');
  const context = useContext(UserContext);
  const [courses, setCourses] = useState<PagedResult<CourseDto>>();
  const [recommendedCourses, setRecommendedCourses] = useState<CourseDto[]>();
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, newPage: number)=>{
    setPage(newPage);
  }

  const getCourses = async () => {
    // try {
      await apiClient
        .get("course", {
          params: {
            IsPagingEnabled: true,
            PageSize: PAGE_SIZE,
            Page: page,
            OrderBy: orderBy
          },
          headers: {
            "Authorization": "Bearer " + context.jwt
          }
        })
        .then((res) => {
          const coursesData = res.data;
          setCourses(coursesData);
          console.log(coursesData);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response);
          enqueueSnackbar("An error occurred!", {variant:"error"});

          if(error.response.status == 401){
            console.log("LOGGING OUT");
            enqueueSnackbar("Unauthorized - Please Log In!", {variant:"error"});
            context.logOut();
          }
        });
      
  }

  const getRecommendedCourses = async () => {
    // try {
      await apiClient
        .get("course/recommended", {
          headers: {
            "Authorization": "Bearer " + context.jwt
          }
        })
        .then((res) => {
          const coursesData = res.data;
          setRecommendedCourses(coursesData);
          console.log(coursesData);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.response);
          enqueueSnackbar("An error occurred!", {variant:"error"});
          if(error.response.status == 401){
            console.log("LOGGING OUT");
            enqueueSnackbar("Unauthorized - Please Log In!", {variant:"error"});
            context.logOut();
          }
        });   
  }

  useEffect(() => {
    getRecommendedCourses();
  },[]);

  useEffect(() => {
    getCourses();
  },[orderBy, page]);

  
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
              <Button variant={orderBy == 'new'?"contained":"outlined"} onClick={()=>{setOrderBy('new')}}> New </Button>
              <Button variant={orderBy == 'rating'?"contained":"outlined"} onClick={()=>{setOrderBy('rating')}}> Rating </Button>
              <Button variant={orderBy == 'popularity'?"contained":"outlined"} onClick={()=>{setOrderBy('popularity')}}> Popularity </Button>
            </div>
            <hr style = {{width:"100%", backgroundColor:SecondaryColor, marginBottom:"5px"}}/>
            <CoursesContainer>
              {courses?.data?.map(course =>{
                return <CourseMiniature {...course}/>
              })}
            </CoursesContainer>
            <Pagination count={courses?.totalPageNumber} 
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