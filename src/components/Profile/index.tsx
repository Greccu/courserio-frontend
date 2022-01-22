import axios from "axios";
import React, { useState, useEffect, useContext, useCallback } from "react";
import { Url } from "url";
import { UserContext } from "../../App";
import { BackendUrl } from "../../utils/constants";

type Props = {
	id: number;
};



type UserInfo = {
  id: number
  profilePicture: Url
  firstName: string
  lastName: string
  username: string
  email: string
  about: string
  courses: string[]
}

const ProfilePage = async (props : Props) => {

  const context = useContext(UserContext);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const fetchUserInfo = useCallback(
    async() => {
      let url = BackendUrl + "/api/user/" + props.id;
      const config = {
        headers: {
          Authorization: "Bearer " + context.jwt,
        },
      };

      await axios({
        method: "GET",
        url: url,
        headers: config.headers,
      }).then(
        (response) => {
          console.log(response);
          setUserInfo(response.data)
        },
        (getError) => {
          console.log(getError);
        }
      );

    },
    [props.id],
  )

  useEffect(() => {
    fetchUserInfo()
  },[fetchUserInfo]);
  
  
  return (
      <>
        {/* <HomeContainer> */}
          {userInfo}
        {/* </HomeContainer> */}
      </>
  );
};

export default ProfilePage;