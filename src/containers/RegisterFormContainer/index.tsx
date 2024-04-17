"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Snackbar, Alert, AlertColor } from "@mui/material";
import RegisterForm from "@/components/RegisterForm";
import axios from "axios";

export interface RegisterValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterFormContainer: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info" as AlertColor,
  });

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegister = async (values: RegisterValues) => {
    setIsLoading(true);
    try {
      const payload = {
        email: values.email,
        username: values.name,
        password: values.password,
      };
      await axios.post("/api/auth/registration", payload);
      setSnackbar({
        open: true,
        message: "Registration successful! Please login.",
        severity: "success",
      });
      router.push("/login");
    } catch (error) {
      let errorMessage = "Registration failed";
      if (axios.isAxiosError(error) && error.response) {
        // Handle Axios error
        errorMessage += ": " + (error.response.data?.message || "Unknown Axios error");
      } else if (error instanceof Error) {
        // Handle generic error
        errorMessage += ": " + error.message;
      }

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <RegisterForm onLoginClick={handleLoginClick} onRegister={handleRegister} isLoading={isLoading} />
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default RegisterFormContainer;
