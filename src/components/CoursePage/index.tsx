import { Icon, List, ListItem, Rating } from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import { apiClient } from "../../utils/apiClient";
import { AccentColor, BackgroundColor, ErrorColor, FadedAccentColor, Fadedx2SecondaryColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";
import PageContainer from "../PageContainer";
import { CourseFollowTagButton, CoursePageBackground, CoursePageContainer, CoursePageContent, CoursePagePreview, CoursePageScrollableList, CoursePageTitle, CourseTag } from "./CoursePageComponents";
import { CoursePageDto } from "../../types/course";
import CoursePreview from "../Public/coursePreview";
import { DateToString } from "../../utils/helpers";
import { useSnackbar } from "notistack";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const CoursePage = () => {

  const userContext = useContext(UserContext);
  const {enqueueSnackbar} = useSnackbar();
  const { id } = useParams<any>();
  const [course, setCourse] = useState<CoursePageDto>();
  const [ userRating, setUserRating ] = useState<number|null>(0);
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
      setUserRating(courseContent.userRating);
		} catch (e) {
			console.log(e);
      enqueueSnackbar("An error occurred!", {variant:"error"});
		}
  }

  useEffect(() => {
    getCourse();
  },[]);

  const handleRatingChange = async (event : any, newValue : any) => {
    if(newValue != userRating){
      setUserRating(newValue);
      try {
        const res = await apiClient.post("rating", {
          courseId: course?.id,
          userId: userContext.userInfo.id,
          value: newValue
        });
        enqueueSnackbar("Rating updated successfully!", {variant:"success"});
      } catch (e) {
        console.log(e);
        enqueueSnackbar("Could not update rating!", {variant:"error"});
      }
    }    
  };

  const handleFollowUnfollow = async (isFolllow: boolean, id: number) => {
    if(isFolllow){
      try {
        await apiClient.post("tag/follow/"+id, {}, {
          headers:{
            "Authorization" : "Bearer " + userContext.jwt
          }
        });
        enqueueSnackbar("Tag followed!", {variant:"success"});
      } catch (e) {
        console.log(e);
        enqueueSnackbar("You already follow this tag!", {variant:"error"});
      }
    }
    else{
      try {
          await apiClient.post("tag/unfollow/"+id, {}, {
            headers:{
              "Authorization" : "Bearer " + userContext.jwt
            }
          });
          enqueueSnackbar("Tag unfollowed!", {variant:"success"});
        } catch (e) {
          console.log(e);
          enqueueSnackbar("You do not follow this tag!", {variant:"error"});
        }
    }
  };

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
                <Rating value={course?.averageRating ?? 0 } precision={0.1} readOnly size="medium" color={AccentColor}/>
              </div>
              <div>
                <span style = {{color:AccentColor}}>{course?.ratingsCount}</span> Ratings
              </div>
              <div>
                Your Rating: <Rating value={userRating} size="medium" color={AccentColor} 
                onChange={handleRatingChange}/>
              </div>
              <div>
                Created by: <a href ={"/user/"+course?.creator.id} style={{textDecoration:"none", color:FadedAccentColor}}>{course?.creator.username}</a>
              </div>
              <div>
                Created at: <span style = {{color:AccentColor}}>{DateToString(course?.createdAt)}</span>
              </div>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                margin: "10px",
                maxWidth: "80%",
                justifyContent: "center"
              }}>
                {course?.tags.map(tag => {
                  return <CourseTag>
                    {tag.name} <CourseFollowTagButton>{tag.isFollowed ? 
                    <RemoveCircleOutlineIcon onClick={()=>handleFollowUnfollow(false, tag.id)}/>: 
                    <AddCircleOutlineIcon onClick={()=>handleFollowUnfollow(true, tag.id)}/>}</CourseFollowTagButton> 
                  </CourseTag>
                })}
              </div>
            </CoursePageContent>
            <CoursePagePreview>
              <CoursePreview {...course!}/>
            </CoursePagePreview>
          </CoursePageContainer>
       </PageContainer>
      </>
  );
};

export default CoursePage;