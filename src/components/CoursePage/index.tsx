import { List, ListItem, Rating } from "@mui/material";
import { fontSize, width } from "@mui/system";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import { apiClient } from "../../utils/apiClient";
import { AccentColor, BackgroundColor, FadedAccentColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";
import { UserContextInterface } from "../Auth/types";
import { useUser } from "../Auth/useUser";
import PageContainer from "../PageContainer";
import { CoursePageBackground, CoursePageContainer, CoursePageContent, CoursePagePreview, CoursePageScrollableList, CoursePageTitle } from "./CoursePageComponents";
import { CoursePageDto } from "../../types/course";


const CoursePage = () => {

  const userContext = useContext(UserContext);
  const { id } = useParams<any>();
  const [course, setCourse] = useState<CoursePageDto>();
  const getCourse = async () => {
    try {
			const res = await apiClient.get("course/"+id, {
        headers:{
          "Authorization" : "Bearer " + userContext.jwt
        }
			});
			const courseContent = res.data;
      // for(let i=0; i<5; i++){
      //   courseContent.chapters = courseContent.chapters.concat(courseContent.chapters);
      // }
			setCourse(courseContent);
      console.log(courseContent);
		} catch (e) {
			console.log(e);
		}
  }

  useEffect(() => {
    getCourse();
  },[]);

  return (
      <>
       <PageContainer>
          <CoursePageBackground/>
          <CoursePageContainer>
            <CoursePageTitle>
              {course?.title}
            </CoursePageTitle>
            <CoursePageContent>
              <div style = {{
                margin : 10
              }}>
                {course?.description}
              </div>
              <div style = {{
                  display : "flex",
                  alignItems: "center",
                  margin: 5,
              }}
              >
                <span style = {{margin:"0 10px", fontSize: 20, color:AccentColor}}>{course?.averageRating}</span>
                <Rating name="read-only" value={course?.averageRating} precision={0.1} readOnly size="large" color={AccentColor}/>
              </div>
              <div>
                Your Rating: <span style = {{color:AccentColor}}>{course?.userRating}</span>
              </div>
              <div>
                <span style = {{color:AccentColor}}>{course?.ratingsCount}</span> Ratings
              </div>
              {/* <div>
                Students enrolled: <span style = {{color:AccentColor}}>{23000}</span>
              </div> */}
              <div>
                Created by: <a href ={"/user/"+course?.creator.id} style={{textDecoration:"none", color:FadedAccentColor}}>{course?.creator.username}</a>
              </div>
              <div>
                Created at: <span style = {{color:AccentColor}}>{course?.createdAt}</span>
              </div>
            </CoursePageContent>
            <CoursePagePreview>
              <div style={{ 
                zIndex: 2,
                backgroundImage: `url(${course?.coverImage})`,
                backgroundColor: "red",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                aspectRatio: "21/9",
                borderRadius: "12px 12px 0 0",
                marginBottom: 10
              }}/>
              <CoursePageScrollableList>
                <List >
                  {course?.chapters.map(chapter => {
                    return <a href={"/chapter/"+chapter.id} style = {{textDecoration:"none", color: TextColor}}><ListItem style = {{
                      border:"solid 1px "+BackgroundColor,
                    }}>{chapter.title}</ListItem></a>
                  })}
                </List>
              </CoursePageScrollableList>
              
              
            </CoursePagePreview>
          </CoursePageContainer>
       </PageContainer>
      </>
  );
};

export default CoursePage;