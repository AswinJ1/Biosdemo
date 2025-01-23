import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const About = () => {
  const cardRefs = useRef([]);
  const images = ["/Bios.jpg", "/Bios.jpg", "/Bios.jpg", "/Bios.jpg"]; // Add your image paths here
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index

  const handleChangePicture = () => {
    // Increment index or reset to 0 if it's the last image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

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
          <motion.div
            ref={(el) => (cardRefs.current[0] = el)}
            onClick={handleChangePicture}
            className="cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              key={images[currentImageIndex]} // Key ensures animation triggers on image change
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-6 mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
