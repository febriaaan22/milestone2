import React from "react";
import {
  Navbar,
  DividerTotalAnswer,
  CommentForm,
  CTAStartDiscussion,
} from "@/components";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import { CommentCardContainer, HeadDetailThreadContainer } from "@/containers";

const DetailThreadContainer: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeadDetailThreadContainer />
      <Box sx={{ padding: " 0 8vw" }}>
        <CommentCardContainer />
        <DividerTotalAnswer />
        <CommentForm />
      </Box>
      <CTAStartDiscussion />
      <Footer />
    </>
  );
};

export default DetailThreadContainer;
