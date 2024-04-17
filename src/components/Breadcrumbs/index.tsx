import React from "react";
import { Box, Breadcrumbs, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";

const BreadCrumbs: React.FC = () => {
  return (
    <Box sx={{ mt: 12 }}>
      <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
        <Link underline="hover" color="inherit" href="/forum">
          Forum
        </Link>
        <Link underline="hover" color="inherit" href="">
          Details
        </Link>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumbs;
