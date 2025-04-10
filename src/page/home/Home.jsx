import React from "react";
import HeroSection from "./HeroSection";
import HealthCare from "./HealthCare";
import Health from "./Health";
import Impact from "./Impact";
import Blog from "./Blog";
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <HealthCare></HealthCare>
      <Health></Health>
      <Impact></Impact>
      <Blog></Blog>
    </div>
  );
}
