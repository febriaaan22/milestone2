import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Typography,
  Paper,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./ChangePasswordForm.module.scss";
import { changePasswordValidationSchema } from "../utils/ValidationSchema";
import { PrimaryButton, SecondaryButton } from "..";

interface ShowPasswordState {
  old: boolean;
  new: boolean;
  confirm: boolean;
}

interface PasswordValues {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface ChangePasswordFormProps {
  showPassword: ShowPasswordState;
  onToggleShowPassword: (field: keyof ShowPasswordState) => void;
  onCancel: () => void;
  onSave: (values: PasswordValues) => void;
  isLoading: boolean;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  showPassword,
  onToggleShowPassword,
  onCancel,
  onSave,
  isLoading,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={0} className={styles.wrapper}>
        <Typography variant="h4" className={styles.title}>
          Change Password
        </Typography>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
          }}
          validationSchema={changePasswordValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            onSave(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, handleChange, handleBlur }) => (
            <Form className={styles.form}>
              {/* Old Password Field */}
              <Field
                name="oldPassword"
                as={TextField}
                label="Old Password"
                size="small"
                type={showPassword.old ? "text" : "password"}
                error={touched.oldPassword && Boolean(errors.oldPassword)}
                helperText={touched.oldPassword && errors.oldPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                margin="normal"
                InputProps={inputProps(
                  "old",
                  onToggleShowPassword,
                  showPassword
                )}
              />
              {/* New Password Field */}
              <Field
                name="newPassword"
                as={TextField}
                label="New Password"
                size="small"
                type={showPassword.new ? "text" : "password"}
                error={touched.newPassword && Boolean(errors.newPassword)}
                helperText={touched.newPassword && errors.newPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                margin="normal"
                InputProps={inputProps(
                  "new",
                  onToggleShowPassword,
                  showPassword
                )}
              />
              {/* Confirm New Password Field */}
              <Field
                name="confirmPassword"
                as={TextField}
                label="Confirm New Password"
                size="small"
                type={showPassword.confirm ? "text" : "password"}
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                fullWidth
                margin="normal"
                InputProps={inputProps(
                  "confirm",
                  onToggleShowPassword,
                  showPassword
                )}
              />
              <Box
                sx={{
                  margin: "32px 0",
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: "1rem",
                }}
              >
                <SecondaryButton text="Cancel" onClick={onCancel} />
                <PrimaryButton
                  text="Save"
                  type="submit"
                  isLoading={isLoading}
                />
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

function inputProps(
  field: keyof ShowPasswordState,
  onToggleShowPassword: (field: keyof ShowPasswordState) => void,
  showPassword: ShowPasswordState
) {
  return {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => {
            onToggleShowPassword(field);
          }}
          edge="end"
        >
          {showPassword[field] ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    ),
  };
}

export default ChangePasswordForm;
