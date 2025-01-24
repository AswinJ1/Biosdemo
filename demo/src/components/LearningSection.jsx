import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const LearningSection = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white p-8 lg:p-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Welcome to Your Cybersecurity Learning Journey
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Unlock the world of cybersecurity and master the skills needed to
            secure digital landscapes. Whether you're a beginner or an advanced
            learner, our platform offers step-by-step tutorials, hands-on
            exercises, and resources tailored to your needs.
          </p>
          <p className="text-md leading-relaxed mb-8">
            Explore interactive guides, challenges, and tools crafted by
            experts to take your learning experience to the next level.
          </p>
          <div className="space-x-4">
            <a
              href="https://wiki.bi0s.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Start Learning Now
            </a>
            <a
              href="https://ctf.bi0s.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition duration-200 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
            >
              Try a CTF Challenge
            </a>
          </div>
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
