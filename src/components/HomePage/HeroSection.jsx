import React from 'react';

const HeroSection = () => {
  return (
    // Hero Section Container (Desktop: 60% width, Mobile: Full width)
    <section className="w-full md:w-3/5 h-full flex flex-col justify-center items-center text-center p-10 bg-gradient-to-r from-[#cecece] to-[#f3f3f3] text-black relative">

      {/* Main Typography Section */}
      {/* Negative margin pulls text up to balance visually above the scroll button */}
      <div className="space-y-4 z-10 relative -mt-32 md:-mt-28">
        <p className="text-sm md:text-base tracking-[0.2em] uppercase font-bold">
          Hello! My name is
        </p>
        {/* Main Headline (Responsive sizing) */}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-none">
          Muhammad Mahad <br />Bin
          Ahmar
        </h1>
        <p className="text-sm md:text-base tracking-[0.2em] uppercase font-bold">
          MERN Stack Developer
        </p>
      </div>

      {/* Scroll Down Button Assembly (Circular) */}
      {/* Positioned at the bottom with a fixed gap on all devices */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center">

        {/* Gray Circular Container */}
        <div className="relative w-32 h-32 bg-[#bdbdbd] rounded-full flex items-center justify-center shadow-lg z-20">

             {/* Rotating Curved Text (SVG inside circle) */}
             <svg viewBox="0 0 100 100" className="absolute w-full h-full animate-spin-slow">
               {/* Circular path definition */}
               <path
                 id="circlePath"
                 d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 33,33 0 1,1 -74,0"
                 fill="transparent"
               />
               <text>
                 {/* Text along the path */}
                 <textPath
                   xlinkHref="#circlePath"
                   startOffset="0%"
                   className="text-[10px] font-extrabold uppercase tracking-[0.15em] fill-black"
                 >
                   ••• SCROLL DOWN ••• SCROLL DOWN
                 </textPath>
               </text>
             </svg>

             {/* Bouncing Center Arrow Icon */}
             <div className="relative z-30 w-10 h-10 bg-black rounded-full flex items-center justify-center border-4 border-[#cecece] animate-bounce">
                  <span className="text-white text-lg">↓</span>
             </div>
        </div>

      </div>

    </section>
  );
};

export default HeroSection;