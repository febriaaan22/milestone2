import React, { useState } from "react";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
import { ApplyAsCounselorForm } from "@/components";

const steps = ["Send Request", "Waiting Admin to Accept", "Accepted by Admin"];

const ApplyAsCounselorContainer: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeStep, setActiveStep] = useState(0); // Initialize activeStep state here

  const handleSubmit = (values: any) => {
    console.log(values); // Replace with actual submission logic
    // update activeStep based on the submission result
  };

  // Logic to determine the activeStep goes here
  // For example, you might increment activeStep when the form is successfully submitted

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
      <ApplyAsCounselorForm onSubmit={handleSubmit} />
      <Box
        sx={{
          padding: " 0 5vw",
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
        }}
      >
        {" "}
        <Box>
          <Typography variant="h4">Status</Typography>
          <Typography variant="body1">
            Counsellor Application Progress
          </Typography>
        </Box>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  );
};

export default ApplyAsCounselorContainer;
