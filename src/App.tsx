import React, { useEffect, useMemo, useState } from 'react';
import { IndexService } from './services/index.service';
import Navbar from './components/navbar/navbar';
import BackCatalog from './components/BackCatalog/BackCatalog'
import { Box } from '@material-ui/core';

import './index.css'
import WhatsHot from 'components/WhatsHot/WhatsHot';

const App = () => {

  return (
    <>
      <Navbar />
      <Box className="mainBody">
        <BackCatalog />
      </Box>
      <WhatsHot />
    </>
  )
};

export default App;
