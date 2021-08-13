import React from 'react'
import { Box, Typography } from '@material-ui/core';
import useStyles from './stylesheet';
import PackImage from '../../assets/packsImages/moment1.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const WhatsHot = () => {
    const classes = useStyles();

    return (
        <Box className={classes.whatsHotContainer}>
            <Box className={classes.whatsHotTypographyContainer}>
                <Typography className={classes.whatsHotTypo1}> MAX OUT! </Typography>
    
                <Typography className={classes.whatsHotTypo2}>Check out these packs from the same set and prep your collection for the Challenges!</Typography>
            </Box>

            <Box className={classes.whatsHotCardsContainer}>
                <Box className={classes.singlePackTokenz}>
                    <Box>
                        <img className={classes.singlePackImage} src={PackImage} alt="pack image" />
                    </Box>

                    <Box className={classes.singlePackContent}>
                        <Typography className={classes.singlePackMainHeading}>TOKENZ NAME</Typography>
                        <Typography className={classes.singlePackDescription}>Description of Tokenz</Typography>
                        <Box className={classes.singlePackPrices}>
                            <Typography className={classes.packsPricingTypo}>$ 109.00</Typography>
                            <ArrowForwardIosIcon style={{fill: '#fff', fontSize: '16px'}} />
                        </Box>
                        <Box className={classes.singlePackListings}>
                            <Box className={classes.packsRarity}>
                                <Typography className={classes.packsRarityTypo}>Rarity </Typography> 
                                <Typography className={classes.PacksListingTypo}> # / 6500</Typography>
                            </Box>
                            <Typography className={classes.PacksListingNumbersTypo}>2382 listings</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.singlePackTokenz}>
                    <Box>
                        <img className={classes.singlePackImage} src={PackImage} alt="pack image" />
                    </Box>

                    <Box className={classes.singlePackContent}>
                        <Typography className={classes.singlePackMainHeading}>TOKENZ NAME</Typography>
                        <Typography className={classes.singlePackDescription}>Description of Tokenz</Typography>
                        <Box className={classes.singlePackPrices}>
                            <Typography className={classes.packsPricingTypo}>$ 109.00</Typography>
                            <ArrowForwardIosIcon style={{fill: '#fff', fontSize: '16px'}} />
                        </Box>
                        <Box className={classes.singlePackListings}>
                            <Box className={classes.packsRarity}>
                                <Typography className={classes.packsRarityTypo}>Rarity </Typography> 
                                <Typography className={classes.PacksListingTypo}> # / 6500</Typography>
                            </Box>
                            <Typography className={classes.PacksListingNumbersTypo}>2382 listings</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.singlePackTokenz}>
                    <Box>
                        <img className={classes.singlePackImage} src={PackImage} alt="pack image" />
                    </Box>

                    <Box className={classes.singlePackContent}>
                        <Typography className={classes.singlePackMainHeading}>TOKENZ NAME</Typography>
                        <Typography className={classes.singlePackDescription}>Description of Tokenz</Typography>
                        <Box className={classes.singlePackPrices}>
                            <Typography className={classes.packsPricingTypo}>$ 109.00</Typography>
                            <ArrowForwardIosIcon style={{fill: '#fff', fontSize: '16px'}} />
                        </Box>
                        <Box className={classes.singlePackListings}>
                            <Box className={classes.packsRarity}>
                                <Typography className={classes.packsRarityTypo}>Rarity </Typography> 
                                <Typography className={classes.PacksListingTypo}> # / 6500</Typography>
                            </Box>
                            <Typography className={classes.PacksListingNumbersTypo}>2382 listings</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.singlePackTokenz}>
                    <Box>
                        <img className={classes.singlePackImage} src={PackImage} alt="pack image" />
                    </Box>

                    <Box className={classes.singlePackContent}>
                        <Typography className={classes.singlePackMainHeading}>TOKENZ NAME</Typography>
                        <Typography className={classes.singlePackDescription}>Description of Tokenz</Typography>
                        <Box className={classes.singlePackPrices}>
                            <Typography className={classes.packsPricingTypo}>$ 109.00</Typography>
                            <ArrowForwardIosIcon style={{fill: '#fff', fontSize: '16px'}} />
                        </Box>
                        <Box className={classes.singlePackListings}>
                            <Box className={classes.packsRarity}>
                                <Typography className={classes.packsRarityTypo}>Rarity </Typography> 
                                <Typography className={classes.PacksListingTypo}> # / 6500</Typography>
                            </Box>
                            <Typography className={classes.PacksListingNumbersTypo}>2382 listings</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>            
        </Box>
    )
}

export default WhatsHot
