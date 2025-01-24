import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
const LearningSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white p-8 lg:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
          Protect, Secure, and Explore the Digital World with Our Resources!
          </h1>
          <p className="text-lg leading-relaxed mb-8">
          Wiki.bi0s provides a vast collection of cybersecurity resources, tutorials, and tools to help both beginners and professionals stay updated. It offers guides, case studies, and interactive exercises to improve skills.
          </p>
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
      className="px-6 py-2 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        Explore wiki.bi0s
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
        </div>

        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Player
            autoplay
            loop
            src="/cyber-2.json"
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
