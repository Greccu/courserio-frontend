import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiClient } from "../../utils/apiClient";
import PageContainer from "../PageContainer";
import { AboutMe, FeaturedCourse, FeaturedCourseMainContent, FeaturedCourseMiniature, FeaturedCourseTitle, MainInformation, ProfileContainer, ProfileContent, ProfileContentTitle, ProfileHeader, ProfileInformation, ProfileInformationP, ProfilePicture } from "./UserProfileComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGenderless, faBirthdayCake, faVenusMars, faPhone, faMailBulk, faFaucet, faStar} from "@fortawesome/free-solid-svg-icons";
import { UserProfileDto } from "../../types/user";
import { Rating } from "@mui/material";
import { AccentColor } from "../../utils/theme";


const UserProfile = () => {

  const { id } = useParams<any>();
  const [userProfile, setUserProfile] = useState<UserProfileDto>();
  const getProfile = async () => {
    try {
			const res = await apiClient.get("user/"+id, {
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
         <ProfileContainer>
           <ProfileHeader>
             <ProfilePicture  imageUrl={userProfile?.profilePicture}/>
             <MainInformation>
               <b>Full Name: </b>{userProfile?.firstName + " " + userProfile?.lastName}
               <br/>
               <b>Username: </b>{userProfile?.username}
             </MainInformation>
           </ProfileHeader>
           <ProfileInformation>
             <ProfileInformationP>
               Personal Information
             </ProfileInformationP>

             <ProfileInformationP>
              <FontAwesomeIcon icon ={faBirthdayCake}/> Date of Birth <br/>
              {/* {userProfile?.dateOfBirth.toLocaleDateString} */}
              <b>{userProfile?.dateOfBirth}</b>
             </ProfileInformationP>

             <ProfileInformationP>
              <FontAwesomeIcon icon ={faVenusMars}/> Gender <br/>
              <b>{userProfile?.gender}</b>
             </ProfileInformationP>

             <ProfileInformationP>
              <FontAwesomeIcon icon ={faPhone}/> Phone Number <br/>
              <b>{userProfile?.phoneNumber}</b>
             </ProfileInformationP>

             <ProfileInformationP>
              <FontAwesomeIcon icon ={faMailBulk}/> Email <br/>
              <b>{userProfile?.email}</b>
             </ProfileInformationP>
           </ProfileInformation>
           <ProfileContent>
             <ProfileContentTitle>
               About Me
             </ProfileContentTitle>
             <AboutMe>
                {userProfile?.aboutMe}
             </AboutMe>
             
             {!!userProfile?.featuredCourse?
              <>
                <ProfileContentTitle>
                  Featured Course
                </ProfileContentTitle>
                <FeaturedCourse>
                  <FeaturedCourseMainContent>
                    <FeaturedCourseTitle>{userProfile?.featuredCourse.title}</FeaturedCourseTitle>
                    <div style = {{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "left",
                      width: "100%"
                    }}>
                      <Rating 
                        value={userProfile.featuredCourse.averageRating}
                        readOnly
                      /> <span style={{
                        color:AccentColor
                      }}>
                        {userProfile.featuredCourse.averageRating}
                      </span><br/></div>
                    
                    <>{userProfile?.featuredCourse.description}</>
                  </FeaturedCourseMainContent>
                  <FeaturedCourseMiniature imageUrl={userProfile?.featuredCourse.miniatureImage} href={"/course/"+userProfile.featuredCourse.id}/>
                </FeaturedCourse>
              </>:
             <></>
             }
             
           </ProfileContent>
         </ProfileContainer>
       </PageContainer>
      </>
  );
};

export default UserProfile;