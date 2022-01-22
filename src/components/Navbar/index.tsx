import React, { useState, useEffect } from "react";
import {AppName} from "../../utils/constants";
import { IconContext } from "react-icons/lib";
import { animateScroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLinks,
  NavLogo
} from "./NavbarElements";
import App from "../../App";

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

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="">
              {AppName}
            </NavLogo>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to=""
                  onClick={toggleHome}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="education"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Education
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="skills"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Skills
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="projects"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Projects
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="others"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Others
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;