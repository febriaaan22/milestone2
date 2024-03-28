import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Box,
  Menu,
  MenuItem,
  Button,
  Divider,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import styles from "./Navbar.module.scss";
import { PrimaryButton, SecondaryButton } from "..";

interface User {
  name: string;
}

const Navbar: React.FC = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  useEffect(() => {
    // Example logic to determine if a user is logged in
    // Replace with your actual login logic
    const loggedInUser = { name: "John Doe" }; // Simulated logged in user
    // setUser(loggedInUser);

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

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            {user ? (
              <>
                <Button
                  className={styles.menuButton}
                  onClick={handleMenuClick}
                  endIcon={<KeyboardArrowDownIcon />}
                  color="inherit"
                >
                  {user.name}
                </Button>
                <Menu
                  id="profile-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  sx={{
                    ".MuiMenu-paper": {
                      borderRadius: 2,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      "& .MuiMenuItem-root": {
                        padding: "8px 32px",
                        "&:hover": {
                          backgroundColor: "#dcf2e4",
                        },
                      },
                      "& .MuiDivider-root": {
                        margin: "5px 0",
                      },
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <PersonIcon sx={{ marginRight: "16px" }} fontSize="small" />
                    Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>
                    <ExitToAppIcon
                      sx={{ marginRight: "16px" }}
                      fontSize="small"
                    />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <SecondaryButton
                  text={"Register"}
                  onClick={handleRegisterClick}
                />
                <PrimaryButton text="Login" onClick={handleLoginClick} />
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
