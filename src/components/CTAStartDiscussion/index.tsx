import React from "react";
import { Box, Card, Typography } from "@mui/material";
// import { useRouter } from "next/navigation";
import { PrimaryButton } from "..";
import styles from "./CTAStartDiscussion.module.scss";

const CTAStartDiscussion: React.FC = () => {
  //   const router = useRouter();

  //   const goToForum = () => {
  //     router.push("/forum");
  //   };

  return (
    <Box className={styles.container}>
      <Card className={styles.card}>
        <Typography variant="h3" className={styles.title}>
          Ready to post a question?
        </Typography>
        <PrimaryButton text="Start Discussion" />
      </Card>
    </Box>
  );
};

export default CTAStartDiscussion;
