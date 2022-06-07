import React, { useState } from "react";
import ReactPlayer from "react-player/file";
// import Video from '../../assets/welcome-page-video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button
} from "./WelcomePageComponents";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
  <>
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} /> */}
        <div style={{
            width: "100%",
            aspectRatio: "16/9",
            // height: "100%",
            objectFit: "cover",
            background: "#232a24",
        }}>
          <ReactPlayer url='videos/video.mp4' playing={true} loop={true} controls={false} width="100%" height="100%"/>
        </div>
      </HeroBg>
      <HeroContent>
        <HeroH1>Courserio</HeroH1>
        <HeroP>
          The evolution of online learning.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            big={false}
            dark={true}
            fontBig={false}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            About us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  </>
    
  );
};

export default HeroSection;
