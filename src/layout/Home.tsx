import React, { useState, createContext } from "react";
import Navbar from "../components/navbar/navbar";
// import { Box } from "@material-ui/core";
import "../index.css";
import WhatsHot from "../components/WhatsHot/WhatsHot";
import ESports from "../components/navbar/ESports";
import HomeHeroSection from "components/Home-Hero-Section/HomeHeroSection";

export const HamburgerData = createContext<any>(false);

function Home() {
  const [hamburger, setHamburger] = useState<any>(false);

  return (
    <HamburgerData.Provider value={{ hamburger, setHamburger }}>
      <Navbar />
      {!hamburger ? (
        <>
          <ESports />
          {/* <Box className="mainBody"></Box> */}
          <HomeHeroSection />
          <WhatsHot />
        </>
      ) : null}
    </HamburgerData.Provider>
  );
};

export default Home;
