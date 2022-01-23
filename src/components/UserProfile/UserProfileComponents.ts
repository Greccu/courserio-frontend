import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {PrimaryColor, SecondaryColor, LogoColor} from "../../utils/theme"

  // background: ${({ scrollNav }) => (scrollNav ? "#152347" : "transparent")};
    // margin-top: ${({ margin }) => (margin ? "0px" : "-80px")};

export const TEST = styled.nav`
  background: ${PrimaryColor};
  height: 80px;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;