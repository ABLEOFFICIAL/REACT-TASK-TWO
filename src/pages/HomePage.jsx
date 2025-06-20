import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FocusSection from "../components/FocusSection";
import Projects from "../components/Projects";
import ContactSection from "../components/ContactSection";
import Modal from "../components/Modal";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FocusSection />
      <Projects />
      <ContactSection />
      <Modal />
    </>
  );
};

export default HomePage;
