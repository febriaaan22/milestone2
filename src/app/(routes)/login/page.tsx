"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { LoginContainer } from "@/containers";

const LoginPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <LoginContainer />
    </>
  );
};

export default LoginPage;
