import React, { useEffect, useMemo, useState } from 'react';
import { IndexService } from './services/index.service';
import Navbar from './components/navbar/navbar';
import BackCatalog from './components/BackCatalog/BackCatalog'
import { Box } from '@material-ui/core';

import './index.css'
import WhatsHot from 'components/WhatsHot/WhatsHot';
import SinglePack from 'components/SinglePack/SinglePack';

const App = () => {

  return (
    <>
      <Navbar />
      <Box className="mainBody">
        <BackCatalog />
        <SinglePack />
      </Box>
      <WhatsHot />
    </>
  )
};

export default App;
