import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project1Img from '../../assets/HomePage/profile.webp';
import project2Img from '../../assets/HomePage/profile.webp';
import testimonial1 from '../../assets/HomePage/profile.webp';
import testimonial2 from '../../assets/HomePage/profile.webp';

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

const testimonialsData = [
  {
    id: 1,
    name: "Michael Brown",
    role: "Founder of StartUp Innovate",
    image: testimonial1,
    feedback: "They delivered a sleek, professional website that has boosted our online presence significantly. Exceptional support throughout the entire process."
  },
  {
    id: 2,
    name: "Sarah Thompson",
    role: "Marketing Director at GreenLeaf",
    image: testimonial2,
    feedback: "Cyber Core Solutions delivered exactly what we were looking for – a beautiful, mobile-friendly website that attracts more customers to our online store."
  },
  {
    id: 3,
    name: "Olivia Martinez",
    role: "Director of Communications",
    image: testimonial1,
    feedback: "Transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. Improved user engagement metrics."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CTO at TechFlow",
    image: testimonial2,
    feedback: "Mahad is a top-tier developer. His understanding of the MERN stack and ability to solve complex problems is outstanding. A true professional."
  }
];

const ProjectsSplitRow = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 1, centerMode: true, centerPadding: '60px' } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false, centerPadding: '0px' } }
    ],
    customPaging: i => (
      <div className="w-2 h-2 bg-gray-300 rounded-full mt-8 mx-1 hover:bg-black transition-colors cursor-pointer"></div>
    ),
    appendDots: dots => <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
  };

  return (
    <div className={`w-full bg-white transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>

      <section className="w-full py-20 px-6 md:px-12 bg-white text-center flex flex-col items-center justify-center min-h-[40vh]">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-[0.15em] text-black leading-tight animate-slide-up">
            Featured Projects
          </h1>
          <div className="h-1 w-20 bg-black mx-auto my-8 animate-scale-x"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            A curated selection of my recent work in web development.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-32">
          {projectsData.map((project, index) => (
            <div key={project.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl md:text-4xl font-extrabold uppercase leading-none tracking-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 pb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-bold bg-white text-black rounded-full uppercase tracking-wider border border-black">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="group inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-gray-800 hover:shadow-md rounded-sm">
                  <span>View Case Study</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="w-full md:w-1/2">
                <div className="aspect-video w-full overflow-hidden shadow-xl rounded-lg border border-gray-100 group">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-gray-50 text-black py-24 px-6 md:px-12 md:pl-20 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tighter mb-16">
            Client Feedback & Reviews
          </h2>
          <Slider {...sliderSettings}>
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="px-4 py-6 h-full outline-none">
                <div className="testimonial-card bg-white p-6 rounded-2xl h-full flex flex-col justify-between relative transition-all duration-500 ease-out border border-gray-200 shadow-sm">
                  <span className="text-4xl text-gray-200 font-serif leading-none mb-3">“</span>
                  <p className="text-gray-700 text-base leading-relaxed font-medium flex-grow">
                    {testimonial.feedback}
                  </p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-100 mt-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border border-gray-300" />
                    <div className="text-left">
                      <h4 className="text-black font-bold text-base tracking-wide">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-scale-x { animation: scale-x 0.8s ease-out 0.4s forwards; transform-origin: center; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.6s forwards; opacity: 0; }

        .testimonial-slider-center-mode .slick-list {
          padding-top: 10px !important;
          padding-bottom: 10px !important;
          overflow: visible !important; 
        }
        .testimonial-slider-center-mode .slick-track { display: flex !important; align-items: center !important; }
        .testimonial-slider-center-mode .slick-slide { transition: all 0.5s ease; transform: scale(0.9); opacity: 0.6; filter: blur(1px); }
        .testimonial-slider-center-mode .slick-center { transform: scale(1); opacity: 1; filter: blur(0); z-index: 10; position: relative; }
        .testimonial-slider-center-mode .slick-center .testimonial-card { box-shadow: 0 15px 20px rgba(0,0,0,0.08); border-color: #e5e7eb; }
      `}</style>

    </div>
  );
};

export default ProjectsSplitRow;
