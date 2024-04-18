"use client";

import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

interface MentalProblemsCardProps {
  src: StaticImageData;
  title: string;
  maxWidth: number | string;
  maxHeight: number | string;
  id: number;
}

const MotionBox = motion(Box);
// const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const MentalProblemsCard: React.FC<MentalProblemsCardProps> = ({ src, title, maxWidth, maxHeight, id }) => {
  const router = useRouter();
  const [hovered, setHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnterButton = () => {
    setButtonHovered(true);
  };

  const handleMouseLeaveButton = () => {
    setButtonHovered(false);
  };

  const handleChangePage = (id: number) => {
    router.push(`mental-problems/${id}`);
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{ overflow: "hidden" }}>
      <Box
        style={{
          width: `${maxWidth}`,
          height: `${maxHeight}`,
          backgroundImage: `url(${src.src})`,
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <MotionBox
          initial={{ y: 0 }}
          animate={{ y: hovered ? -60 : 0 }}
          transition={{ duration: 0.5 }}
          sx={{
            padding: "28px",
            width: "100%",
            textAlign: "center  ",
            zIndex: 1,
            position: "absolute",
            bottom: 0,
          }}
        >
          <Typography variant='h4' sx={{ color: "#FFFFFF", fontWeight: 700 }}>
            {title}
          </Typography>
          <MotionButton
            onClick={() => {
              handleChangePage(id);
            }}
            onMouseEnter={handleMouseEnterButton}
            onMouseLeave={handleMouseLeaveButton}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            variant={buttonHovered ? "contained" : "outlined"}
            sx={{ color: "#FFFFFF", borderColor: "#FFFFFF", padding: "10px 20px", marginTop: 2 }}
          >
            Learn More
          </MotionButton>
        </MotionBox>
      </Box>
    </Box>
  );
};

export default MentalProblemsCard;
