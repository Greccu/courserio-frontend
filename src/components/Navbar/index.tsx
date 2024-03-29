import React, { useState, useEffect, useContext } from "react";
import {AppName} from "../../utils/constants";
import { IconContext } from "react-icons/lib";
import { animateScroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavMenu,
  NavItem,
  NavLogo,
  NavLinkR,
  PopperButton,
  NavLinkS
} from "./NavbarElements";
import { UserContext } from "../../App";
import { LoginColor, LogoutColor, PrimaryColor, SecondaryColor, TextColor } from "../../utils/theme";
import {Button, Fade, Paper, Popper} from '@mui/material';

export interface NavbarProps {
 canBeTransparent?: boolean  
}

const Navbar = ({canBeTransparent = false}:NavbarProps) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement:any) => (event:any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

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
  console.log("can be transparent = ", canBeTransparent?.toString());
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav transparent={!scrollNav && canBeTransparent}>
          <NavbarContainer>
            <NavLogo to="">
              {AppName}
            </NavLogo>
            {!!context.jwt ? (
              <NavMenu>
                 <NavItem>
                  <NavLinkR
                    to="/course/create"
                    style={{color:LoginColor}} 
                  >
                    Create Course
                  </NavLinkR>
                </NavItem>
                 <Popper 
                  open={open} 
                  anchorEl={anchorEl} 
                  placement={placement} 
                  transition
                  style={{
                    zIndex: 100
                  }}
                  >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper
                       style={{
                          width:"200px",
                          backgroundColor: PrimaryColor,
                          border: "3px solid "+SecondaryColor,
                          display: "flex",
                          flex:3,
                          flexDirection:"column",
                          borderRadius: "20px"
                       }}
                      >
                          <div
                            style={{
                              width: "100%",
                              height: "50px",
                              fontSize: "24px",
                              color: TextColor,
                              paddingLeft: "10px",
                              borderBottom: "2px solid "+SecondaryColor,
                            }}
                          >{context.userInfo.username}</div>
                          <PopperButton
                            to={"/user/"+context.userInfo.id}
                          >
                            Profile
                          </PopperButton>
                          <PopperButton
                            to=""
                            onClick={context.logOut} 
                            style={{
                              color:LogoutColor
                            }} 
                          >
                            Logout
                          </PopperButton>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
                <Button 
                  onClick={handleClick('bottom-end')}
                  style={{
                    height: "100%",
                  }}
                >
                  <div 
                  style={{
                    margin: "20px",
                    backgroundImage: "url(" + context.userInfo.profilePicture + ")",
                    backgroundColor: SecondaryColor,
                    backgroundSize: "100%",
                    height: "100%",
                    aspectRatio: "1",
                    borderRadius: "50px"
                  }}/>
                  </Button>
                
              </NavMenu>
            ):(<NavMenu
                style={{justifyContent: "right"}}
                >
               <NavItem>
               <NavLinkS
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  // scrollNav={scrollNav}
                >
                  About
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="contribution"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  // scrollNav={scrollNav}
                >
                  Contribution
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="story"
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact="true"
                  offset={-80}
                  // scrollNav={scrollNav}
                >
                  Story
                </NavLinkS>
              </NavItem>
              <NavItem>
                <NavLinkS
                  to="join-us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact="true"
                  offset={-80}
                  // scrollNav={scrollNav}
                >
                  Join us
                </NavLinkS>
              </NavItem>
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