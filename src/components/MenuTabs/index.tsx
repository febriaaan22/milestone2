import React from "react";
import { Tab, Tabs, Box, Typography, Divider } from "@mui/material";

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
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

interface MenuTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ value, handleChange }) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Typography
        variant="h5"
        sx={{
          padding: "6vh 4vw 0 3vw",
          bgcolor: "#f9fafd",
          color: "#669878",
        }}>
        Public Forum
      </Typography>
      <Typography
        variant="h5"
        sx={{
          padding: "2vh 4vw 0 3vw",
          bgcolor: "#f9fafd",
          color: "#0B1207",
        }}>
        Questions
      </Typography>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Public Tabs"
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
            marginBottom: 0,
          },
          "& .Mui-selected": {
            color: "#669878 !important",
            backgroundColor: "#d5f0e8 !important",
          },
          backgroundColor: "#f9fafd",
          minHeight: "100px",
          padding: "2vh 0 0 3vw",
        }}>
        <Tab label="All Questions" />
        <Tab label="My Questions" />
      </Tabs>
      <Typography
        variant="h5"
        sx={{
          padding: "2vh 4vw 2vh 3vw",
          bgcolor: "#f9fafd",
          color: "#0B1207",
        }}>
        Category
      </Typography>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Public Tabs"
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
          minHeight: "100px",
          padding: "2vh 0 3vh 3vw",
        }}>
        <Tab label="All Category" />
        <Tab label="PTSD" />
        <Tab label="Bipolar Disorders" />
        <Tab label="OCD" />
        <Tab label="Schizophrenia" />
        <Tab label="Depressions" />
        <Tab label="Anxiety Disorders" />
        <Tab label="Eating Disorders" />
        <Tab label="Others" />
      </Tabs>
      <Divider sx={{ bgcolor: "#f9fafd", width: "273px", paddingLeft: "3vw" }} />
      <Typography
        variant="h5"
        sx={{
          padding: "6vh 0 2vh 3vw",
          bgcolor: "#f9fafd",
          color: "#669878",
        }}>
        Private With Councellor
      </Typography>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Public Tabs"
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
        }}>
        <Tab label="List Councellor" />
        <Tab label="My Sessions" />
      </Tabs>
    </Box>
  );
};

export default MenuTabs;
