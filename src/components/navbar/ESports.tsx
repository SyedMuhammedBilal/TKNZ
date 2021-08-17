import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./stylesheet";
import { ESportsNav } from "../../static/ESports";

const ESports = () => {
  const classes = useStyles();
  return (
    <Box className={classes.eSportsTitle}>
      {ESportsNav.map((item) => {
        return (
          <Box key={item.id}>
            <img src={item.icon} alt="icon" />
          </Box>
        )
      })}
    </Box>
  );
};

export default ESports;
