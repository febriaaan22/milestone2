import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import styles from "./StayInformed.module.scss";

const StayInformedSection: React.FC = () => {
  return (
    <>
      <Box className={styles.stayInformedContainer}>
        <Typography variant="h4" gutterBottom className={styles.header}>
          Stay Informed
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          className={styles.subheader}
        >
          Explore our resources, connect with our community, and start your
          journey towards healing today.
        </Typography>
        <Grid container spacing={4} className={styles.gridContainer}>
          <Grid item xs={12} sm={4}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <Image
                  src="/icons/educate-icon.png"
                  alt="Educate and Inform"
                  width={64}
                  height={64}
                />
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Educate and Inform
                </Typography>
                <Typography>
                  Learn about different types of mental health problems, their
                  symptoms, and treatment options.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <Image
                  src="/icons/councelor-icon.png"
                  alt="Connect with Counsellor"
                  width={64}
                  height={64}
                />
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Connect with Counsellor
                </Typography>
                <Typography>
                  Engage with counsellor to discuss about your mental problem.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <Image
                  src="/icons/support-icon.png"
                  alt="Provide Support"
                  width={64}
                  height={64}
                />
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Provide Support
                </Typography>
                <Typography>
                  Connect with others who understand what you’re going through
                  and find comfort in shared experiences.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default StayInformedSection;
