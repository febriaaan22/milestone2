import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Typography,
  Paper,
  Box,
  Link as MuiLink,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./RegisterForm.module.scss";
import { registerValidationSchema } from "../utils/ValidationSchema";
import { PrimaryButton } from "..";

interface RegisterFormProps {
  onLoginClick: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "6vw" }}>
      <Paper elevation={0} className={styles.wrapper}>
        <Typography variant="h4" className={styles.title}>
          Register
        </Typography>
        <Divider sx={{ marginBottom: "32px" }} />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={registerValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Handle form submission
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field
                as={TextField}
                label="Name"
                name="name"
                fullWidth
                size="small"
                margin="normal"
                required
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                className={styles.input}
              />
              <Field
                as={TextField}
                label="Email address"
                name="email"
                fullWidth
                size="small"
                margin="normal"
                required
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                className={styles.input}
              />
              <Field
                as={TextField}
                label="Create Password"
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                size="small"
                margin="normal"
                required
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                className={styles.input}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={TextField}
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                size="small"
                margin="normal"
                required
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                className={styles.input}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirm password visibility"
                        onClick={toggleShowConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ margin: "32px 0" }}>
                <PrimaryButton text="Register" type="submit" fullWidth />
              </Box>
            </Form>
          )}
        </Formik>
        <Typography className={styles.loginText}>
          Already have an account?{" "}
          <MuiLink
            component="button"
            onClick={onLoginClick}
            className={styles.loginLink}
          >
            Login
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
