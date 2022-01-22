import React, { useState, useEffect, useContext } from "react";
import {AppName} from "../../utils/constants";
import { IconContext } from "react-icons/lib";
import { animateScroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinkS,
  NavLogo,
  NavLinkR
} from "./NavbarElements";
import App, { UserContext } from "../../App";
import { useUser } from "../Auth/useUser";

const Navbar = (toggle:any) => {
  const [scrollNav, setScrollNav] = useState(false);
  
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };
  const context = useContext(UserContext);
  console.log(context);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="">
              {AppName}
            </NavLogo>
            {!!context.jwt ? (
              <NavMenu>
                <NavItem>
                  <NavLinkS
                    to=""
                    onClick={toggleHome}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Home
                  </NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    About
                  </NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS
                    to="education"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Education
                  </NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS
                    to="skills"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Skills
                  </NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS
                    to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Projects
                  </NavLinkS>
                </NavItem>
                <NavItem>
                  <NavLinkS
                    to="others"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                  >
                    Others
                  </NavLinkS>
                </NavItem>
              </NavMenu>
            ):(<NavMenu
              style={{justifyContent: "right"}}
              >
              <NavItem>
                  <NavLinkR
                    to="login"
                  >
                    Login
                  </NavLinkR>
                </NavItem>
            </NavMenu>)}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;