import React, { useEffect, useState } from 'react';

// Placeholder images imports (Replace these with your actual images)
import project1Img from '../../assets/Projects/1.webp';
import project2Img from '../../assets/Projects/2.webp';

// PROJECTS DATA
const projectsData = [
  {
    id: 1,
    title: "ANALYTICS DASHBOARD",
    description: "A powerful analytics dashboard providing real-time insights, data visualization with interactive charts, and comprehensive reporting features for business intelligence.",
    image: project1Img,
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    id: 2,
    title: "E-COMMERCE PLATFORM",
    description: "A full-stack e-commerce solution featuring user authentication, product management, a secure shopping cart, and Stripe payment gateway integration.",
    image: project2Img,
    tags: ["MERN Stack", "Redux", "Stripe API", "Tailwind"],
    link: "#"
  },
];

const ProjectsSplitRow = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`w-full bg-white transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>

      {/* === HERO SECTION === */}
      <section className="w-full py-16 px-6 md:py-20 md:px-12 bg-white text-center flex flex-col items-center justify-center min-h-[30vh] md:min-h-[40vh] overflow-hidden">
        <div className="max-w-5xl w-full">
          <h1 className="text-3xl md:text-6xl font-extrabold uppercase tracking-[0.15em] text-black leading-tight animate-slide-up break-words">
            Featured Projects
          </h1>
          <div className="h-1 w-20 bg-black mx-auto my-6 md:my-8 animate-scale-x"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            A curated selection of my recent work in web development.
          </p>
        </div>
      </section>

      {/* === PROJECTS LIST === */}
      <section className="pb-16 px-6 md:pb-24 md:px-12 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
          {projectsData.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-20`}>
              
               <div className="w-full md:w-1/2">
                <div className="aspect-video w-full overflow-hidden shadow-xl rounded-lg border border-gray-100 group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-extrabold uppercase leading-none tracking-tight break-words">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 pb-4 justify-center md:justify-start">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-bold bg-white text-black rounded-full uppercase tracking-wider border border-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center md:justify-start">
                    <a href={project.link} className="group inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-3 bg-black text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-md rounded-sm">
                    <span>View Case Study</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                    </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* === CSS STYLES (Animations) === */}
      <style jsx>{`
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: center; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.6s forwards; opacity: 0; }
      `}</style>

    </div>
  );
};

export default ProjectsSplitRow;