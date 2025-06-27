import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/heroImage.svg";

const Hero = () => {
  return (
    <div className={styles.heroCenter}>
      <img src={heroImage} alt="heroImage"></img>
    </div>
  );
};

export default Hero;
