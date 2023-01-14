import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { AccentColor, BackgroundColor, FadedAccentColor, FadedSecondaryColor, Fadedx2SecondaryColor, LightPrimaryColor, LightSecondaryColor, PrimaryColor, SecondaryColor } from "../../utils/theme";

// Buttons

export interface ButtonProps{
 primary:boolean,
 big: boolean,
 dark: boolean,
 fontBig: boolean
}

export const Button = styled(LinkS)<ButtonProps>(({primary, big, dark, fontBig}) =>`
  border-radius: 50px;
  background: ${primary ? AccentColor : PrimaryColor};
  white-space: nowrap;
  padding: ${(big ? "14px 48px" : "12px 30px")};
  color: ${(dark ? PrimaryColor : AccentColor)};
  font-size: ${(fontBig ? "24px" : "20px")};
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(primary ? FadedAccentColor : LightPrimaryColor)};
  }
`);

export const ButtonR = styled(LinkR)<ButtonProps>(({primary, big, dark, fontBig}) =>`
  border-radius: 50px;
  background: ${(primary ? AccentColor : PrimaryColor)};
  white-space: nowrap;
  padding: ${(big ? "14px 48px" : "12px 30px")};
  color: ${(dark ? PrimaryColor : AccentColor)};
  font-size: ${(fontBig ? "24px" : "20px")};
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(primary ? FadedAccentColor : LightPrimaryColor)};
  }
`);

// Hero Section

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(5, 196, 107, 0.1) 0%,
        rgba(5, 196, 107, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(25, 42, 86, 0.8) 0%, transparent);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a24;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  text-shadow: 2px 2px 10px #192a56;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  text-shadow: 0 0 10px #192a56;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

// Info Cards

export const InfoCardsContainer = styled.div`
  height: 860px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${LightSecondaryColor};
  color: #fff;
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const InfoCardsWrapper = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const InfoCardsCard = styled.div`
  background: #152347;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 500px;
  width: 470px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const InfoCardsIcon = styled.img`
  height: 300px;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InfoCardsH1 = styled.h1`
  font-size: 2.5rem;
  color: #152347;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const InfoCardsH2 = styled.h2`
  color: ${FadedAccentColor};
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const InfoCardsP = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;


// Info
export interface InfoContainerProps{
  lightBg: boolean
}

export const InfoContainer = styled.div<InfoContainerProps>`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? LightSecondaryColor : PrimaryColor)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoWrapper2 = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1800px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div<RowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export interface RowProps{
  imgStart: boolean
}

export const ProjectRow = styled.div<RowProps>`
  display: grid;
  //grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1200px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const PColumn1 = styled.div`
  max-width: 500px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const PColumn2 = styled.div`
  flex-grow: 4;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${FadedAccentColor};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export interface HeadingProps{
  lightText: boolean
}
export const Heading = styled.h1<HeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#dcdde1" : "#192a56")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export interface SubtitleProps{
  darkText: boolean
}
export const Subtitle = styled.p<SubtitleProps>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;

  color: ${({ darkText }) => (darkText ? "#152347 " : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Video = styled.video`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

