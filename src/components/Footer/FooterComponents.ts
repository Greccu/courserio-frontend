import styled from "styled-components";
import { PrimaryColor, SecondaryColor } from "../../utils/theme";

export const FooterContainer = styled.footer`
  background-color: ${PrimaryColor};
  z-index: 100;
  position: relative;
  /* bottom: 0; */
  /* width: 100%; */
  /* margin-bottom: 0; */
  /* padding: 0 */
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

  /* color: ${({ dark }) => (dark ? "#152347" : "#fff")}; */
export const SocialIconLink = styled.a`
  color: ${SecondaryColor};
  font-size: 48px;
  margin: 0 30px;
  @media screen and (max-width: 400px) {
    font-size: 32px;
  }
  @media screen and (max-width: 300px) {
    font-size: 24px;
  }
`;