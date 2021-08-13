import React from 'react';
import { Box, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useStyles from './stylesheet';

const BackCatalog = () => {
    const classes = useStyles();
  return (
        <Box className={classes.backCatalog}>
            <Box>
                <ArrowBackIosIcon style={{fill: '#fff'}} />
            </Box>

            <Box>
                <Typography> BACK TO CATALOG </Typography>
            </Box>
        </Box>
    );
};

export default BackCatalog;
