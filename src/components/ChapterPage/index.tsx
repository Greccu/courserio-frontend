import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { ChapterPageDto } from "../../types/types";
import { apiClient } from "../../utils/apiClient";
import PageContainer from "../PageContainer";


const CoursePage = () => {

  const { id } = useParams<any>();
  const [chapter, setChapter] = useState<ChapterPageDto>();
  const getProfile = async () => {
    try {
			const res = await apiClient.get("chapters/"+id, {
			});
			const chapterContent = res.data;
			setChapter(chapterContent);
      console.log(chapterContent);
		} catch (e) {
			console.log(e);
		}
  }

  useEffect(() => {
    getProfile();
  },[]);

  return (
      <>
       <PageContainer>
         <ReactPlayer url={[
           chapter?.videoUrl??"",
           chapter?.videoUrl??""
           ]}/>
       </PageContainer>
      </>
  );
};

export default CoursePage;