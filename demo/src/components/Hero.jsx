import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "framer-motion";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center py-12 lg:py-16">
        {/* Animation Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Player
            autoplay
            loop
            src="/hero.json"
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[450px] lg:h-[450px]"
          />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:ml-8 mt-6 lg:mt-0 w-full lg:w-1/2">
          <h1
            ref={h1Ref}
            data-value="India's No.1 Ranked CTF Team & Cyber Security Research Club"
            className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6 font-roboto"
            onMouseOver={handleMouseOver}
          >
            India's No.1 Ranked CTF Team & Cyber Security Research Club
          </h1>
          <p className="text-base sm:text-lg lg:text-lg max-w-xl mx-auto mb-8 lg:mx-0 font-roboto">
            We're a team from Amrita University, passionate about cybersecurity. Our club trains freshers via CTFs, organizes infosec events, and works on research projects.
          </p>
          <div className="mt-5 flex flex-wrap justify-center lg:justify-start space-x-4">
            <motion.button
              initial={{ "--x": "100%", scale: 1 }}
              animate={{ "--x": "-100%" }}
              whileTap={{ scale: 0.97 }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                  type: "spring",
                  stiffness: 10,
                  damping: 5,
                  mass: 0.1,
                },
              }}
              className="px-5 py-2 text-sm sm:text-base rounded-md relative radial-gradient"
            >
              <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
              Join Recruitment CTF
              </span>
              <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
