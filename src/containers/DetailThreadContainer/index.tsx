import React from "react";
import {
  HeadDetailThread,
  CommentCard,
  Navbar,
  DividerTotalAnswer,
  CommentForm,
  CTAStartDiscussion,
} from "@/components";
import { Box } from "@mui/material";
import Footer from "@/components/Footer";

const DetailThreadContainer: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeadDetailThread />
      <Box sx={{ padding: " 0 8vw" }}>
        <CommentCard />
        <DividerTotalAnswer />
        <CommentForm />
      </Box>
      <CTAStartDiscussion />
      <Footer />
    </>
  );
};

export default DetailThreadContainer;
