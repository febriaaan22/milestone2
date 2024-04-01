import React from "react";
import HeroBanner from "@/components/AboutUs/HeroBanner/HeroBanner";
import OurStory from "@/components/AboutUs/OurStory/OurStory";
import OurVision from "@/components/AboutUs/OurVision/OurVision";
import OurTeam from "@/components/AboutUs/OurTeam/OurTeam";
import Footer from "@/components/Footer";
import { CTAForumCard } from "@/components";


const AboutUs: React.FC = () => {
  return (
    <>
      <HeroBanner />
      <OurStory />
      <OurTeam />
      <OurVision />
      <CTAForumCard />
      <Footer />
    </>
  );
};

export default AboutUs