import React from "react";
import { Box, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import useStyles from "./stylesheet";
import Logo from "../../assets/Vector.png";
import SearchIcon from "../../assets/search.png";
import AccountIcon from "../../assets/profileIcon.png";
import NotificationIcon from "../../assets/notificationsIcon.png";

function Hamburger({ cancelState }) {
  const classes = useStyles();

  return (
    <Box className={classes.hamburgerContainer}>
      <Box className={classes.hamburgerTop}>
        <img className={classes.navbarLogo} src={Logo} alt="logo" />
        <CancelIcon onClick={cancelState} style={{ color: "white" }} />
      </Box>

      <Box className={classes.menu}>
        <Box>
          <Typography className={classes.hamTypo}>Packs</Typography>
        </Box>
        <Box>
          <Typography className={classes.hamTypo}>Marketplace</Typography>
        </Box>
        <Box>
          <Typography className={classes.hamTypo}>Community</Typography>
        </Box>
      </Box>

      <Box className={classes.menu}>
        <Box className={classes.hamIcon}>
          <img src={SearchIcon} alt="icon" />
          <Box>
            <Typography className={classes.hamTypo2}>Search</Typography>
          </Box>
        </Box>
        <Box className={classes.hamIcon}>
          <img src={AccountIcon} alt="icon" />
          <Typography className={classes.hamTypo2}>Account</Typography>
        </Box>
        <Box className={classes.hamIcon}>
          <img src={NotificationIcon} alt="icon" />
          <Typography className={classes.hamTypo2}>Notifications</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Hamburger;
