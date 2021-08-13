import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './stylesheet';
import Logo from '../../assets/Vector.png';
import SearchIcon from '../../assets/search.png';
import AccountIcon from '../../assets/profileIcon.png';
import NotificationIcon from '../../assets/notificationsIcon.png';
import BurgerIcon from '../../assets/Burger.png';

import Image1 from '../../assets/eSportsTitle/image-1.png'
import Image2 from '../../assets/eSportsTitle/image-2.png'
import Image3 from '../../assets/eSportsTitle/image-3.png'
import Image4 from '../../assets/eSportsTitle/image-4.png'
import Image5 from '../../assets/eSportsTitle/image-5.png'
import Image6 from '../../assets/eSportsTitle/image-6.png'
import Image7 from '../../assets/eSportsTitle/image-7.png'
import Image8 from '../../assets/eSportsTitle/image-8.png'
import Image9 from '../../assets/eSportsTitle/image-9.png'
import Image10 from '../../assets/eSportsTitle/image-10.png'


export default function Navbar() {
  const classes = useStyles();
  return (
      <>
    <Box className={classes.navbarContainer}>
      {/* left items */}
      <Box className={classes.navbarWrapper}>
        <Box>
          <img className={classes.navbarLogo} src={Logo} alt="logo" />
        </Box>
        <Box>
          <Typography>Packs</Typography>
        </Box>
        <Box>
          <Typography>Marketplace</Typography>
        </Box>
        <Box>
          <Typography>Community</Typography>
        </Box>
      </Box>

      {/* right items */}
      <Box className={classes.navbarWrapper}>
        <Box className={classes.navbarIcons}>
          <img src={SearchIcon} alt="icon" />
          <Box>
            <Typography className={classes.navbarIconsTypo}>Search</Typography>
          </Box>
        </Box>
        <Box className={classes.navbarIcons}>
          <img src={AccountIcon} alt="icon" />
          <Typography className={classes.navbarIconsTypo}>Account</Typography>
        </Box>
        <Box className={classes.navbarIcons}>
          <img src={NotificationIcon} alt="icon" />
          <Typography className={classes.navbarIconsTypo}>
            Notifications
          </Typography>
        </Box>
        <Box>
          <img src={BurgerIcon} alt="burger icon" />
        </Box>
      </Box>
    </Box>

    <Box className={classes.eSportsTitle}>
        <Box>
            <img src={Image1} alt="icon" />
        </Box>
        <Box>
            <img src={Image2} alt="icon" />
        </Box>
        <Box>
            <img src={Image3} alt="icon" />
        </Box>
        <Box>
            <img src={Image4} alt="icon" />
        </Box>
        <Box>
            <img src={Image5} alt="icon" />
        </Box>
        <Box>
            <img src={Image6} alt="icon" />
        </Box>
        <Box>
            <img src={Image7} alt="icon" />
        </Box>
        <Box>
            <img src={Image8} alt="icon" />
        </Box>
        <Box>
            <img src={Image9} alt="icon" />
        </Box>
        <Box>
            <img src={Image10} alt="icon" />
        </Box>
    </Box>
    </>
  );
}
