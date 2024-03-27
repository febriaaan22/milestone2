import React from "react";
import { useRouter } from "next/navigation";
import RegisterForm from "@/components/RegisterForm";

const RegisterFormContainer: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return <RegisterForm onLoginClick={handleLoginClick} />;
};

export default RegisterFormContainer;
