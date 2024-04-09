import React, { useState } from "react";
import { Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../button/primaryButton";
import SecondaryButton from "../button/secondaryButton";
import styles from "./ModalDiscussion.module.scss";
import { useNavigate } from "react-router-dom"; 

const ModalDiscussion: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    navigate("/api/auth/login");
  };

  const handleRegisterClick = () => {
    navigate("/api/auth/registration");
  };

  return (
    <div>
      <div className={styles.ModalDiscussion}>
        <PrimaryButton text="Start Discussion" onClick={handleOpen} />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <div className={styles.modalWrapper}>
          <div className={styles.modalContent}>
            <IconButton className={styles.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <img
              src="/icons/discuss.png"
              alt="Modal"
              className={styles.modalImage}
            />
            <Typography variant="h2" gutterBottom style={{ fontSize: "38px" }}>
              Oops, one more step!
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Please Register or Login to start discussion
            </Typography>
            <div className={styles.modalButtonGroup}>
              <SecondaryButton text="Register" onClick={handleRegisterClick} />
              <div style={{ width: "16px" }}></div>
              <PrimaryButton
                text="Login"
                onClick={handleDeleteClick}
                isLoading={false}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDiscussion;
