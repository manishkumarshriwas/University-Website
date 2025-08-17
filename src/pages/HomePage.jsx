// src/pages/HomePage.jsx
import React from "react";

// Import all sections from components (assuming all are named exports)
import { HeroSection } from "../components/HeroSection";
import { QuickAccessCards } from "../components/QuickAccessCards";
import { AcademicOverview } from "../components/AcademicOverview";
import { ResearchSpotlight } from "../components/ResearchSpotlight";
import { NewsEvents } from "../components/NewsEvents";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Access Cards */}
      <QuickAccessCards />

      {/* Academic Overview */}
      <AcademicOverview />

      {/* Research Spotlight */}
      <ResearchSpotlight />

      {/* News & Events */}
      <NewsEvents />
    </div>
  );
}
