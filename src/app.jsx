import React, { useEffect, useState } from "react";
import "./app.scss";
import Header from "./components/header.jsx";
import ArrowTop from "./components/arrowTop.jsx";
import HomeSection from "./sections/homeSection.jsx";
import AboutSection from "./sections/aboutSection.jsx";
import CareerSection from "./sections/careerSection.jsx";
import ProjectSection from "./sections/projectSection.jsx";
import XpSection from "./sections/xpSection.jsx";
import SkillsSection from "./sections/skillsSection.jsx";
import ContactSection from "./sections/contactSection.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSection />
      <AboutSection />
      <CareerSection />
      <ProjectSection />
      <XpSection />
      <SkillsSection />
      <ContactSection />
      <ArrowTop />
      <Footer />
    </div>
  );
}

export default App;
