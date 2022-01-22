import React, { useState, useEffect, useContext } from "react";
import { HomeContainer } from "./HomeComponents";
import Slideshow from "./slideshow";

const HomePage = () => {
  return (
      <>
        <Slideshow/>
        <HomeContainer>
        </HomeContainer>
      </>
  );
};

export default HomePage;