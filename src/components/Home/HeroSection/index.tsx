import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/forum");
  };
  return (
    <>
      <div className={styles.flexContainer}>
        <Grid container spacing={2} className={styles.container}>
          {/* Left Side */}
          <Grid item xs={12} md={6} className={styles.leftSide}>
            <Grid container direction="column" spacing={2}>
              {/* Headline */}
              <Grid item>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ fontSize: "1.5rem" }}
                >
                  WELCOME TO SEREN
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  gutterBottom
                  className={styles.headline}
                >
                  Your Mental Health Companion
                </Typography>
              </Grid>
              {/* Images */}
              <Grid
                item
                container
                spacing={2}
                className={styles.imageContainer}
              >
                {/* Upper Image */}
                <Grid item xs={12}>
                  <Image
                    className={styles.imageItem}
                    src="/seren-1.webp"
                    alt="People enjoying"
                    layout="responsive"
                    width={500}
                    height={250}
                  />
                </Grid>
                {/* Lower Images */}
                <Grid item xs={8} className={styles.imageItemBottom}>
                  <Image
                    className={styles.imageItem}
                    src="/seren-2.webp"
                    alt="Individual support"
                    layout="responsive"
                    width={400}
                    height={200}
                  />
                </Grid>
                <Grid item xs={4} className={styles.imageItemBottom}>
                  <Image
                    className={styles.imageItem}
                    src="/seren-3.webp"
                    alt="Group support"
                    layout="responsive"
                    width={200}
                    height={200}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6} className={styles.rightSide}>
            {/* Typography Container */}
            <div className={styles.typographyContainer}>
              <Typography variant="subtitle1" className={styles.subtitle}>
                Access a wealth of resources including articles, tools, and
                helplines to support your mental health journey.
              </Typography>
            </div>

            {/* Image Container */}
            <div className={styles.imageOverlayContainer}>
              <Image
                src="/seren-4.webp"
                alt="Joyful person"
                layout="fill"
                objectFit="cover"
                className={styles.bottomImage}
              />
              <Button
                variant="contained"
                className={styles.overlayButton}
                onClick={handleButtonClick}
              >
                Go To Forum
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HeroSection;
