import { MentalProblemsGrid } from "@/components";
import { Box, Typography } from "@mui/material";

const MentalProblemsContainer = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "1222px", margin: "auto", padding: "221px 109px" }}>
      <Typography variant='h6' sx={{ fontSize: 21, marginBottom: "16px" }}>
        MENTAL PROBLEMS
      </Typography>
      <Typography variant='h2' sx={{ fontSize: 51, marginBottom: "36px" }}>
        Understanding and Awareness
      </Typography>
      <Typography variant='body1' sx={{ fontSize: 21, marginBottom: "84px", fontWeight: 300 }}>
        By providing accurate and accessible information about mental health problems, we aim to empower individuals to
        advocate for themselves and others
      </Typography>
      <MentalProblemsGrid />
    </Box>
  );
};

export default MentalProblemsContainer;
