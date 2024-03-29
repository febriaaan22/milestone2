import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Link from "next/link";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box className={styles.container}>
      <Box className={styles.topItem}>
        <Box className={styles.logoContainer}>
          <Link href="/" passHref>
            <span className={styles.logo}>
              <img
                src="/seren.logo.svg"
                alt="Logo"
                style={{
                  width: "32px",
                  height: "32px",
                  marginRight: "15px",
                  verticalAlign: "middle",
                }}
              />
              Seren
            </span>
          </Link>
        </Box>
        <Box className={styles.iconGroup}>
          <FacebookRoundedIcon />
          <XIcon />
          <LinkedInIcon />
          <InstagramIcon />
          <YouTubeIcon />
          <Box />
        </Box>
      </Box>
      <Box>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1">Seren {currentYear}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
