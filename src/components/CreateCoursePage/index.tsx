import { Button, TextField } from "@mui/material";
import { width } from "@mui/system";
import { useSnackbar } from "notistack";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import { ChapterCreateDto, ChapterType } from "../../types/chapter";
import { CourseCreateDto } from "../../types/course";
import { apiClient } from "../../utils/apiClient";
import { PrimaryColor, TextColor } from "../../utils/theme";
import PageContainer from "../PageContainer";
import CoursePreview from "../Public/coursePreview";
import { CourseCreateContainer, CreateChapterField, CustomInputField } from "./CourseCreatePageComponents";

const CreateCoursePage = () => {

  const history = useHistory();
  const context = useContext(UserContext);
  const [course, setCourse] = useState<CourseCreateDto>({
    chapters: [],
    creatorId: context.userInfo.id
  });
  const [isCourseValid, setCourseValid] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event:any) => {
    
    try {
      const res = await apiClient.post("course", {
        ...course
      });
      enqueueSnackbar("Course created successfully!", {variant:"success"});
      history.push("/");
    } catch (e) {
      console.log(e);
      enqueueSnackbar("Could not create course!", {variant:"error"});
    }

  }

  useEffect(() => {
    // console.log(course);
    if(
      course.title != "" &&
      course.description != ""  
      ){
        setCourseValid(true);
      }
    else{
        setCourseValid(false);    
      }
  }, [course])
  
  const handleAddChapter = () => {
    setCourse({...course,chapters:[...course.chapters,{type:ChapterType.Video}]})
  }

  const handleRemoveChapter = (index:number) => {
    setCourse({...course,chapters:[...course.chapters.slice(0,index), ...course.chapters.slice(index+1)]})
  }

  const handleChapterChange = (index:number, chapter:ChapterCreateDto) => {
    setCourse({...course,chapters:[...course.chapters.slice(0,index), chapter, ...course.chapters.slice(index+1)]})
  }


  return (
    <>
      <PageContainer>
        <CourseCreateContainer>
          <form style = {{
            color: TextColor,
            width: "60%",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
            marginBottom: "20px"
            }} onSubmit={(e)=>{e.preventDefault()}}>
            <div style={{fontSize:"36px", margin:"25px 0"}}>Create new Course</div>
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
            <CustomInputField fullWidth label="Cover Image URL" onChange={(event:any) => {
              setCourse({
                ...course,
                coverImage: event.target.value,
                miniatureImage: event.target.value
              })
            }} />
            <span style={{fontSize:"24px"}}>Chapters</span>
            <div style={{
              display:"flex", 
              flexDirection:"column",
              width: "90%",
              marginLeft: "5%"
              }}>
              {course.chapters.map((chapter, index) => <CreateChapterField>
                <CustomInputField fullWidth label="Title" value={chapter.title} style={{gridArea:"1 / 1 / 2 / 2"}} onChange={(event:any) => {
                  handleChapterChange(index,{
                    ...chapter,
                    title: event.target.value
                  })
                }} />
                <CustomInputField fullWidth label="Description" value={chapter.description} style={{gridArea:"2 / 1 / 3 / 2"}} onChange={(event:any) => {
                  handleChapterChange(index,{
                    ...chapter,
                    description: event.target.value
                  })
                }} />
                <CustomInputField fullWidth label="VideoUrl" value={chapter.videoUrl} style={{gridArea:"3 / 1 / 4 / 2"}} onChange={(event:any) => {
                  handleChapterChange(index,{
                    ...chapter,
                    videoUrl: event.target.value
                  })
                }} />
                <Button color="error" style={{gridArea:"2 / 2 / 3 / 3"}} onClick={()=>{handleRemoveChapter(index)}}>X</Button>
              </CreateChapterField>)}
              <Button color="secondary" onClick={handleAddChapter}>Add Chapter +</Button>
            </div>
            <Button variant="contained" color="success" disabled={!isCourseValid} onClick={handleSubmit}>Create Course</Button>
          </form>
          <div style={{
              width: "27%",
              marginTop: "30px",
              marginLeft: "20px",
              position:"fixed",
              right: "100px"
            }}>
            <div style={{
              fontSize: "36px",
              textAlign: "center"
            }}>Preview</div>
            <div style={{
              width: "100%",
              minHeight: "480px",
              backgroundColor: PrimaryColor,
              borderRadius: "20px",
              marginTop: "10px",
              padding: "10px"
            }}>
              <CoursePreview {...course}> test test </CoursePreview>
            </div>
          </div>
          
          
        </CourseCreateContainer>
      </PageContainer>
    </>
)}

export default CreateCoursePage;