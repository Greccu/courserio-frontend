import { ErrorColor, FadedErrorColor, FadedSecondaryColor, FadedTextColor, SecondaryColor, TextColor } from "../../utils/theme";
import { AnswerContainer, Answers, QnAContent, QnAHeader, QnAProfilePicture, QuestionContainer } from "./ChapterPageComponents";
import { Collapse, Button, Input, FormControlLabel, Checkbox } from '@mui/material';
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { apiClient } from "../../utils/apiClient";
import { AnswerDto, QuestionDto } from "../../types/qna";
import { useSnackbar } from "notistack";


const Question = (question:QuestionDto) => {

  const {enqueueSnackbar} = useSnackbar();

  const context = useContext(UserContext);
  
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReplyInputExpanded, setReplyInputExpanded] = useState(false);
  const [answers, setAnswers] = useState<AnswerDto[]>(question.answers??[]);

  const [AnswerInput, setAnswerInput] = useState<any>({
    content: "",
    anonymous: true,
    questionId: question.id,
    userId: context.userInfo.id,
  });

  const toggleExpandAnswers = () => {
    setIsExpanded(!isExpanded);
  }
  
  const toggleExpandReplyInput = () => {
    setReplyInputExpanded(!isReplyInputExpanded);
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
			const res = await apiClient.post("answer", AnswerInput);
      var newAnswer = res.data;
      if(!newAnswer.anonymous){
        newAnswer.user = context.userInfo;
      }
      setAnswers([...answers, newAnswer])
      setReplyInputExpanded(!isReplyInputExpanded);
      setAnswerInput({
        ...AnswerInput,
        content:""
      })
      enqueueSnackbar("Answer added succesfully!", {variant:"success"});
		} catch (e) {
			console.log(e);
      enqueueSnackbar("Could not add answer!", {variant:"error"});

		}
  }

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
                        }}>{question.createdAtRelative}</span>
                         </QnAHeader>
                       <QnAContent> 
                         {question.content}<br/>
                         <div>
                           {
                             !isReplyInputExpanded?
                             <>
                                <button 
                                  onClick={toggleExpandReplyInput}
                                  style = {{
                                    padding: "0 2px",
                                    background: "none",
                                    border: "none",
                                    color: FadedTextColor,
                                    cursor: "pointer",
                                    fontSize: "15px"
                                  }}
                                >
                                  Reply
                                </button>
                             </>
                             :
                             <>
                              <form
                                onSubmit = {handleSubmit}
                                style = {{
                                  margin: "10px"
                                }}>
                                <Input 
                                      required
                                      placeholder="Reply"
                                      color="secondary"
                                      style={{
                                        color:TextColor,
                                        width: "90%",
                                        marginBottom: "5px"
                                      }}
                                      
                                      onChange={(event:any)=>{
                                        setAnswerInput({
                                          ...AnswerInput,
                                          content : event.target.value
                                        })
                                      }}
                                      value={AnswerInput.content}
                                      // onSubmitCapture={()=>{replyToQuestion(question.id,"test")}}
                                      />
                                      <div 
                                        style ={{
                                          display: "flex",
                                          justifyContent: "flex-end"
                                      }}>
                                        <Button 
                                          onClick={toggleExpandReplyInput}
                                          style = {{
                                          padding: "0 2px",
                                          background: "none",
                                          border: "none",
                                          color: ErrorColor,
                                          cursor: "pointer",
                                          fontSize: "15px",
                                          margin: "0 5px"
                                          }}
                                        >
                                          Cancel
                                        </Button>
                                        <FormControlLabel 
                                          control={
                                            <Checkbox 
                                              defaultChecked 
                                              onChange={(event:any)=>{
                                                setAnswerInput({
                                                  ...AnswerInput,
                                                  anonymous : event.target.checked
                                                })
                                              }}
                                              />} 
                                            label="Anonymous" />
                                        <Button variant="contained" type="submit" style={{
                                          margin: "0 5px"
                                        }}>Submit</Button>
                                      </div>
                                  
                                
                              </form>
                              
                             </>
                           }
                              
                         </div>
                         
                        </QnAContent>
                        
                        <Answers>
                          <button 
                          onClick={toggleExpandAnswers}
                          style = {{
                            padding: "0 2px",
                            background: "none",
                            border: "none",
                            color: answers.length ? SecondaryColor : FadedErrorColor,
                            cursor: "pointer",
                            fontSize: "15px",
                            margin: "10px"
                          }}
                          disabled = {answers.length == 0}
                        >
                          {isExpanded ?
                            "Hide Answers  ▲": 
                            answers.length == 0 ? 
                                      "No Answers" :
                                      answers.length + " Answers 	▼"
                          }
                        </button>
                          <Collapse in={isExpanded}>
                            {answers.map( answer => {
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
                            }}>{answer.createdAtRelative}</span>
                            </QnAHeader>
                                <QnAContent> {answer.content} </QnAContent>
                              </AnswerContainer>
                            })}
                          </Collapse>
                          
                        </Answers>
                        
                      </QuestionContainer>
};

export default Question;