import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  fullWidth = false,
  type = "button",
  isLoading = false,
}) => {
  return (
    <Button
      className={styles.primary}
      variant="contained"
      color="primary"
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : text}
    </Button>
  );
};

export default PrimaryButton;
