import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaChalkboardTeacher, FaUsers, FaCogs, FaLaptopCode, FaGlobe, FaBug } from "react-icons/fa";

const cardsData = [
  {
    title: "Learning & Research",
    description: "Learning & Researching on various Cyber Security fields",
    icon: <FaChalkboardTeacher size={36} />,
  },
  {
    title: "CTF Participation",
    description: "Participating & organizing CTFs across the world",
    icon: <FaUsers size={36} />,
  },
  {
    title: "Workshops & Training",
    description: "Organizing workshops & training programmes",
    icon: <FaCogs size={36} />,
  },
  {
    title: "Open-source Contributions",
    description: "Contributing to open-source security tools",
    icon: <FaLaptopCode size={36} />,
  },
  {
    title: "Hardware Security",
    description: "Designing and testing hardware security modules",
    icon: <FaGlobe size={36} />,
  },
  {
    title: "Bug Bounty & Pen-testing",
    description: "Penetration testing, bug-bounty hunting & submitting CVEs",
    icon: <FaBug size={36} />,
  },
];

const Visual = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(card, {
          rotationY: x / 10,
          rotationX: -y / 10,
          boxShadow: `0px 4px 20px rgba(255, 0, 255, 0.5), 0px 0px 40px rgba(255, 0, 255, 0.7)`,
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          boxShadow: "none",
          duration: 0.5,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="bg-white dark:bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Title */}
      <h1 className="m-0 text-black dark:text-white text-center font-roboto font-medium text-xl lg:text-4xl leading-relaxed lg:leading-loose mb-6">
        How
        <span className="magic-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 px-1 mx-1 inline-block">
          do
        </span>
        we do
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] w-full mx-auto p-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="h-[260px] w-[300px] bg-white dark:bg-gray-800 rounded-[10px] cursor-pointer border border-solid border-gray-300 dark:border-gray-700 flex flex-col justify-center items-center p-4 transform perspective-1000 transition-shadow duration-300"
          >
            <div className="dark:text-gray-300 text-black mb-2">{card.icon}</div>
            <h2 className="text-gray-900 dark:text-white text-xl text-center">{card.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm text-center mt-2">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visual;
