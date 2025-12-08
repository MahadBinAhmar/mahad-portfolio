import React from 'react';
import logoImg from '../../assets/Global/logo.webp';

const MobileNavbar = ({ toggleMenu, isMenuOpen }) => {

  return (
    <header className="md:hidden flex w-full h-16 items-center justify-between px-6 bg-white border-b border-gray-200 fixed top-0 left-0 z-40">

      {/* Brand Logo */}
      <div className="w-9 h-9">
        <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
      </div>

      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMenu} className="focus:outline-none z-50">
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Links */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-6 border-b border-gray-200 z-30">
          <a href="/home" onClick={toggleMenu} className="uppercase font-medium text-black text-lg">Home</a>
          <a href="/projects" onClick={toggleMenu} className="uppercase font-medium text-black text-lg">Projects</a>
          <a href="/blog" onClick={toggleMenu} className="uppercase font-medium text-black text-lg">Blog</a>
          <a href="/contact" onClick={toggleMenu} className="uppercase font-medium text-black text-lg">Contact</a>
        </nav>
      )}

    </header>
  );
};

export default MobileNavbar;
