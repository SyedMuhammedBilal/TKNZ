import React, { useEffect, useMemo, useState } from "react";
import { IndexService } from "./services/index.service";
import Navbar from "./components/navbar/navbar";
import BackCatalog from "./components/BackCatalog/BackCatalog";
import { Box } from "@material-ui/core";
import Hamburger from "./components/navbar/hamburger";
import "./index.css";
import WhatsHot from "components/WhatsHot/WhatsHot";
import SinglePack from "components/SinglePack/SinglePack";
import ESports from "components/navbar/ESports";

function App() {
  return (
    <>
      <Navbar />

      <ESports />
      <Box className="mainBody">
        <BackCatalog />
        <SinglePack />
      </Box>
      <WhatsHot />
    </>
  );
}

export default App;
