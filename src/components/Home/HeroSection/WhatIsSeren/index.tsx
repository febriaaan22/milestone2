import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import styles from "./WhatIsSeren.module.scss";
import { SecondaryButton } from "@/components";

const WhatIsSeren: React.FC = () => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/about-us");
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.leftItem}>
        <Typography variant="h3">
          What is <span className={styles.highlight}>Seren</span>?
        </Typography>
      </Box>
      <Box className={styles.rightItem}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          At Seren, we understand the complexities of mental health and the
          challenges individuals face. Our platform is dedicated to providing
          support, resources, and a safe space for those navigating mental
          health issues.
        </Typography>
        <SecondaryButton text="Learn More" onClick={handleLearnMoreClick} />
      </Box>
    </Box>
  );
};

export default WhatIsSeren;
