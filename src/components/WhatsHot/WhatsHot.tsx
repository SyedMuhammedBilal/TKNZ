import React, { useEffect, useMemo, useState } from "react";
import { IndexService } from "../../services/index.service";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import SeeMore from "../../assets/packsImages/Group 302.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const WhatsHot = () => {
  const classes = useStyles();

  const [data, setData] = useState<any>();

  const indexService = useMemo(() => new IndexService(), []);

  const getPacks = React.useCallback(
    async (id: string) => {
      const getPacksData = await indexService.getItemsDetails(id);

      if (getPacksData) {
        setData(getPacksData);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [IndexService]
  );

  useEffect(() => {
    getPacks("4430a4673e0dabaa6b68");
  }, [getPacks]);

  console.log(data);

  return (
    <Box className={classes.whatsHotContainer}>
      <Box className={classes.whatsHotTypographyContainer}>
        <Typography className={classes.whatsHotTypo1}> what's hot! </Typography>

        <Typography className={classes.whatsHotTypo2}>
          Check out these packs from the same set and prep your collection for
          the Challenges!
        </Typography>
      </Box>
      <Box className={classes.whatsHotCardsContainer}>
        {data?.map((items) => {
          return (
            <>
              <Box className={classes.singlePackTokenz}>
                <Box>
                  <img
                    className={classes.singlePackImage}
                    src={items?.asset}
                    alt="pack"
                  />
                </Box>

                <Box className={classes.singlePackContent}>
                  <Typography className={classes.singlePackMainHeading}>
                    {items?.name}
                  </Typography>
                  <Typography className={classes.singlePackDescription}>
                    {items?.description}
                  </Typography>
                  <Box className={classes.singlePackPrices}>
                    <Typography className={classes.packsPricingTypo}>
                      $ {items?.price}.00
                    </Typography>
                    <ArrowForwardIosIcon
                      style={{ fill: "#fff", fontSize: "16px" }}
                    />
                  </Box>
                  <Box className={classes.singlePackListings}>
                    <Box className={classes.packsRarity}>
                      <Typography className={classes.packsRarityTypo}>
                        Rarity{" "}
                      </Typography>
                      <Typography className={classes.PacksListingTypo}>
                        {" "}
                        # / {items?.rarity}
                      </Typography>
                    </Box>
                    <Typography className={classes.PacksListingNumbersTypo}>
                      {items?.listings} listings
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          );
        })}
        <Box className={classes.seeMoreTokenz}>
          <Box className={classes.seeMoreTokenInner}>
            <Box className={classes.seeMorePacks}>
              <Box className={classes.seeMorePacksImage}>
                <img className={classes.seeMoreImage} src={SeeMore} alt="pack" />
              </Box>
        
              <Box className={classes.seeMoreContent}>
                <Box className={classes.seeMorePrices}>
                  <Typography className={classes.packsPricingTypo}>
                    GO TO MARKET PLACE
                  </Typography>
                  <ArrowForwardIosIcon
                    style={{ fill: "#fff", fontSize: "16px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsHot;
