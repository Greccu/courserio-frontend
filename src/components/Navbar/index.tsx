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
import { LoginColor, LogoutColor } from "../../utils/theme";

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
                  <NavLinkR
                    to={"user/"+context.userInfo.id}
                  >
                    Profile
                  </NavLinkR>
                </NavItem>
                <NavItem>
                  <NavLinkR
                    to=""
                    onClick={context.logOut} 
                    style={{color:LogoutColor}} 
                  >
                    Logout
                  </NavLinkR>
                </NavItem>
              </NavMenu>
            ):(<NavMenu
              style={{justifyContent: "right"}}
              >
              <NavItem>
                  <NavLinkR
                    to="login"
                    style={{color:LoginColor}} 
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