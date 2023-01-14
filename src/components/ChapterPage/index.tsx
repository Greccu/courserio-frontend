import { Checkbox, FormControl, FormControlLabel, Input, ListItem } from "@mui/material";
import { borderRadius, height } from "@mui/system";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { apiClient } from "../../utils/apiClient";
import { BackgroundColor, FadedSecondaryColor, FadedTextColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";
import PageContainer from "../PageContainer";
import { ProfilePicture } from "../UserProfile/UserProfileComponents";
import { ChapterTextContentContainer, DescriptionTextContainer, AnswerContainer, Answers, ChapterPageContainer, ChapterVideoContainer, DescriptionContainer, OtherContainer, QnAContainer, QnAContent, QnAHeader, QnAProfilePicture, QuestionContainer } from "./ChapterPageComponents";
import { Collapse, Button } from '@mui/material';
import Question from "./question";
import { UserContext } from "../../App";
import { QuestionDto } from "../../types/qna";
import { ChapterPageDto, ChapterType } from "../../types/chapter";
import { useSnackbar } from "notistack";
import { CourseDto } from "../../types/course";
import CourseMiniature from "../Public/courseMiniature";

const ChapterPage = () => {

  const [recommendedCourses, setRecommendedCourses] = useState<CourseDto[]>();
  const {enqueueSnackbar} = useSnackbar();
  const context = useContext(UserContext);
  const { id } = useParams<any>();
  const [chapter, setChapter] = useState<ChapterPageDto>();
  const [QnA, setQnA] = useState<QuestionDto[]>();
  const [QuestionInput, setQuestionInput] = useState<any>(
    {
      content: "",
      anonymous: true,
      userId: context.userInfo.id,
    });

  const getChapter = async () => {
    try {
			const res = await apiClient.get("chapter/"+id, {
			});
			const chapterContent = res.data;
			setChapter(chapterContent);
      setQuestionInput({
        ...QuestionInput,
        chapterId : chapterContent?.id
      })
      // console.log(chapterContent);
		} catch (e) {
			console.log(e);
		}
  }

  const getQnAs = async () => {
    try {
			const res = await apiClient.get("question/"+id, {
			});
			const qnA = res.data;
			setQnA(qnA);
      console.log(qnA);
		} catch (e) {
			console.log(e);
		}
  }

  useEffect(() => {
    getChapter();
    getQnAs();
    getRecommendedCourses();
  },[]);


  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
			const res = await apiClient.post("question", QuestionInput);
      var newQuestion = res.data;
      if(!newQuestion.anonymous){
        newQuestion.user = context.userInfo;
      }
      setQnA([...QnA??[], newQuestion])
      setQuestionInput({
        ...QuestionInput,
        content:""
      })
      enqueueSnackbar("Question added successfully!", {variant:"success"});
      // console.log(res);
		} catch (e) {
			console.log(e);
      enqueueSnackbar("Could not add question!", {variant:"error"});
		}
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

  console.log(chapter)

  return (
      <>
       <PageContainer>
         <ChapterPageContainer>
           {chapter?.type === ChapterType.Video ? 
            <>
              <ChapterVideoContainer>
                <ReactPlayer url={chapter?.videoUrl??""} width="100%" height="100%" />
                {/* CHAPTERVIDEO */}
              </ChapterVideoContainer>
              <DescriptionContainer>
                <h1 style={{marginBottom:"10px"}}>{chapter?.title}</h1>
                {chapter?.description}
              </DescriptionContainer>
            </> 
            : 
            <>
              <DescriptionTextContainer>
                <h1 style={{marginBottom:"10px"}}>{chapter?.title}</h1>
                {chapter?.description}
              </DescriptionTextContainer>
              <ChapterTextContentContainer>
                <div dangerouslySetInnerHTML={{__html: chapter?.content??""}}/>
                {/* {chapter?.content} */}
              </ChapterTextContentContainer>
            </> 
           }
           <QnAContainer>
           <form
            
            onSubmit = {handleSubmit}
            style={{
              display: "flex",
              flex:3,
              flexDirection:"row",
              color:TextColor,
              width:"90%",
              margin:"0 auto",
              padding:"10px",
              justifyContent:"center"
            }}
           >
            <Input 
                required
                placeholder="Ask a question"
                color="secondary"
                style={{
                  width:"50%",
                  color:TextColor,
                  margin:"0 auto",
                  padding:"10px"
                }}
                onChange={(event:any)=>{setQuestionInput({
                  ...QuestionInput,
                  content : event.target.value
                })}}
                value={QuestionInput.content}
                />
                <FormControlLabel 
                  control={
                    <Checkbox 
                      defaultChecked 
                      onChange={(event:any)=>{
                        setQuestionInput({
                          ...QuestionInput,
                          anonymous : event.target.checked
                        })
                      }}
                      />} 
                    label="Anonymous" />
              <Button variant="contained" type="submit">Submit</Button>
           </form>
           {QnA?.map(question => {
                    return <Question {...question}/>
                  })}
           </QnAContainer>
           <OtherContainer>
             <div></div>
             <h1>Recommended Courses</h1>
             <div style={{  
                          width: "300px",
                          display: "flex",
                          flexDirection: "column",
                          margin: "30px auto 0",
                        }}>
                  {recommendedCourses?.map(course =>{
                                  return <CourseMiniature {...course} />
                                })}
             </div>
             
           </OtherContainer>
         </ChapterPageContainer>
       </PageContainer>
      </>
  );
};

export default ChapterPage;