import React from "react";
import { Tab, Tabs, Box, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

interface ProfileTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({ value, handleChange }) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Typography
        variant="h5"
        sx={{
          padding: "6vh 4vw 2vh 3vw",
          bgcolor: "#f9fafd",
          color: "#669878",
        }}
      >
        Profile
      </Typography>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Profile Tabs"
        sx={{
          "& .MuiTabs-indicator": {
            left: 0,
            width: "4px",
            backgroundColor: "#669878",
          },
          "& .MuiTab-root": {
            textTransform: "none",
            alignItems: "flex-start",
            mr: 0,
            fontSize: "1rem",
          },
          "& .Mui-selected": {
            color: "#669878 !important",
            backgroundColor: "#d5f0e8 !important",
          },
          backgroundColor: "#f9fafd",
          minHeight: "100vh",
          padding: "2vh 0 2vh 3vw",
        }}
      >
        <Tab label="Edit Profile" />
        <Tab label="Change Password" />
        <Tab label="Apply as Counselor" />
      </Tabs>
    </Box>
  );
};

export default ProfileTabs;
