import { Box, List, ListItem, Rating } from "@mui/material";
import { ChapterDto } from "../../types/chapter";
import { CourseCreateDto, CourseDto, CoursePageDto } from "../../types/course";
import { BackgroundColor, ErrorColor, SecondaryColor, TextColor } from "../../utils/theme";
import { CoursePagePreview, CoursePageScrollableList } from "../CoursePage/CoursePageComponents";
import ChapterPreview from "./chapterPreview";

const CoursePreview = (course : CoursePageDto | CourseCreateDto) => {
  return <>
      <div style={{ 
        zIndex: 2,
        backgroundImage: `url(${course?.coverImage})`,
        backgroundColor: SecondaryColor,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "12px 12px 0 0",
        marginBottom: 10
      }}/>
      {course?.chapters?.length ? 
        <CoursePageScrollableList>
          <List >
            {course?.chapters.map(chapter => {
              return <ChapterPreview {...chapter}/>
            })}
          </List>
        </CoursePageScrollableList> 
        :
        <div style={{
          width: "100%",
          textAlign: "center",
          color: ErrorColor
        }}>
          No chapters found
        </div> 
      }
  </>
}

export default CoursePreview;