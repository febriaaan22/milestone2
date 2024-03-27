"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Box } from "@mui/material";
import { PrimaryButton, SecondaryButton } from "..";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className={styles.wrapper}>
      <AppBar
        position="static"
        color="default"
        elevation={1}
        className={styles.navbar}
      >
        <Toolbar className={styles.toolbar}>
          <Link href="/" passHref>
            <span className={styles.logo}>
              <img
                src="/seren.logo.svg"
                alt="Logo"
                style={{
                  width: "45px",
                  height: "45px",
                  marginRight: "15px",
                  verticalAlign: "middle",
                }}
              />
              Seren
            </span>
          </Link>
          <Box className={styles.navLinks}>
            <Link href="/home" passHref>
              <span className={styles.link}>Home</span>
            </Link>
            <Link href="/about-us" passHref>
              <span className={styles.link}>About Us</span>
            </Link>
            <Link href="/mental-problems" passHref>
              <span className={styles.link}>Mental Problems</span>
            </Link>
            <Link href="/forum" passHref>
              <span className={styles.link}>Forum</span>
            </Link>
          </Box>
          <Box className={styles.buttonGroup}>
            <SecondaryButton text="Register" onClick={handleRegisterClick} />
            <PrimaryButton text="Login" onClick={handleLoginClick} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
