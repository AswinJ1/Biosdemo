import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  return (
    <section className="bg-white p-0 mb-0 dark:bg-black dark:text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center py-16">
    
    {/* Animation Section */}
    <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
      <Player
        autoplay
        loop
        src="/hero.json"
        className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[550px] lg:h-[550px]"
      />
    </div>

    {/* Text Section */}
    <div className="text-center lg:text-left lg:ml-8 mt-5 lg:mt-2 w-full lg:w-1/2">
      <h1 className="text-2xl font-bold mb-7 ml-4 mt-5">
        India's No.1 Ranked CTF Team & Cyber Security Research Club
      </h1>
      <p className="text-lg max-w-xl mx-auto mb-8 md:text-base ml-4">
        We're a team from Amrita University, passionate about cybersecurity. Our club trains freshers via CTFs, organizes infosec events, and works on research projects.
      </p>
      <div className="mt-5 flex flex-wrap justify-center lg:justify-start space-x-4">
        <button className="bg-white hover:bg-black border border-black p-3 dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black text-black hover:text-white font-bold py-2 px-4 rounded animate-borderColorAnimation ml-4">
          Join Recruitment CTF
        </button>
      </div>
    </div>
  </div>
</section>

  );
};

export default Hero;
