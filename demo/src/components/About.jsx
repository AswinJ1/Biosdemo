import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const About = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card) => {
      const animation = gsap.to(card, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        paused: true,
      });

      card.addEventListener("mouseenter", () => animation.play());
      card.addEventListener("mouseleave", () => animation.reverse());
    });

    return () => {
      cardRefs.current.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section className="bg-white dark:bg-black py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-500 uppercase mb-2"
          >
            About Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-white"
          >
            About bi0s
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-lg leading-relaxed dark:text-white"
          >
            Team bi0s is a cyber-security club and research group from Amrita
            Vishwa Vidyapeetham, India. Established in 2007 under the mentorship
            of Vipin Pavithran, it is India's first CTF team and a leader in the
            country's cyber-security landscape.
          </motion.p>
        </div>

        {/* Image and Stats Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            src="/Bios.jpg"
            alt="Team Working"
            className="w-full max-w-md rounded-lg shadow-lg"
          />

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-bold text-black">
                Ranked No.1 in CTFTime
              </h3>
              <p className="text-gray-600 text-sm">
                Consistently maintaining top rankings since its establishment.
              </p>
            </div>
            <div
              ref={(el) => (cardRefs.current[1] = el)}
              className="bg-gray-100 p-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-2xl font-bold text-black">
                10+ Cyber-Security Focus Areas
              </h3>
              <p className="text-gray-600 text-sm">
                Specialized teams working on cutting-edge research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
