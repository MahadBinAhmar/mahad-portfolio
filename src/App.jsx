import React, { useState } from 'react';
// Component Imports
import Sidebar from './components/Global/Sidebar';
import Navbar from './components/Global/Navbar';
import MobileNavbar from './components/Global/MobileNavbar';
import MobileMenu from './components/Global/MobileMenu';
import HeroSection from './components/HomePage/HeroSection';
import ImageArea from './components/HomePage/ImageArea';
import Footer from './components/Global/Footer';
import SkillsSection from './components/HomePage/SkillsSection';
import AboutSection from './components/HomePage/AboutSection';
import ContactSection from './components/HomePage/ContactSection';

function App() {
  // State for Mobile Menu Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    // Main Application Shell (Fixed Sidebar layout)
    <div className="h-screen w-screen overflow-hidden bg-[#cecece] flex font-sans relative">

      {/* Mobile Navigation Overlays */}
      <MobileNavbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {/* Desktop Fixed Sidebar (Left) */}
      <Sidebar />

      {/* Main Content Wrapper (Right of Sidebar) */}
      <div className="flex-1 h-full ml-0 md:ml-16 flex flex-col">

        {/* Desktop Fixed Navbar (Top) */}
        <Navbar />

        {/* Scrollable Content Area (Below Navbar) */}
        <div className="flex-1 mt-16 overflow-y-auto flex flex-col">

          {/* Full Viewport Hero Container */}
          <div className="flex-none w-full h-[calc(100vh-4rem)] flex flex-col md:flex-row relative">
             <HeroSection />
             <ImageArea />
          </div>


          {/* --- NEW SKILLS SECTION --- */}
          {/* Yeh Hero section ke foran baad aayega */}
          <SkillsSection />

          {/* --- ABOUT SECTION --- */}
          <AboutSection />

          {/* --- NEW CONTACT SECTION --- */}
          {/* Yeh Footer se pehle aayega */}
          <ContactSection />


          {/* Site Footer */}
          <Footer />

        </div>

      </div>

    </div>
  );
}

export default App;