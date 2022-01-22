import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { BackendUrl } from "../../utils/constants";


export const useUser = () => {
    const [jwt,setJwt] = useState("");
    const history = useHistory();

    const [userInfo,setUserInfo] = useState({})

    // const [user, setUser] = useState({ email: "", uid: 0 });
    const [error, setError] = useState("");
    const [pageToDisplay, setPageToDisplay] = useState("login");

    const logIn = async (details : any) => {
        let url = BackendUrl + "/auth/token";
        
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };

        try{
            const res = await axios.post(url, details, config);
            let token = res.data.access_token;
            const userObj = JSON.stringify({
              access_token: token
            });
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