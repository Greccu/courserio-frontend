import { Box, Rating } from "@mui/material";
import { fontSize } from "@mui/system";
import { CourseDto } from "../../types/course";
import { AccentColor, FadedTextColor } from "../../utils/theme";
import { CourseMiniatureContainer, CourseMiniatureContent, CourseMiniatureCreatorImage, CourseMiniatureImage, CourseMiniatureInfo, CourseMiniatureTitle } from "../Home/HomeComponents";

const CourseMiniature = (course:CourseDto) => {
  return <CourseMiniatureContainer 
          href={"/course/"+course.id}
          active = {false}>
            <CourseMiniatureImage style ={{
              backgroundImage : "url(" + course.coverImage + ")",
              backgroundSize: "100%",
            }}/>
            <CourseMiniatureContent>
              <CourseMiniatureCreatorImage 
                style = {{
                backgroundImage : "url(" + course.creator?.profilePicture + ")",
                backgroundSize: "100%",
              }}/>
              <CourseMiniatureTitle>{course.title}</CourseMiniatureTitle>
              <CourseMiniatureInfo>
                <div style={{
                  color:FadedTextColor
                }}>{course.creator?.username} - {course.createdAtRelative}</div>
                <div style = {{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "left",
                  width: "100%"
                }}
                >
                  <Rating precision={0.1} value={course.averageRating} readOnly size="small"/>
                  <span style={{
                    color:AccentColor,
                    fontSize: "14px"
                  }}>
                    {course.averageRating} - {course.ratingsCount}  Ratings
                  </span>
                </div>
                </CourseMiniatureInfo>
            </CourseMiniatureContent>
          </CourseMiniatureContainer>
}

export default CourseMiniature;