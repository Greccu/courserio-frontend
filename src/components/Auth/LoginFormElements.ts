import styled from "styled-components";
import {PrimaryColor, SecondaryColor, LogoColor, BackgroundColor, TextColor, FadedTextColor, FadedSecondaryColor, Fadedx2SecondaryColor} from "../../utils/theme"
import backgroundImg from '../../assets/loginbg.png'

export const LoginContainer = styled.div`
  background-image: url("${backgroundImg}");
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const LoginCard = styled.div`
  border-radius: 30px;
  background-color: ${PrimaryColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 0;
  height: 600px;
  width: 500px;
  position: relative;
  z-index: 1;
`

export const LoginHeader = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 1000;
  font-size: 50px;
  line-height: 100px; 
  text-align: center;
  padding: 10px auto;
  margin: 10px 25px;
  width: 450px;
  height: 100px;
  color: ${TextColor};
  border-bottom: 4px solid ${SecondaryColor};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const LoginInput = styled.input`
  background-color: transparent;
  border: none;
  color: ${TextColor};
  width: 400px;
  height: 50px;
  font-size: 24px;
  border-bottom: 1px solid ${SecondaryColor};
  margin-top: 30px;
  /* text-align: center; */
  :focus{
    
    background-color: ${BackgroundColor};
    outline: none;
    border-radius: 10px 10px 0px 0px;
  }
`
export type LoginAProps = {
  centered: boolean,
  highlighted: boolean
  bigMargin: boolean
}

export const LoginA = styled.a<LoginAProps>(
  ({centered = false, highlighted = false, bigMargin = false}) =>` 
  text-align: ${centered?'center':'left'};
  margin-top: ${bigMargin?'80px':'30px'};
  color: ${highlighted?TextColor:FadedTextColor};
  outline: none;
  text-decoration: none;
`)

export const LoginButton = styled.button`
  margin-top: 30px;
  margin-bottom: 0px;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  font-size: 30px;
  font-weight: 900;
  color: ${PrimaryColor};
  background-color: ${SecondaryColor};
  outline: none;
  text-decoration: none;
  :hover{
    background-color: ${FadedSecondaryColor};
    outline: none;
  }

  :focus{
    background-color: ${Fadedx2SecondaryColor};
    outline: none;
  }
`