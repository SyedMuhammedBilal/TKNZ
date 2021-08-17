import React from 'react'
import { Box, Typography } from "@material-ui/core";
import whiteBorder from '../../assets/Home/whiteBorder.png'
import blackBorder from '../../assets/Home/blackBorder.png'
import useStyles from "./stylesheet";


const HomeHeroSection = () => {
    const classes = useStyles();
    return (
        <Box className={classes.homeHero} >
            <Box className={classes.leftImgSide}>
                <Box className={classes.whiteImgSec} >
                    <img className={classes.whiteImg} src={whiteBorder} alt="whiteimg"></img>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    )
}

export default HomeHeroSection
