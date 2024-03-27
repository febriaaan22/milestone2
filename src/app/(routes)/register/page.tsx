"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { RegisterContainer } from "@/containers";

const RegisterPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <RegisterContainer />
    </>
  );
};

export default RegisterPage;
