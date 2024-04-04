import React from "react";
import { Box, Card, Typography } from "@mui/material";
import styles from "./CommentCard.module.scss";

const CommentCard: React.FC = () => {
  return (
    <Card variant="outlined">
      <Box className={styles.container}>
        <Box className={styles.topItems}>
          <Typography className={styles.userName} variant="body1">
            Adri Antori
          </Typography>
          <Typography variant="body1">5 min ago</Typography>
        </Box>
        <Typography variant="body1">Solusi terbaik adalah ini</Typography>
      </Box>
    </Card>
  );
};

export default CommentCard;
