import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";

const LoginFormContainer: React.FC = () => {
  const router = useRouter();

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const handleLogin = (values: { email: string; password: string }) => {
    const { email, password } = values;
  };

  return (
    <LoginForm onLogin={handleLogin} onRegisterClick={handleRegisterClick} />
  );
};

export default LoginFormContainer;
