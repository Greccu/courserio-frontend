import { ListItem } from "@mui/material";
import { ChapterCreateDto, ChapterDto } from "../../types/chapter";
import { BackgroundColor, TextColor } from "../../utils/theme";

const ChapterPreview = (chapter : ChapterDto | ChapterCreateDto) => {

  if ('id' in chapter){
    return <>
      <a href={"/chapter/"+chapter.id} style = {{textDecoration:"none", color: TextColor}}>
        <ListItem style = {{border:"solid 1px " + BackgroundColor}}>
          {chapter.title}
        </ListItem>
      </a>    
    </>
  }else{
    return <>
      <ListItem style = {{border:"solid 1px " + BackgroundColor}}>
        {chapter.title}
      </ListItem>
    </>
  }  
}

export default ChapterPreview;