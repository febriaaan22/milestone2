import React from "react";
import { Grid, Typography, styled } from "@mui/material";

const TeamContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f9fafd",
  width: "100vw",
  height: "1262px",
  margin: "0",
});

const TeamTitle = styled(Typography)({
  fontWeight: "bold",
  color: "#161C2D",
  marginBottom: "20px",
});

const TeamText = styled(Typography)({
  color: "#5C6059",
  textAlign: "center",
});

const TeamJob = styled(Typography)({
  color: "#A6D487",
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "10px",
  fontWeight: "bold",
});

const TeamName = styled(Typography)({
  fontSize: "21px",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "40px",
});

const TeamImage = styled("img")({
  width: "200px",
  height: "200px",
  objectFit: "cover",
  marginLeft: "60px",
});

const OurTeam = () => {
  const teamMembers = [
    {
      image: "/img/team-1.png",
      job: "Backend Engineer",
      name: "Febrian",
    },
    {
      image: "/img/team-2.png",
      job: "Backend Engineer",
      name: "Adri Antori",
    },
    {
      image: "/img/team-6.png",
      job: "Backend Engineer",
      name: "Insan",
    },
    {
      image: "/img/team-3.png",
      job: "Frontend Engineer",
      name: "Resya",
    },
    {
      image: "/img/team-4.png",
      job: "Frontend Engineer",
      name: "Sigit",
    },
    {
      image: "/img/team-5.png",
      job: "Frontend Engineer",
      name: "Dody",
    },
  ];

  return (
    <TeamContainer>
      <TeamTitle variant="h3">Our Team</TeamTitle>
      <TeamText>
        Our team is more than just a group of professionals – we are a community
        united by our passion for mental <br />
        health advocacy and support. Get to know the faces behind Seren:
      </TeamText>
      <Grid container justifyContent="center" alignItems="center" spacing={-55}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <TeamImage src={member.image} alt={member.name} />
            <TeamJob>{member.job}</TeamJob>
            <TeamName>{member.name}</TeamName>
          </Grid>
        ))}
      </Grid>
    </TeamContainer>
  );
};

export default OurTeam;
