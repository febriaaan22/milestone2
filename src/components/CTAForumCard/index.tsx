import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "..";
import styles from "./CTAForumCard.module.scss";

const CTAForumCard: React.FC = () => {
  const router = useRouter();

  const goToForum = () => {
    router.push("/forum");
  };

  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <Typography variant="h5" component="h2" className={styles.title}>
          Find What You Looking For
        </Typography>
        <PrimaryButton text="Go To Forum" onClick={goToForum} />
      </Card>
    </Box>
  );
};

export default CTAForumCard;
