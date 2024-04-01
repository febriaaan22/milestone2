import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./WeHelpYou.module.scss";

const MentalHealthSection: React.FC = () => {
  return (
    <Box className={styles.container}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        We Help You
      </Typography>
      <Typography variant="subtitle1" className={styles.subtitle}>
        Seren is here to help you on your journey towards healing and
        well-being.
      </Typography>
      <Box sx={{ padding: "5vh 10vw" }}>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6}>
            <Box className={styles.condition}>
              <Image
                src="/icons/depression-icon.png"
                alt="Depression"
                width={48}
                height={40}
              />
              <Box className={styles.textContainer}>
                <Typography variant="h5">Depression</Typography>
                <Typography>
                  Depression is a mood disorder characterized by the feelings of
                  sadness.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.condition}>
              <Image
                src="/icons/bipolar-icon.png"
                alt="Bipolar Disorder"
                width={48}
                height={40}
              />
              <Box className={styles.textContainer}>
                <Typography variant="h5">Bipolar Disorder</Typography>
                <Typography>
                  Bipolar disorder involves shifts in mood, energy, and activity
                  levels.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className={styles.condition}>
              <Image
                src="/icons/anxiety-icon.png"
                alt="Anxiety Disorders"
                width={48}
                height={40}
              />
              <Box className={styles.textContainer}>
                <Typography variant="h5">Anxiety Disorders</Typography>
                <Typography>
                  Anxiety disorders involve excessive worry or fear that
                  interferes with daily life.
                </Typography>
              </Box>
            </Box>
            <Box className={styles.condition}>
              <Image
                src="/icons/ocd-icon.png"
                alt="OCD"
                width={48}
                height={40}
              />
              <Box className={styles.textContainer}>
                <Typography variant="h5">OCD</Typography>
                <Typography>
                  OCD is a mental health condition characterized by intrusive
                  thoughts and repetitive behaviours.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MentalHealthSection;
