import { TextField } from "@mui/material";
import styled from "styled-components";
import { AccentColor, BackgroundColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";

export const CourseCreateContainer = styled.div` 
  display: flex;
  margin: 10px auto;
  width: 90%;
  flex-direction: row;
  gap: 20px
`

export const CustomInputField = styled(TextField)({
  color: PrimaryColor,
  '& label.Mui-focused': {
    color: SecondaryColor,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: SecondaryColor,
  },
  '& .MuiInputBase-input': {
    color: TextColor,
  },
  '& .MuiFormLabel-root':{
    color: TextColor
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: TextColor,
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: SecondaryColor,
    },
  },
});

export const CoursePreview = styled.div`
  width: 100px;
  height:100px;
  background-color: yellow
`