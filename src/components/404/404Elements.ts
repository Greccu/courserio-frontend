import styled from "styled-components";
import {PrimaryColor, SecondaryColor, LogoColor, BackgroundColor, TextColor, FadedTextColor, FadedSecondaryColor, Fadedx2SecondaryColor} from "../../utils/theme"
import backgroundImg from '../../assets/loginbg.png'

export const NotFoundContainer = styled.div`
  background-image: url("${backgroundImg}");
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  font-size: 100px;
  color: ${PrimaryColor}
`;