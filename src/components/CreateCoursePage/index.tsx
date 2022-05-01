import { TextField } from "@mui/material";
import { width } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { CourseCreateDto } from "../../types/course";
import { TextColor } from "../../utils/theme";
import PageContainer from "../PageContainer";
import { CourseCreateContainer, CoursePreview, CustomInputField } from "./CourseCreatePageComponents";

const CreateCoursePage = () => {

  const context = useContext(UserContext);
  const [course, setCourse] = useState<CourseCreateDto>({
    chapters: [],
    creatorId: context.userInfo.id
  });

  const handleSubmit = (event:any) => {
    console.log('SUBMIT')
    console.log(course);
    event.preventDefault();
  }

  useEffect(() => {
    console.log(course);
  }, [course])
  

  return (
    <>
      <PageContainer>
        <CourseCreateContainer>
          <form style = {{
            color: TextColor,
            width: "60%",
            display: "flex",
            gap: "20px",
            flexDirection: "column"
            }} onSubmit={handleSubmit}>
            <div style={{fontSize:"24px", margin:"25px 0"}}>Create new Course</div>
            <CustomInputField fullWidth label="Title" onChange={(event:any) => {
              setCourse({
                ...course,
                title: event.target.value
              })
            }} />
            <CustomInputField fullWidth label="Description" multiline onChange={(event:any) => {
              setCourse({
                ...course,
                description: event.target.value
              })
            }} />
            <CustomInputField fullWidth label="Cover Image URL" multiline onChange={(event:any) => {
              setCourse({
                ...course,
                description: event.target.value
              })
            }} />
          </form>
          <CoursePreview> test test </CoursePreview>
        </CourseCreateContainer>
      </PageContainer>
    </>
)}

export default CreateCoursePage;