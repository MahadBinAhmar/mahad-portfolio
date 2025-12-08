import React from 'react';
// Assets
import profileImg from '../../assets/HomePage/profile.webp';

const ImageArea = () => {
  return (
    // Desktop Image Container
    // Hidden on mobile (hidden), Visible on desktop (md:flex) taking 40% width (w-2/5) and full height.
    <div className="hidden md:flex w-2/5 h-full relative">

      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        // object-cover ensures the image fills the container without distortion, cropping if necessary.
        className="w-full h-full object-cover"
      />

    </div>
  );
};

export default ImageArea;