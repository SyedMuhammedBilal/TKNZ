import React, { useEffect } from "react";
import { withLazyImageContext } from "./LazyImageContext";
import { Box } from "@material-ui/core";
import "./lazyImage.css";

const LazyImage = ({ src, aspectRatio, lazyLoad }) => {
  const paddingTop = `${(aspectRatio[1] / aspectRatio[0]) * 100}%`;

  useEffect(() => {
    if (lazyLoad) lazyLoad.update();
  }, [src, aspectRatio, lazyLoad]);

  return (
    <Box className="lazyImage" style={{ paddingTop }}>
      <img className="lazyImage__img" data-src={src} alt="pic" />
    </Box>
  )
};

export default withLazyImageContext(LazyImage);
