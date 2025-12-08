import React from 'react';
import mailImg from '../../assets/Global/email.webp';

const Navbar = () => {

  // Smooth scroll for mail icon only
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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

      <div
        className="absolute right-10 w-7 h-7 cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
        onClick={scrollToContact} // smooth scroll for mail icon
      >
        <img src={mailImg} alt="Mail" className="w-full h-full object-contain" />
      </div>

    </header>
  );
};

export default Navbar;
