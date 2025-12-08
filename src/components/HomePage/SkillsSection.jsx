import React from "react";

// --- STEP 1: IMAGE IMPORTS ---
import reactImg from "../../assets/HomePage/react.webp";
import nodeImg from "../../assets/HomePage/nodejs.webp";
import mongoImg from "../../assets/HomePage/mongodb.webp";
import expressImg from "../../assets/HomePage/expressjs.webp";
import tailwindImg from "../../assets/HomePage/tailwind.webp";
import jsImg from "../../assets/HomePage/js.webp";
import gitImg from "../../assets/HomePage/github.webp";
import bsImg from "../../assets/HomePage/bootstrap.webp";

// --- STEP 2: UPDATE DATA WITH IMAGE VARIABLES ---
const skillsData = [
  { name: "MONGODB", icon: mongoImg },
  { name: "EXPRESS.JS", icon: expressImg },
  { name: "REACT.JS", icon: reactImg },
  { name: "NODE.JS", icon: nodeImg },
  { name: "TAILWIND CSS", icon: tailwindImg },
  { name: "Bootstrap", icon: bsImg },
  { name: "JAVASCRIPT", icon: jsImg },
  { name: "GIT", icon: gitImg },
];

const SkillsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 text-center relative z-10">
      {/* SECTION HEADING */}
      <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-16 text-black">
        My Skills
      </h2>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 max-w-5xl mx-auto">
        {skillsData.map((skill, index) => (
          // INDIVIDUAL SKILL CARD
          <div
            key={index}
            className="group relative flex flex-col items-center bg-white rounded-t-full pt-8 pb-4 px-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            style={{ height: "180px" }}
          >
            {/* --- STEP 3: ICON CONTAINER WITH IMAGE TAG --- */}
            {/* w-16 h-16: Icon ka size set kiya (64px) */}
            {/* grayscale group-hover:grayscale-0: Normal B&W, hover par color */}
            <div className="w-16 h-16 mb-4 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <img
                src={skill.icon} // Import kiya hua image variable
                alt={skill.name}
                className="w-full h-full object-contain" // Image ko container mein fit karo
              />
            </div>

            {/* Skill Name */}
            <h3 className="text-lg font-bold uppercase tracking-wider mt-auto">
              {skill.name}
            </h3>

            {/* Bottom Line (Optional) */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
