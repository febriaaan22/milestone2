import React from "react";
import {
  HeadDetailThread,
  CommentCard,
  Navbar,
  DividerTotalAnswer,
} from "@/components";
import { Box } from "@mui/material";

const DetailThreadContainer: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeadDetailThread />
      <Box sx={{ padding: " 0 8vw" }}>
        <CommentCard />
        <DividerTotalAnswer />
      </Box>
    </>
  );
};

export default DetailThreadContainer;
