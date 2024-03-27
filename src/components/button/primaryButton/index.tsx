import React from "react";
import Button from "@mui/material/Button";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  fullWidth = false,
  type = "button",
}) => {
  return (
    <Button
      className={styles.primary}
      variant="contained"
      color="primary"
      onClick={onClick}
      fullWidth={fullWidth}
      type={type}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
