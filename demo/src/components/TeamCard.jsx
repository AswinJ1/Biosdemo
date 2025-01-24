import React, { useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const TeamCard = ({ title, description, image }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group w-full sm:w-[320px] lg:w-[350px] h-[420px] min-w-[280px] max-w-[350px] rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 bg-white dark:bg-black shadow-lg cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 sm:w-32 sm:h-32 object-contain group-hover:opacity-80 transition-opacity dark:invert"
        />
      </div>

      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 opacity-70 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
        style={{
          maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 70%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 70%)`,
        }}
      ></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 sm:p-6 z-20">
        <h3 className="text-md sm:text-lg font-bold dark:text-white text-black">{title}</h3>
        <p className="text-sm sm:text-base dark:text-gray-300 text-black">{description}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
