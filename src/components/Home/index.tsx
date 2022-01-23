import React, { useState, useEffect, useContext } from "react";
import { HomeContainer, HomeContent } from "./HomeComponents";
import Slideshow from "./slideshow";

const HomePage = () => {
  return (
      <>
        <HomeContainer>
          <Slideshow/>
          <HomeContent>
            Content
            <br/><br/>
            Content

          </HomeContent>
        </HomeContainer>
      </>
  );
};

export default HomePage;