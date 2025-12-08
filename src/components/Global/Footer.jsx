import React from 'react';
import logoImg from '../../assets/Global/logo.webp';
import xIcon from '../../assets/HomePage/twitter.webp';
import linkedinIcon from '../../assets/HomePage/linkedin.webp';
import githubIcon from '../../assets/HomePage/github.webp';
import Facebook from '../../assets/HomePage/facebook.webp';

const Footer = () => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#1a1a1a] text-white px-6 md:px-16 py-10 z-30 relative">

      <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:items-start md:space-y-0">

        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="w-10 h-10">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain invert" />
          </div>
          <h2 className="text-xl font-extrabold uppercase tracking-widest text-center md:text-left leading-tight">
            Muhammad Mahad <br />Bin Ahmar
          </h2>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            Quick Links
          </h3>
          <nav className="flex flex-col items-center md:items-start space-y-2 font-medium tracking-wider">
            <a href="/home" className="relative group hover:text-gray-300 transition-colors pb-1">Home</a>
            <a href="/projects" className="relative group hover:text-gray-300 transition-colors pb-1">Projects</a>
            <a href="/blog" className="relative group hover:text-gray-300 transition-colors pb-1">Blog</a>
            <a href="/contact" onClick={scrollToContact} className="relative group hover:text-gray-300 transition-colors pb-1">Contact</a>
          </nav>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            Let's Connect
          </h3>

          <div className="flex space-x-4">
            <a href="https://x.com/mahadx49" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src={xIcon} alt="X" className="w-full h-full object-contain invert" />
            </a>
            <a href="https://www.linkedin.com/in/mahad-bin-ahmar" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src={linkedinIcon} alt="LinkedIn" className="w-full h-full object-contain invert" />
            </a>
            <a href="https://github.com/MahadBinAhmar" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain invert" />
            </a>
            <a href="https://www.facebook.com/muhammad.mahad.bin.ahmar/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 hover:opacity-80 transition-opacity">
              <img src={Facebook} alt="Facebook" className="w-full h-full object-contain invert" />
            </a>
          </div>

          <a onClick={scrollToContact} className="text-sm hover:text-gray-300 transition-colors cursor-pointer">
            mahadjut007@gmail.com
          </a>
        </div>

      </div>

      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-xs text-gray-400 tracking-widest uppercase">
        © 2025 | Designed & Built by Muhammad Mahad Bin Ahmar
      </div>

    </footer>
  );
};

export default Footer;
