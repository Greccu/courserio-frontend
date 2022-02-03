import React, { useState, useEffect, useContext } from "react";
import {AppName} from "../../utils/constants";
import { IconContext } from "react-icons/lib";
import App, { UserContext } from "../../App";
import { LoginCard, LoginContainer, LoginForm, LoginA, LoginHeader, LoginInput, LoginButton, LoginError, ScrollableForm } from "./LoginFormElements";

const Signup = () => {

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    profilePicture: "",
    password: "",
    confirmPassword: "",
  });
  
  const context = useContext(UserContext);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
		await context?.signUp(details);
	};

  return (
      <>
      <LoginContainer>
        <LoginCard>
          <LoginHeader>
            Signup
          </LoginHeader>
          <LoginForm onSubmit={handleSignup}>
            <ScrollableForm>

              <LoginInput type = "text" 
                placeholder="First Name" 
                id="firstname" 
                onChange={(e) => {
                  setDetails({ ...details, firstName: e.target.value });
                }}
                value={details.firstName}
                required
              />
              <LoginInput type = "text" 
                placeholder="Last Name" 
                id="lastname" 
                onChange={(e) => {
                  setDetails({ ...details, lastName: e.target.value });
                }}
                value={details.lastName}
                required
              />
              
              <LoginInput type = "text" 
                placeholder="Username" 
                id="username" 
                onChange={(e) => {
                  setDetails({ ...details, username: e.target.value });
                }}
                value={details.username}
                required
              />

              
              <LoginInput type = "text" 
                placeholder="Email" 
                id="email"
                onChange={(e) => {
                  setDetails({ ...details, email: e.target.value });
                }}
                value={details.email}
                required
              />

              <LoginInput type = "text" 
                  placeholder="Profile Picture URL" 
                  id="profilepictureurl" 
                  onChange={(e) => {
                    setDetails({ ...details, profilePicture: e.target.value });
                  }}
                  value={details.profilePicture}
                  required
              />
              <LoginInput type = "password" 
                placeholder="Password" 
                id="password"
                onChange={(e) => {
                  setDetails({ ...details, password: e.target.value });
                }}
                value={details.password}
                required
              />
              <LoginInput type = "password" 
                placeholder="Confirm Password" 
                id="confirm-password"
                onChange={(e) => {
                  setDetails({ ...details, confirmPassword: e.target.value });
                }}
                value={details.confirmPassword}
                required
              />
            </ScrollableForm>
            <LoginButton>Register</LoginButton>
          </LoginForm>
          <LoginError>{context.error}</LoginError>
          <LoginA href="login" highlighted = {true} centered = {true} bigMargin = {false}>Already a member? <b>Log In!</b></LoginA>
        </LoginCard>
      </LoginContainer>
      </>
  );
};

export default Signup;