import React from "react";
import {
  HeadDetailThread,
  CommentCard,
  Navbar,
  DividerTotalAnswer,
  CommentForm,
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
      <Footer />
    </>
  );
};

export default DetailThreadContainer;
