import Sidebar from './components/Global/Sidebar';
import Navbar from './components/Global/Navbar'; 
import HeroSection from './components/HomePage/HeroSection';
import ImageArea from './components/HomePage/ImageArea';
import Footer from './components/Global/Footer';
import SkillsSection from './components/HomePage/SkillsSection';
import AboutSection from './components/HomePage/AboutSection';
import ContactSection from './components/HomePage/ContactSection';

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-[#cecece] flex font-sans relative">

      {/* Desktop + Mobile Navbar (all handled inside Navbar.jsx) */}
      <Navbar />

      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 h-full ml-0 md:ml-16 flex flex-col">

        {/* Scrollable Content */}
        <div className="flex-1 mt-16 overflow-y-auto flex flex-col">

          {/* Hero + Image Section */}
          <div className="flex-none w-full h-[calc(100vh-4rem)] flex flex-col md:flex-row relative">
            <HeroSection />
            <ImageArea />
          </div>

          {/* Skills Section */}
          <SkillsSection />

          {/* About Section */}
          <AboutSection />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <Footer />

        </div>

      </div>

    </div>
  );
}

export default App;
