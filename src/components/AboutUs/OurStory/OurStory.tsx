import React from "react";
import { Grid, Typography, styled } from "@mui/material";

const CenteredContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingRight: "100px",
  backgroundColor: "rgba(242, 244, 250, 1)",
});

const Title = styled(Typography)({
  fontWeight: "bold",
  color: "text.300",
});

const AboutUsTitle = styled(Title)({
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",

});

const StoryImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  position: "relative",
  zIndex: 2,
  marginBottom: "140px",
});

const StoryText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  fontWeight: 100,
  color: "text.300",
}));



const OurStory = () => {
  return (
    <CenteredContainer>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item m={12} sm={6} padding="0px">
          <AboutUsTitle variant="h3">ABOUT US</AboutUsTitle>
          <Title variant="h1">Our Story</Title>
          <StoryText variant="body1"  >
            Seren was born out of a shared vision to create a safe and
            supportive space for individuals struggling with mental health
            issues.
          </StoryText>
          <StoryText variant="body1">
            Our journey began with the realization that mental health concerns
            often carry stigma and misunderstanding, making it challenging for
            individuals to seek help.
          </StoryText>
        </Grid >
          <StoryImage src="/img/story.png" alt="Our Story" />
      </Grid>
    </CenteredContainer>
  );
};

export default OurStory;
