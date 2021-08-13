import React, { useEffect, useMemo, useState } from 'react';
import { IndexService } from './services/index.service';
import Navbar from './components/navbar/navbar';
import BackCatalog from './components/BackCatalog/BackCatalog'
import { Box } from '@material-ui/core';

import './index.css'
import WhatsHot from 'components/WhatsHot/WhatsHot';

const App = () => {
  const [data, setData] = useState<any>('');

  const indexService = useMemo(() => new IndexService(), []);

  const getPacks = React.useCallback(
    async (id: string) => {
      const getPacksData = await indexService.getItemsDetails(id);

      if (getPacksData) {
        setData(getPacksData);
      }
    },
    [IndexService],
  );

  useEffect(() => {
    getPacks('60a9742105ab64c1adc4');
  }, [getPacks]);

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
