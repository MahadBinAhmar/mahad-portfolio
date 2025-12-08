import React from "react";
import ProfileImg from "../../assets/HomePage/aboutprofile.webp";

const AboutMe = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SECTION */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-4">
            About Me
          </h2>

          {/* HOOK LINE */}
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 leading-snug">
            I build clean, modern and meaningful digital experiences.
          </p>

          {/* MAIN ABOUT TEXT */}
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            I’m Muhammad Mahad Bin Ahmar — a Frontend React Developer from Lahore.
            I specialize in creating clean, fast and responsive web interfaces using
            React.js and Tailwind CSS.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            My focus is simple: clean code, smooth UI/UX and pixel-perfect design.
            I’m constantly learning and growing towards becoming a full MERN Stack Developer.
          </p>
        </div>

        {/* RIGHT SECTION — ARCH IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-80 md:w-80 md:h-[420px] 
                          bg-gray-200 rounded-t-[200px] overflow-hidden 
                          shadow-lg border border-gray-300">
            <img
              src={ProfileImg}
              alt="Mahad Ali"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
