"use client";
import { CTAForumCard, Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* mounted for testing purposes only */}
      <div style={{ height: "90vh", display: "flex", alignItems: "center" }}>
        <CTAForumCard />
      </div>
    </>
  );
}
