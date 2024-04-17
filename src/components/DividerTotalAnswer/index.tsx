import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import styles from "./DividerTotalAnswer.module.scss";

const DividerTotalAnswers: React.FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <Divider component="div" role="presentation" textAlign="right">
          <Typography variant="body1" className={styles.totalAnswer}>
            3 Answers
          </Typography>
        </Divider>
      </Box>
    </>
  );
};

export default DividerTotalAnswers;
