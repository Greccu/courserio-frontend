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
import { AnswerContainer, Answers, ChapterPageContainer, ChapterVideoContainer, OtherContainer, QnAContainer, QnAContent, QnAHeader, QnAProfilePicture, QuestionContainer } from "./ChapterPageComponents";
import { Collapse, Button } from '@mui/material';
import Question from "./question";
import { UserContext } from "../../App";
import { QuestionDto } from "../../types/qna";
import { ChapterPageDto } from "../../types/chapter";

const ChapterPage = () => {

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
  },[]);


  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
			const res = await apiClient.post("question", QuestionInput);
      console.log(res);
		} catch (e) {
			console.log(e);
		}
  }

  return (
      <>
       <PageContainer>
         <ChapterPageContainer>
           <ChapterVideoContainer>
            <ReactPlayer url={chapter?.videoUrl??""} width="100%" height="100%" />
            {/* CHAPTERVIDEO */}
           </ChapterVideoContainer>
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
             OTHER CONTAINER
           </OtherContainer>
         </ChapterPageContainer>
       </PageContainer>
      </>
  );
};

export default ChapterPage;