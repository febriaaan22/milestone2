import React from "react";
import { TextField, Box, Typography, Paper } from "@mui/material";
import styles from "./EditProfileForm.module.scss";
import { PrimaryButton, SecondaryButton } from "@/components";

interface EditProfileFormProps {
  name: string;
  email: string;
  onSave: () => void;
  onCancel: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  name,
  email,
  onSave,
  onCancel,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={0} className={styles.wrapper}>
        <Box className={styles.editProfileTitle}>
          <Typography variant="h4">Edit Profile</Typography>
        </Box>
        <Typography className={styles.nameTitle} variant="body1">
          Name
        </Typography>
        <TextField
          fullWidth
          size="small"
          defaultValue={name}
          className={styles.inputField}
        />
        <Box className={styles.emailGroup}>
          <Typography className={styles.emailTitle} variant="body1">
            Email
          </Typography>
          <Typography className={styles.dataEmail} variant="body1">
            {email}
          </Typography>
        </Box>
        <div className={styles.buttonGroup}>
          <SecondaryButton text="Cancel" onClick={onCancel} />
          <PrimaryButton text="Save" onClick={onSave} />
        </div>
      </Paper>
    </Box>
  );
};

export default EditProfileForm;
