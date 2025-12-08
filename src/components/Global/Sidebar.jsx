import React from 'react';
// Assets
import logoImg from '../../assets/Global/logo.webp';
import xIcon from '../../assets/HomePage/twitter.webp';
import linkedinIcon from '../../assets/HomePage/linkedin.webp';
import githubIcon from '../../assets/HomePage/github.webp';
import Facebook from '../../assets/HomePage/facebook.webp';

const Sidebar = () => {
  // Handler for page reload on logo click
  const handleReload = () => {
    window.location.reload();
  };

  return (
    // Desktop Sidebar: Fixed left position, narrow width (w-16)
    <aside className="hidden md:flex flex-col h-screen w-16 items-center bg-white text-black fixed left-0 top-0 z-20 pb-6 border-r border-gray-100">

      {/* Reload Page Button (Logo) */}
      <button
        onClick={handleReload}
        className="h-20 w-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
        title="Reload Page"
      >
        <div className="w-9 h-9">
          <img src={logoImg} alt="Reload Page" className="w-full h-full object-contain" />
        </div>
      </button>


      {/* Vertical Page Title (Rotated 180deg for bottom-to-top reading) */}
      <div className="mt-12 writing-mode-vertical rotate-180 text-sm font-semibold tracking-[0.2em] uppercase">
        Homepage
      </div>


      {/* Bottom Social Icons (Pushed to bottom via mt-auto) */}
      <div className="mt-auto flex flex-col space-y-6 items-center">

        {/* X (Twitter) Icon */}
        <a href="#x" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
             <img src={xIcon} alt="X Icon" className="w-full h-full object-contain" />
        </a>

        {/* LinkedIn Icon */}
        <a href="#linkedin" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
             <img src={linkedinIcon} alt="LinkedIn Icon" className="w-full h-full object-contain" />
        </a>

        {/* GitHub Icon */}
        <a href="#github" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
             <img src={githubIcon} alt="GitHub Icon" className="w-full h-full object-contain" />
        </a>

        {/* Facebook Icon */}
        <a href="#plus" className="w-6 h-6 opacity-80 hover:opacity-100 transition-opacity">
             <img src={Facebook} alt="Facebook Icon" className="w-full h-full object-contain" />
        </a>

      </div>
    </aside>
  );
};

export default Sidebar;