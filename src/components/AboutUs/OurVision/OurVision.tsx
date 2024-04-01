import React from "react";
import styles from "./OurVision.module.scss";

const OurVision = () => {
  return (
    <div
      className={styles.visionContainer}
      style={{ backgroundColor: "rgba(242, 244, 250, 1)" }}>
      <h3 className={styles.visionTitle}>Our Vision</h3>
      <p className={styles.visionText} >
        Together, our team is committed to providing a safe, supportive, and
        empowering space for <br /> individuals to prioritize their mental
        well-being and find strength in community.
      </p>
      <img
        src="/img/vision.png"
        alt="Our Vision"
        className={styles.visionImage}
      />
    </div>
  );
};

export default OurVision;
