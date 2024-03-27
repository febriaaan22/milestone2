import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Typography,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Link as MuiLink,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import styles from "./LoginForm.module.scss";
import { PrimaryButton } from "..";
import { loginValidationSchema } from "../utils/ValidationSchema";

interface LoginFormProps {
  onLogin: (values: { email: string; password: string }) => void;
  onRegisterClick: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegisterClick }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "6vw" }}>
      <Paper elevation={0} className={styles.wrapper}>
        <Typography variant="h4" className={styles.title}>
          Login
        </Typography>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // onSubmit logic here
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <Field
                name="email"
                as={TextField}
                label="Email address"
                fullWidth
                size="small"
                margin="normal"
                required
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                className={styles.input}
              />
              <Field
                name="password"
                type={showPassword ? "text" : "password"}
                as={TextField}
                label="Password"
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
                        onClick={togglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box sx={{ margin: "32px 0" }}>
                <PrimaryButton type="submit" text="Login" fullWidth />
              </Box>
            </Form>
          )}
        </Formik>

        <Typography className={styles.registerText}>
          Don't have an account?{" "}
          <MuiLink
            component="button"
            onClick={onRegisterClick}
            className={styles.registerLink}
          >
            Register
          </MuiLink>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginForm;
