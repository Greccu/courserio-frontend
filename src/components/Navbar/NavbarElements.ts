import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import {PrimaryColor, SecondaryColor, LogoColor} from "../../utils/theme"

  // background: ${({ scrollNav }) => (scrollNav ? "#152347" : "transparent")};
    // margin-top: ${({ margin }) => (margin ? "0px" : "-80px")};

export const Nav = styled.nav`
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

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 100;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: right;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PNavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  width: 100%;
  justify-content: center;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinkS = styled(LinkS)`
  font-size: 20px;
  color: ${SecondaryColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px 10px #192a56;
  &:hover {
    color: #d2ced5;
  }
  &.active {
    border-bottom: 3px solid #c23616;
  }
`;

export const NavLinkR = styled(LinkR)`
  font-size: 20px;
  color: ${SecondaryColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-shadow: 2px 2px 10px #192a56;
  &:hover {
    color: #d2ced5;
  }
  &.active {
    border-bottom: 3px solid #c23616;
  }
`;

export const NavLogo = styled(LinkR)`
  color: ${LogoColor};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 48px;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: 1000;
  text-decoration: none;
`;