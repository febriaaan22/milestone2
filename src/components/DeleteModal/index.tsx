import React, { useState } from "react";
import { Modal, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import PrimaryButton from "../button/primaryButton";
import SecondaryButton from "../button/secondaryButton";
import styles from "./DeleteModal.module.scss";

const ModalPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete("api-endpoint");
      handleClose();
    } catch (error) {
      console.error("Error deleting:", error);
      throw error;
    }
  };

  const handleDeleteClick = () => {
    handleDelete().catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleOpen}>
        <DeleteIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className={styles.modalWrapper}>
          <div className={styles.modalContent}>
            <IconButton className={styles.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <img
              src="/icons/delete.png"
              alt="Modal"
              className={styles.modalImage}
            />
            <Typography variant="h2" gutterBottom style={{ fontSize: "38px" }}>
              Are You Sure?
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              You can't undo this
            </Typography>
            <div className={styles.modalButtonGroup}>
              <SecondaryButton text="Cancel" onClick={handleClose} />
              <div style={{ width: "16px" }}></div>
              <PrimaryButton
                text="Delete"
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

export default ModalPopup;
