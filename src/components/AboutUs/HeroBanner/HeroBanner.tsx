import React from "react";
import styles from "./HeroBanner.module.scss";

const HeroBanner = () => {
  return (
    <div className={styles["hero-banner"]}>
      <img
        src="/img/hero.png"
        alt="Hero Banner"
        className={styles["hero-image"]}
      />

      <div className={styles["hero-content"]}></div>
    </div>
  );
};

export default HeroBanner;
