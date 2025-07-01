import React from "react";
import HeroSection from "./HeroSection";
import HealthCare from "./HealthCare";
import Health from "./Health";
import Impact from "./Impact";
import Blog from "./Blog";
import ImageGallery from "./ImageGallery";
import HealthChecklist from "./HealthChecklist";
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ImageGallery></ImageGallery>
      <HealthCare></HealthCare>
      <Health></Health>
      <Impact></Impact>
      <HealthChecklist></HealthChecklist>
      <Blog></Blog>
    </div>
  );
}
