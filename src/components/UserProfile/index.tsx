import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserProfileDto } from "../../types/react-slideshow-image/types";
import { apiClient } from "../../utils/apiClient";
import Navbar from "../Navbar";
import PageContainer from "../PageContainer";

const UserProfile = () => {

  const { id } = useParams<any>();
  const [userProfile, setUserProfile] = useState<UserProfileDto>();
  const getProfile = async () => {
    try {
			const res = await apiClient.get("users/"+id, {
			});
			const user = res.data;
			setUserProfile(user);
      console.log(user);
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
          {JSON.stringify(userProfile)}
       </PageContainer>
      </>
  );
};

export default UserProfile;