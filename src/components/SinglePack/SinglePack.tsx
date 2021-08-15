import React, { useMemo, useEffect, useState } from "react";
import { Box, Typography, Divider } from "@material-ui/core";
import useStyles from "./stylesheet";
import Button from "@material-ui/core/Button";
import { IndexService } from "services/index.service";
import { LazyImageProvider } from "components/LazyImage/LazyImageContext";
import Carousel from "../Carousel/Carousel";
import LazyImage from "components/LazyImage/LazyImage";

const SinglePack = () => {
  const classes = useStyles();

  const [data, setData] = useState<any>([]);
  const [cartCounter, setCartCounter] = useState<number>(0);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1096);

  const indexService = useMemo(() => new IndexService(), []);

  const getPacks = React.useCallback(
    async (id: string) => {
      const getPacksData = await indexService.getItemsDetails(id);

      if (getPacksData) {
        setData([getPacksData]);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [IndexService]
  );

  useEffect(() => {
    getPacks("60a9742105ab64c1adc4");
  }, [getPacks]);

  console.log(data);

  const counterIncrementButton = () => {
    setCartCounter(cartCounter + 1);
  };

  const counterDecrementButton = () => {
    setCartCounter(cartCounter - 1);
  };

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1096);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const buyButton = {
    background: "#373FC5",
    width: "176px",
    height: "48px",
  };

  return (
    <Box className={classes.conatainer}>
      {data.map((item) => {
        return (
          <>
            {isDesktop ? (
              <Box className={classes.mainPackBox1}>
                {item?.assets.map((img) => {
                  return (
                    <Box className={classes.singlePackImage}>
                      <img src={img} alt="pic" />
                    </Box>
                  );
                })}
              </Box>
            ) : (
              <LazyImageProvider>
                <Carousel>
                  {item?.assets.map((img, index) => {
                    return (
                      <LazyImage aspectRatio={[10, 7]} src={img} key={index} />
                    );
                  })}
                </Carousel>
              </LazyImageProvider>
            )}

            <Box className={classes.mainPackBox2}>
              <Box className={classes.contentBox}>
                <Typography className={classes.mainHeading}>
                  {item?.name}
                </Typography>
                <Typography className={classes.cardNumber}>
                  {item?.total_cards} cards in packs
                </Typography>
                <Typography className={classes.pricing}>
                  $ {item?.price}.00
                </Typography>

                <Box className={classes.counterContainer}>
                  <Box className={classes.counterBox}>
                    <Box className={classes.counterButtons}>
                      <Box
                        className={classes.incrementButton}
                        onClick={counterDecrementButton}
                      >
                        -
                      </Box>
                      <Box>
                        <Typography>{cartCounter}</Typography>
                      </Box>
                      <Box
                        className={classes.decrementButton}
                        onClick={counterIncrementButton}
                      >
                        +
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      style={buyButton}
                      disableElevation
                    >
                      <Typography className={classes.buyButtonTypo}>
                        BUY PACKS
                      </Typography>
                    </Button>
                  </Box>
                </Box>
                <Typography className={classes.totalAmount}>
                  {item?.total_minted} Total
                </Typography>
                <Divider
                  style={{
                    background: "rgba(54, 54, 54, 1)",
                    marginBottom: "40px",
                  }}
                />
                <Typography className={classes.packDetailsTypo}>
                  PACK DETAILS
                </Typography>
                {item?.details.map((detail) => {
                  return (
                    <Typography className={classes.descriptionTypo1}>
                      {detail}
                    </Typography>
                  );
                })}
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default SinglePack;
