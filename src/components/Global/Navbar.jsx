import React, { useState } from 'react';
import logoImg from '../../assets/Global/logo.webp';
import mailImg from '../../assets/Global/email.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden md:flex fixed top-0 left-16 w-[calc(100%-4rem)] h-16 items-center bg-white text-black z-30 border-b border-gray-100">
        <div className="w-3/5 h-full flex items-center justify-center px-10">
          <nav className="flex space-x-20 text-xs tracking-[0.2em] uppercase font-medium">
            <a href="/home" className="relative group py-2">
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/projects" className="relative group py-2">
              <span>Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/blog" className="relative group py-2">
              <span>Blog</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/contact" className="relative group py-2">
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        </div>
        <div className="absolute right-10 w-7 h-7 cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
          <a href="mailto:mahadjut007@gmail.com">
            <img src={mailImg} alt="Mail" className="w-full h-full object-contain" />
          </a>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="md:hidden flex w-full h-16 items-center justify-between px-6 bg-white border-b border-gray-200 fixed top-0 left-0 z-40">
        <div className="w-9 h-9">
          <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
        </div>
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
      </header>

      {/* Mobile Full-Screen Menu */}
      <div className={`fixed inset-0 bg-white z-50 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <div className="w-9 h-9">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex-grow flex flex-col justify-center items-center space-y-8">
          <a href="/home" className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/projects" className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/blog" className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
            <span>Blog</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="/contact" className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        <div className="pb-10 flex justify-center">
          <a href="mailto:mahadjut007@gmail.com" className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity">
            <img src={mailImg} alt="Mail" className="w-full h-full object-contain" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
