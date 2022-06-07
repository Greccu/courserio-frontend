import React from "react";
import img1 from "../../assets/contribution1.svg";
import img2 from "../../assets/contribution2.svg";
import {
  InfoCardsContainer,
  InfoCardsH1,
  InfoCardsWrapper,
  InfoCardsCard,
  InfoCardsIcon,
  InfoCardsH2,
  InfoCardsP,
  Button
} from "./WelcomePageComponents";
const InfoCards = () => {
  return (
    <InfoCardsContainer id="contribution">
      <InfoCardsH1>Our Contribution To Education</InfoCardsH1>
      <InfoCardsWrapper>
        <InfoCardsCard>
          <InfoCardsIcon src={img1} />
          <InfoCardsH2>Free Learning Materials</InfoCardsH2>
          <InfoCardsP>
            We provide over 10,000 courses, free to access 
          </InfoCardsP>
        </InfoCardsCard>
        <InfoCardsCard>
          <InfoCardsIcon src={img2} />
          <InfoCardsH2>Quality Content</InfoCardsH2>
          <InfoCardsP>
            Despite beeing a free platform, we carefully select our content to provide only top tier education.
          </InfoCardsP>
        </InfoCardsCard>
      </InfoCardsWrapper>
      <Button
        to="story"
        smooth={true}
        duration={500}
        spy={true}
        offset={-80}
        primary={false}
        dark={false}
        big={false}
        fontBig={false}
      >
        Our Story
      </Button>
    </InfoCardsContainer>
  );
};

export default InfoCards;
<InfoCardsCard>
  <InfoCardsIcon //src={}
  />
  <InfoCardsH2></InfoCardsH2>
  <InfoCardsP></InfoCardsP>
</InfoCardsCard>;