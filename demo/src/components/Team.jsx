import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  const teams = [
    {
      title: "bi0s CTF",
      description:
        "The bi0s CTF team participates in various global CTFs throughout the year, specializing in Web Security, Reverse Engineering, and more.",
      image: "/dark-logo.png",
    },
    {
      title: "bi0s Hardware",
      description:
        "The bi0s Hardware team specializes in hardware cybersecurity, with expertise in Embedded Systems, Firmware Analysis, and more.",
      image: "/dark-logo.png",
    },
    {
      title: "bi0s Pentest",
      description:
        "The bi0s Pentest team focuses on penetration testing, cloud security, and participates in bug bounty programs.",
      image: "/dark-logo.png",
    },
  ];

  return (
    <div className="py-16 px-4 bg-white text-black dark:bg-black dark:text-white flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Our Teams
      </h2>
      <p className="text-center text-gray-800 dark:text-gray-400 max-w-3xl mx-auto mb-12">
        We have specialized teams focusing on various areas in cybersecurity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            title={team.title}
            description={team.description}
            image={team.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
