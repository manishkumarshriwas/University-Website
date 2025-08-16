import React from "react";
import { HeroSection } from "../components/HeroSection";
import { QuickAccessCards } from "../components/QuickAccessCards";
import { AcademicOverview } from "../components/AcademicOverview";
import { ResearchSpotlight } from "../components/ResearchSpotlight";
import { NewsEvents } from "../components/NewsEvents";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickAccessCards />
      <AcademicOverview />
      <ResearchSpotlight />
      <NewsEvents />
    </>
  );
}
