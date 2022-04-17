import { Checkbox, FormControl, FormControlLabel, Input, ListItem } from "@mui/material";
import { borderRadius, height } from "@mui/system";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { ChapterPageDto, QuestionDto } from "../../types/types";
import { apiClient } from "../../utils/apiClient";
import { BackgroundColor, FadedSecondaryColor, FadedTextColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";
import PageContainer from "../PageContainer";
import { ProfilePicture } from "../UserProfile/UserProfileComponents";
import { AnswerContainer, Answers, ChapterPageContainer, ChapterVideoContainer, OtherContainer, QnAContainer, QnAContent, QnAHeader, QnAProfilePicture, QuestionContainer } from "./ChapterPageComponents";
import { Collapse, Button } from '@mui/material';

const ChapterPage = () => {

  const { id } = useParams<any>();
  const [chapter, setChapter] = useState<ChapterPageDto>();
  const [QnA, setQnA] = useState<QuestionDto[]>();
  const [QuestionInput, setQuestionInput] = useState<any>();
  const [AnswerInput, setAnswerInput] = useState<any>();
  const getChapter = async () => {
    try {
			const res = await apiClient.get("chapter/"+id, {
			});
			const chapterContent = res.data;
			setChapter(chapterContent);
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

  useEffect(() => {
    console.log(QuestionInput)
  },[QuestionInput]);

  useEffect(() => {
    console.log(AnswerInput)
  },[AnswerInput]);

  const expandAnswers = (id:number) => {
    console.log("SHOW ANSWERS FOR ID 1");
    let index:number = QnA?.findIndex(x => x.id == id)!;
    QnA![index]!.expandAnswers = ! QnA![index]!.expandAnswers;
    setQnA(QnA);
    console.log(QnA);
  }

  const handleSubmitQuestion = (id:number, content:string) => {
    console.log("TEST SUBMIT QUESTION")
  }

  const handleSubmit = (event:any) => {
    console.log("TEST SUBMIT")
    event.preventDefault();
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
           <FormControl
            // onSubmit = {()=>{handleSubmitQuestion(chapter!.id,"")}}
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
                placeholder="Ask a question"
                color="secondary"
                style={{
                  width:"50%",
                  color:TextColor,
                  margin:"0 auto",
                  padding:"10px"
                }}
                onChange={(event:any)=>{setQuestionInput(event.target.value)}}
                />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Anonymous" />
              <Button variant="contained" type="submit">Submit</Button>
           </FormControl>
           {QnA?.map(question => {
                    return <QuestionContainer>
                       <QnAProfilePicture imageUrl={question.user.profilePicture}></QnAProfilePicture>
                       <QnAHeader> 
                         <a 
                          href = {"/user/" + question.user.id}
                          style = {{
                            textDecoration:"none",
                            color: FadedSecondaryColor,
                            pointerEvents: question.anonymous ? "none": "auto"
                          }}
                         >{question.user.username} </a> 
                         <span
                         style = {{
                          color: FadedTextColor
                        }}>{question.createdAt}</span>
                         </QnAHeader>
                       <QnAContent> 
                         {question.content}<br/>
                       <button onClick={() =>expandAnswers(question.id) }>
                         {question.expandAnswers?"Hide Answers":"Show Answers"}
                       </button>
                        </QnAContent>
                      
                        <Answers>
                          <Collapse in={!question.expandAnswers}>
                            {question.answers.map( answer => {
                              return <AnswerContainer>
                                <QnAProfilePicture imageUrl={answer.user.profilePicture}/>
                                <QnAHeader> 
                              <a 
                                href = {"/user/" + answer.user.id}
                                style = {{
                                  textDecoration:"none",
                                  color: FadedSecondaryColor,
                                  pointerEvents: answer.anonymous ? "none": "auto"
                                }}
                              >{answer.user.username} </a> 
                            <span
                            style = {{
                              color: FadedTextColor
                            }}>{question.createdAt}</span>
                            </QnAHeader>
                                <QnAContent> {answer.content} </QnAContent>
                              </AnswerContainer>
                            })}
                          </Collapse>
                          <Input 
                            placeholder="Reply"
                            color="secondary"
                            style={{
                              color:TextColor
                            }}
                            onChange={(event:any)=>{setQuestionInput({id: question.id, value: event.target.value })}}
                            // onSubmitCapture={()=>{replyToQuestion(question.id,"test")}}
                            />
                        </Answers>
                        
                      </QuestionContainer>
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