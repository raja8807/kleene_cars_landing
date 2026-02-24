import React from "react";
import BannerSection from "./sections/banner/banner";
import WhoWeAreSection from "./sections/who_we_are/who_we_are";
import ServicesSection from "./sections/services/services";
import AboutSection from "./sections/about/about";

export default function Home() {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <WhoWeAreSection />
      <ServicesSection />
    </>
  );
}
