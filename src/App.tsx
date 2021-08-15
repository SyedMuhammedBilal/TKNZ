import React, { useEffect, useMemo, useState,createContext } from "react";
import { IndexService } from "./services/index.service";
import Navbar from "./components/navbar/navbar";
import BackCatalog from "./components/BackCatalog/BackCatalog";
import { Box } from "@material-ui/core";
import Hamburger from "./components/navbar/hamburger";
import "./index.css";
import WhatsHot from "components/WhatsHot/WhatsHot";
import SinglePack from "components/SinglePack/SinglePack";
import ESports from "components/navbar/ESports";

export  const HamburgerData = createContext<any>(false)

function App() {
  const [hamburger, setHamburger] = useState<any>(false);
  return (
    <HamburgerData.Provider value={{hamburger,setHamburger}}>
      <Navbar />
     {!hamburger ?
     <> 
      <ESports />
      <Box className="mainBody">
        <BackCatalog />
        <SinglePack />
      </Box>
      <WhatsHot />
      </> 
      : null 
     }
    </HamburgerData.Provider>
  );
}

export default App;
