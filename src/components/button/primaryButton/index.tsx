import React from "react";
import Button from "@mui/material/Button";
import styles from "./PrimaryButton.module.scss";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick }) => {
  return (
    <Button
      className={styles.primary}
      sx={{ textTransform: "none" }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
