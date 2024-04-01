import React from "react";
import {
  CTAForumCard,
  HeroSection,
  Navbar,
  StayInformed,
  WeHelpYou,
  WhatIsSeren,
} from "@/components";
import Footer from "@/components/Footer";

const HomeContainer: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatIsSeren />
      <WeHelpYou />
      <StayInformed />
      <CTAForumCard />
      <Footer />
    </>
  );
};

export default HomeContainer;
