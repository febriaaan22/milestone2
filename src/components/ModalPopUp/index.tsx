import React, { useState } from "react";
import { Button, Modal, Typography, styled, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalContent = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f9fafd",
  width: "687px",
  height: "397px",
  padding: "20px",
  borderRadius: "8px",
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: "10px",
  left: "10px",
});

const ModalImage = styled("img")({
  width: "100px",
  height: "100px",
  marginBottom: "26px",
});

const ModalButtonGroup = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "26px",
});

const ModalPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
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
        <ModalContent>
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>
          <ModalImage src="/icons/delete.png" alt="Modal Image" />
          <Typography variant="h2" gutterBottom style={{ fontSize: "38px" }}>
            Are You Sure?
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            You can't undo this
          </Typography>
          <ModalButtonGroup>
            <Button
              variant="outlined"
              style={{ color: "#5C6059", borderColor: "#5C6059" }}
              onClick={handleClose}>
              Cancel
            </Button>
            <div style={{ width: "16px" }}></div>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleClose}
              style={{ backgroundColor: "#A6D487", color: "#F6FBF3" }}>
              Delete
            </Button>
          </ModalButtonGroup>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ModalPopup;
