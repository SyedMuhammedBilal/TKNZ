import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './stylesheet';
import Logo from '../../assets/Vector.png';
import SearchIcon from '../../assets/search.png';
import AccountIcon from '../../assets/profileIcon.png';
import NotificationIcon from '../../assets/notificationsIcon.png';
import BurgerIcon from '../../assets/Burger.png';


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
          <Typography className={classes.navbarTypo}>Packs</Typography>
        </Box>
        <Box>
          <Typography className={classes.navbarTypo}>Marketplace</Typography>
        </Box>
        <Box>
          <Typography className={classes.navbarTypo}>Community</Typography>
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
    </>
  );
}
