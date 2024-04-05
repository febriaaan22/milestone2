import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import styles from "./HeadDetailThread.module.scss";
import { BreadCrumbs } from "..";

const HeadDetailThread: React.FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <BreadCrumbs />
        <Typography className={styles.titleThread} variant="h5" component="h1">
          Stress Berat
        </Typography>
        <Box className={styles.subSection}>
          <Box className={styles.leftSection}>
            <Typography className={styles.userName} variant="body1">
              Rizal
            </Typography>
            <Typography className={styles.postTime} variant="body1">
              5 min ago
            </Typography>
          </Box>
          <Box className={styles.rightSection}>
            <Typography className={styles.category} variant="body1">
              Category
            </Typography>
            <Typography className={styles.categoryData} variant="body1">
              Anxiety Disorder
            </Typography>
          </Box>
        </Box>

        <Divider />
        <Typography
          className={styles.questionData}
          variant="body1"
          component="h2"
        >
          Bagaimana cara untuk meredakan stress?
        </Typography>
        <Typography className={styles.answer} variant="body1">
          Answers
        </Typography>
        {/* <CommentCard /> */}
      </Box>
    </>
  );
};

export default HeadDetailThread;
