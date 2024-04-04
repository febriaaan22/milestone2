"use client";
import React from "react";
import { ProfileContainer } from "@/containers";
import { Navbar } from "@/components";

const MyProfilePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProfileContainer />
    </>
  );
};

export default MyProfilePage;
