"use client";
import { CTAForumCard, Navbar } from "@/components";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* mounted for testing purposes only */}
      <div style={{ height: "90vh" }}>
        <CTAForumCard />
        <Footer />
      </div>
    </>
  );
}
