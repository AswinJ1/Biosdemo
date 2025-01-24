import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";

const About = () => {
  const images = ["/Bios.jpg", "/Bios-2.jpg"]; // Add your image paths here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null); // Ref to the image for tilt effect

  const handleChangePicture = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const tiltImage = (e) => {
    if (imageRef.current) {
      const card = imageRef.current;
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width; // Normalize x position
      const y = (e.clientY - top) / height; // Normalize y position
      const tiltX = (y - 0.5) * 20; // Calculate tilt on x-axis
      const tiltY = (x - 0.5) * -20; // Calculate tilt on y-axis
      gsap.to(card, {
        rotateX: tiltX,
        rotateY: tiltY,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const resetTilt = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    // Add event listeners for mouse move and leave
    const card = imageRef.current;
    if (card) {
      card.addEventListener("mousemove", tiltImage);
      card.addEventListener("mouseleave", resetTilt);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (card) {
        card.removeEventListener("mousemove", tiltImage);
        card.removeEventListener("mouseleave", resetTilt);
      }
    };
  }, []);

  // Scroll animation setup
  const { scrollYProgress } = useScroll(); // Using scrollYProgress for simpler control
  const textY = useTransform(scrollYProgress, [0, 1], [50, 0]); // Adjust as needed
  const textOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fade in from 0 to 1

  return (
    <section className="bg-white dark:bg-black py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <motion.p
            style={{ y: textY, opacity: textOpacity }} // Use transformed values
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-500 uppercase mb-2"
          >
            About Us
          </motion.p>
          <motion.h2
            style={{ y: textY, opacity: textOpacity }} // Use transformed values
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 dark:text-white"
          >
            About bi0s
          </motion.h2>
          <motion.p
            style={{ y: textY, opacity: textOpacity }} // Use transformed values
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-lg leading-relaxed dark:text-white font-general"
          >
            Team bi0s is a cyber-security club and research group from Amrita
            Vishwa Vidyapeetham, India. Established in 2007 under the mentorship
            of Vipin Pavithran, it is India's first CTF team and a leader in the
            country's cyber-security landscape.
          </motion.p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <motion.div
            ref={imageRef}
            className="cursor-pointer"
            onClick={handleChangePicture}
          >
            <motion.img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
