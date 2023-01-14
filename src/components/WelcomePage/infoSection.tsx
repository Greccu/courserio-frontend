import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Button, ButtonR
} from "./WelcomePageComponents";

export interface InfoSectionProps{
  lightBg:boolean,
  id:any,
  imgStart:any,
  topLine?:any,
  lightText:any,
  headline:any,
  darkText:any,
  description:any,
  buttonLabel?:any,
  buttonTo?:any,
  buttonRef?:any,
  img:any,
  alt?:any,
  primary:any,
  dark:any,
  dark2?:any,
}

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonTo,
  buttonRef,
  img,
  alt,
  primary,
  dark,
  dark2}:InfoSectionProps) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </Subtitle>
                {buttonLabel &&
                  (buttonTo ? (
                    <BtnWrap>
                      <Button
                        to={buttonTo}
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        primary={primary}
                        dark={dark}
                        big={false}
                        fontBig={false}
                      >
                        {buttonLabel}
                      </Button>
                    </BtnWrap>
                  ) : (
                    <BtnWrap>
                      <ButtonR
                        to={buttonRef}
                        primary={primary}
                        dark={dark}
                        big={false}
                        fontBig={false}
                      >
                        {buttonLabel}
                      </ButtonR>
                    </BtnWrap>
                  ))}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
