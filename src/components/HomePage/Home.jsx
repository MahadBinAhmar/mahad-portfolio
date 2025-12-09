// src/components/HomePage/Home.jsx
import React from 'react';

// Homepage ke saare components yahan import karein
import HeroSection from './HeroSection';
import ImageArea from './ImageArea';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

const Home = () => {
  return (
    <>
      {/* Hero + Image Section */}
      <div className="flex-none w-full h-[calc(100vh-4rem)] flex flex-col md:flex-row relative">
        <HeroSection />
        <ImageArea />
      </div>

      {/* Skills Section */}
      <div id="skills-section">
        <SkillsSection />
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

export default Home;