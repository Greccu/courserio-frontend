import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { LoginCard, LoginContainer, LoginForm, LoginA, LoginHeader, LoginInput, LoginButton } from "./LoginFormElements";


type Props = {
	LoginFunc: Function;
	error: string;
};

const Login = ({ LoginFunc, error }: Props): JSX.Element => {


  const [details, setDetails] = useState({ username: "", password: "" });
	const context = useContext(UserContext);

	const submitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		LoginFunc(details);
	};

	const handleLogin = () => {
		//@ts-ignore
		context?.logIn(details);
	};

  return (
      <>
      <LoginContainer>
        <LoginCard>
          <LoginHeader>
            Login
          </LoginHeader>
          <LoginForm onSubmit={submitHandler}>
            <LoginInput 
              type = "text" 
              placeholder="Username" 
              id="username" 
              required={true}
              onChange={(e) => {
                setDetails({ ...details, username: e.target.value });
              }}
              value={details.username}
            />

            <LoginInput 
              type = "password" 
              placeholder="Password"
              id="password"
              required={true}
                onChange={(e) => {
                  setDetails({ ...details, password: e.target.value });
                }} 
                value={details.password}
            />

            <LoginA 
              href="" 
              highlighted = {false} 
              centered = {false} 
              bigMargin = {false}>Forgot password?</LoginA>

            <LoginButton onClick = {handleLogin}>Login</LoginButton>
            <LoginA 
              href="signup" 
              highlighted = {true} 
              centered = {true} 
              bigMargin = {true}>Not a member?<b>Join now!</b></LoginA>
          </LoginForm>
        </LoginCard>
      </LoginContainer>
      </>
  );
};

export default Login;