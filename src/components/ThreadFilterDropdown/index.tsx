"use client";

import React, { useState } from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface ThreadFilterDropdownProps {
  onChange: (value: string) => void;
}

const ThreadFilterDropdown: React.FC<ThreadFilterDropdownProps> = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState("newest");

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <Select value={selectedOption} onChange={handleChange} sx={{ width: "220px" }}>
      <MenuItem value='newest'>Latest</MenuItem>
      <MenuItem value='oldest'>Oldest - Newest</MenuItem>
    </Select>
  );
};

export default ThreadFilterDropdown;
