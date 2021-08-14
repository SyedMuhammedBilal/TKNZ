import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import useStyles from "./stylesheet";
import Button from "@material-ui/core/Button";

const SinglePack = () => {
  const classes = useStyles();

  const buyButton = {
    background: '#373FC5', 
    width: '176px',
    height: '48px'
  }

  return (
    <Box className={classes.conatainer}>
      <Box className={classes.mainPackBox}></Box>
      <Box className={classes.mainPackBox}>
        <Box className={classes.contentBox}>
          <Typography className={classes.mainHeading}>
            League Of Legends
          </Typography>
          <Typography className={classes.cardNumber}>
            5 cards in packs
          </Typography>
          <Typography className={classes.pricing}>$ 49.00</Typography>

          <Box className={classes.counterContainer}>
            <Box className={classes.counterBox}>
                <Box className={classes.counterButtons}>
                    <Box className={classes.incrementButton}>-</Box>
                    <Box>
                        <Typography>1</Typography>
                    </Box>
                    <Box className={classes.decrementButton}>+</Box>
                </Box>
            </Box>
            <Box>
              <Button variant="contained" style={buyButton} disableElevation>
                <Typography className={classes.buyButtonTypo}>BUY PACKS</Typography>
              </Button>
            </Box>
          </Box>
          <Typography className={classes.totalAmount}>35 563 Total</Typography>
          <Divider style={{background: 'rgba(54, 54, 54, 1)', marginBottom: '40px'}} />
          <Typography className={classes.packDetailsTypo}>PACK DETAILS</Typography>
          <Typography className={classes.descriptionTypo1}>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </Typography>
          <Typography className={classes.descriptionTypo1}>
          Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Text passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
};

export default SinglePack;
