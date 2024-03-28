import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AppBar, Toolbar, Box } from "@mui/material";
import styles from "./Navbar.module.scss";
import { PrimaryButton, SecondaryButton } from "..";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Set the current path from the window location
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  const isActive = (path: string): string => {
    return currentPath === path ? styles.activeLink : "";
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
            <Link href="/" passHref>
              <span className={`${styles.link} ${isActive("/")}`}>Home</span>
            </Link>
            <Link href="/about-us" passHref>
              <span className={`${styles.link} ${isActive("/about-us")}`}>
                About Us
              </span>
            </Link>
            <Link href="/mental-problems" passHref>
              <span
                className={`${styles.link} ${isActive("/mental-problems")}`}
              >
                Mental Problems
              </span>
            </Link>
            <Link href="/forum" passHref>
              <span className={`${styles.link} ${isActive("/forum")}`}>
                Forum
              </span>
            </Link>
          </Box>
          <Box className={styles.buttonGroup}>
            <SecondaryButton text={"Register"} onClick={handleRegisterClick} />
            <PrimaryButton text="Login" onClick={handleLoginClick} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
