import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  const h1Ref = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleMouseOver = (event) => {
    let iteration = 0;
    const target = event.target;
    const interval = setInterval(() => {
      target.innerText = target.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };

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
          <h1
            ref={h1Ref}
            data-value="India's No.1 Ranked CTF Team & Cyber Security Research Club"
            className="text-2xl font-bold mb-7 ml-4 mt-5 font-roboto"
            onMouseOver={handleMouseOver}
          >
            India's No.1 Ranked CTF Team & Cyber Security Research Club
          </h1>
          <p className="text-lg max-w-xl mx-auto mb-8 md:text-base ml-4 font-roboto">
            We're a team from Amrita University, passionate about cybersecurity. Our club trains freshers via CTFs, organizes infosec events, and works on research projects.
          </p>
          <div className="mt-5 flex flex-wrap justify-center lg:justify-start space-x-4">
            <button className="bg-black text-white hover:shadow-md hover:bg-black border border-black p-3 dark:border-white dark:bg-white dark:text-black dark:hover:opacity-90 dark:shadow-md dark:hover:text-black  hover:text-white font-bold py-2 px-4 rounded  ml-4">
              Join Recruitment CTF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
