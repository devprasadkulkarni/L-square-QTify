import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import styles from "./Hero.module.css";
import heroImage from "../../assets/heroImage.svg";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box className={styles.heroCenter}>
      <div className={styles.font}>
        <h1>100 thousand songs, ad free</h1>
        <h1>over thousands podcast episodes</h1>
      </div>
      <img src={heroImage} alt="heroImage"></img>
    </Box>
  );
};

export default Hero;
