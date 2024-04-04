import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { useUserContext } from "@/contexts/UserContext";
import axios from "axios";
import { Snackbar } from "@mui/material";
import Alert, { AlertColor } from "@mui/material/Alert";

const LoginFormContainer: React.FC = () => {
  const router = useRouter();
  const { setUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as AlertColor,
  });

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleLogin = (values: { email: string; password: string }) => {
    const performLogin = async () => {
      setIsLoading(true);
      try {
        const response = await axios.post("/api/auth/login", values);

        if (response.data.success && response.data.status === 200) {
          const userInfo = {
            name: response.data.data.user_name,
            email: response.data.data.user_email,
            role: response.data.data.user_role,
          };
          setUser(userInfo); // Set user context
          sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

          setSnackbar({
            open: true,
            message: "Login successful",
            severity: "success",
          });
          router.push("/");
        } else {
          setSnackbar({
            open: true,
            message: response.data.message || "Login failed: Unknown error",
            severity: "error",
          });
        }
      } catch (error) {
        let message = "Login failed";
        if (axios.isAxiosError(error) && error.response) {
          message += `: ${error.response.data?.message || error.response.status}`;
        } else {
          message += ": Network error or server is down";
        }
        setSnackbar({ open: true, message, severity: "error" });
      } finally {
        setIsLoading(false);
      }
    };

    performLogin().catch((error) => {
      console.error("Failed to perform login", error);
    });
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <LoginForm
        onLogin={handleLogin}
        onRegisterClick={handleRegisterClick}
        isLoading={isLoading}
      />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default LoginFormContainer;
