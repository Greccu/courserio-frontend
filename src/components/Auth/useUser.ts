import axios from "axios";
import { setegid } from "process";
import { useState } from "react";
import { useHistory } from "react-router";
import { apiClient } from "../../utils/apiClient";
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

        const res = await axios.post(url, details, config).then((res)=>{
          if(res.status != 200){
            console.log("oopsie");
            setError(res.data);
          }
          else{
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
          }
        }).catch(error => {
          // Handle error.
          var err = JSON.parse(error.response.data.Message);
          setError(err.error_description)
          console.log('An error occurred:', error);
        });
      
        
    }

    const logOut = () => {
        console.log("logging out")
        localStorage.removeItem("JWTToken");
        localStorage.removeItem("userInfo")
        setJwt("")
        setUserInfo("")
    }

    const signUp = async (details:any) => {
      if (details.password != details.confirmPassword) {
        setError("Passwords don't match");
      } else {
        try {
          const res = await apiClient.post("users/register", {
            Email: details.email,
            Username: details.username,
            FirstName: details.firstName,
            LastName: details.lastName,
            ProfilePicture: details.profilePicture,
            Password: details.password,
            ConfirmPassword: details.confirmPassword,
          });
          setError("");
          history.push("/login");
          history.go(0);
        } catch (err:any) {
          console.log(err.response.data.Message);
          setError(err.response.data.Message ?? "An error has occcured");
        }
      }
    };

    return {jwt,setJwt,userInfo,setUserInfo,error,setError,pageToDisplay,setPageToDisplay, logOut, logIn, signUp}
}