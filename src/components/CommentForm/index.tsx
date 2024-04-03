import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import styles from "./CommentForm.module.scss";
import { PrimaryButton, SecondaryButton } from "..";

const CommentForm: React.FC = () => {
  return (
    <>
      <Box className={styles.container}>
        <Typography variant="h5">Ready to post your Answer?</Typography>
        <TextField
          placeholder="Type your answer..."
          multiline
          rows={8}
          className={styles.form}
        />
        <Typography variant="body1">
          {" "}
          Please Register or Login to post your answer
        </Typography>
        <Box className={styles.buttonGroup}>
          <SecondaryButton text="Register" />
          <PrimaryButton text="Login" />
        </Box>
      </Box>
    </>
  );
};

export default CommentForm;
