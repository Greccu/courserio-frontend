import { Tag } from "@mui/icons-material";
import { Autocomplete, AutocompleteGetTagProps, TextField } from "@mui/material";
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

export const CreateChapterField = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin: 10px;
  padding: 5px;
  border: 1px solid ${SecondaryColor};
  border-radius: 10px;
`

export const CustomAutocomplete = styled(Autocomplete)({
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
