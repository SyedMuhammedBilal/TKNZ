import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import Logo from "../../assets/Vector.png";
import BurgerIcon from "../../assets/Burger.png";
import Hamburger from "./hamburger";
import Aos from "aos";
import "aos/dist/aos.css";
import { HamburgerData } from "../../layout/Home";
import { NavbarLeftSideLinks, NavbarRightSideLinks } from "../../static/Navbar";

export default function Navbar() {
  const classes = useStyles();
  const { hamburger, setHamburger } = React.useContext(HamburgerData);

  const HandleClick = (e: any) => {
    e.preventDefault();
    setHamburger(true);
  };

  const cancelState = () => {
    setHamburger(false);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      {hamburger ? (
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="hamburger"
        >
          <Hamburger cancelState={cancelState} />
        </div>
      ) : (
        <Box className={classes.navbarContainer}>
          {/* left hand link */}
          <Box className={classes.navbarWrapper}>
            <Box className={classes.navbarLogoWrapper}>
              <img className={classes.navbarLogo} src={Logo} alt="logo" />
            </Box>
            {NavbarLeftSideLinks.map((item) => {
              return (
                <Box key={item.id}>
                  <Typography className={classes.navbarTypo}>{item.link}</Typography>
                </Box>
              )
            })}
          </Box>

          {/* right hand links */}
          <Box className={classes.navbarWrapper}>
            {NavbarRightSideLinks.map((item) => {
              return (
                <Box key={item.id} className={classes.navbarIcons}>
                  {item.icon && (
                    <img src={item.icon} alt="icon" />
                  )}
                  {item.link && (
                    <Box>
                      <Typography className={classes.navbarIconsTypo}>
                        {item.link}
                      </Typography>
                    </Box>
                  )}
                </Box>
              )
            })}
            <Box className={classes.burgerIcon}>
              <img src={BurgerIcon} alt="burger icon" onClick={HandleClick} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
