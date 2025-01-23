import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the timeline dots and text
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animation for the timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
  <>
  
  <section>
        <div
          ref={timelineRef}
          className="relative flex items-center justify-between space-x-4 overflow-hidden"
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-black timeline-line transform scale-x-0"></div>

          {/* Timeline Items */}
          <div className="flex flex-col items-center text-center timeline-item">
            <div className="w-6 h-6 bg-black rounded-full"></div>
            <p className="mt-4 text-sm text-gray-500">Dec 2018</p>
            <p className="text-lg font-semibold">Founded by Ashu Savani and Ben Spring</p>
          </div></div>

         
      
    </section>
    </>
  );
};

export default Timeline;
