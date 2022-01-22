import React, { useState, useEffect } from "react";
import {AppName} from "../../utils/constants";
import { IconContext } from "react-icons/lib";
import App from "../../App";
import { LoginCard, LoginContainer, LoginForm, LoginA, LoginHeader, LoginInput, LoginButton } from "./LoginFormElements";

const Signup = () => {
  return (
      <>
      <LoginContainer>
        <LoginCard>
          <LoginHeader>
            Signup
          </LoginHeader>
          <LoginForm>
            <LoginInput type = "text" placeholder="Username" id="username"/>
            <LoginInput type = "text" placeholder="Email" id="email"/>
            <LoginInput type = "password" placeholder="Password" id="password"/>
            <LoginInput type = "password" placeholder="Confirm Password" id="confirm-password"/>
            <LoginButton>Register</LoginButton>
            <LoginA href="login" highlighted = {true} centered = {true} bigMargin = {false}>Already a member? <b>Log In!</b></LoginA>
          </LoginForm>
        </LoginCard>
      </LoginContainer>
      </>
  );
};

export default Signup;