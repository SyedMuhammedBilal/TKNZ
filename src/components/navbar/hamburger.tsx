import React from "react";
import { Box, Typography } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import useStyles from "./stylesheet";
import Logo from "../../assets/Vector.png";
import BurgerIcon from "../../assets/Burger.png";
import { NavbarLeftSideLinks, NavbarRightSideLinks } from "../../static/Navbar";

function Hamburger({ cancelState }) {
  const classes = useStyles();

  return (
    <Box className={classes.hamburgerContainer}>
      <Box className={classes.hamburgerTop}>
        <img className={classes.navbarLogo} src={Logo} alt="logo" />
        <img src={BurgerIcon} onClick={cancelState} alt="burger-icon" />
      </Box>

      <Box className={classes.menu}>
        {NavbarLeftSideLinks.map((item) => {
          return (
            <Box key={item.id}>
              <Typography className={classes.hamTypo}>{item.link}</Typography>
            </Box>
          )
        })}
      </Box>

      <Box className={classes.menu}>
        {NavbarRightSideLinks.map((item) => {
          return (
            <Box key={item.id} className={classes.hamIcon}>
              <img src={item.icon} alt="icon" />
              <Box>
                <Typography className={classes.hamTypo2}>{item.link}</Typography>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  );
}

export default Hamburger;
