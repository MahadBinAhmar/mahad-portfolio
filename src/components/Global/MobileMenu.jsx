import React from 'react';
import logoImg from '../../assets/Global/logo.webp';
import mailImg from '../../assets/Global/email.webp';

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggleMenu(); // Close menu after scroll
  };

  return (
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
        <a href="/home" onClick={toggleMenu} className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
          <span>Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="/projects" onClick={toggleMenu} className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="/blog" onClick={toggleMenu} className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
          <span>Blog</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="/contact" onClick={toggleMenu} className="relative group text-2xl font-bold uppercase tracking-[0.2em]">
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
      </nav>

      <div className="pb-10 flex justify-center">
         <div
           className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
           onClick={scrollToContact}
         >
            <img src={mailImg} alt="Mail" className="w-full h-full object-contain" />
         </div>
      </div>

    </div>
  );
};

export default MobileMenu;
