"use client";
import { Navbar } from "@/components";
import { ThreadsContainer } from "@/containers";
import React from "react";

const ForumPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <ThreadsContainer />
    </>
  );
};

export default ForumPage;
