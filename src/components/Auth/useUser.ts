import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { BackendUrl } from "../../utils/constants";
import { UserInfoInterface } from "./types";


export const useUser = () => {
    const [jwt,setJwt] = useState("");
    const history = useHistory();

    const [userInfo,setUserInfo] = useState({})

    // const [user, setUser] = useState({ email: "", uid: 0 });
    const [error, setError] = useState("");
    const [pageToDisplay, setPageToDisplay] = useState("login");

    const logIn = async (details : any) => {
        let url = BackendUrl + "users/login";
        
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };

        try{
            const res = await axios.post(url, details, config);
            let token = res.data.accessToken;
            const userObj = JSON.stringify({
              access_token: token,
              id: res.data.id,
              username: res.data.username,
              profilePicture: res.data.profilePicture,
              role: "user"
            });
            // console.log(userObj);
            // console.log(res.data);
            const parsedUserObj = JSON.parse(userObj)
            localStorage.setItem("JWTToken", token);
            localStorage.setItem("userInfo", userObj);
            setJwt(token);
            setUserInfo(parsedUserObj);
            
            history.goBack();
        }catch(err){
            console.log(err)
        }
        
    }

    const logOut = () => {
        console.log("logging out")
        localStorage.removeItem("JWTToken");
        localStorage.removeItem("userInfo")
        setJwt("")
        setUserInfo("")
    }

    return {jwt,setJwt,userInfo,setUserInfo,error,setError,pageToDisplay,setPageToDisplay, logOut, logIn}
}