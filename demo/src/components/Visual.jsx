import React, { useEffect } from "react";

const Visual = () => {
  useEffect(() => {
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const animate = (star) => {
      star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
      star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
      star.style.animation = "none";
      star.offsetHeight; // Trigger reflow
      star.style.animation = "";
    };

    const stars = document.querySelectorAll(".magic-star");
    stars.forEach((star, index) => {
      setTimeout(() => {
        animate(star);
        setInterval(() => animate(star), 1000);
      }, index * 333); // Spread animations evenly
    });
  }, []);

  return (
    <div className=" bg-white dark:bg-black flex justify-center items-center overflow-hidden">
      <h1 className="m-0 text-black dark:text-white text-center font-roboto font-medium text-xl lg:text-4xl">
        How
        <span className="magic relative inline-block">
          {/* Star SVGs */}
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className="magic-star absolute w-8 h-8"
              style={{ "--size": "clamp(20px, 1.5vw, 30px)" }}
            >
              <svg
                viewBox="0 0 512 512"
                className="animate-spin opacity-70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"
                  fill={
                    i === 0
                      ? "rgb(103, 58, 183)"
                      : i === 1
                      ? "rgb(244, 143, 177)"
                      : "rgb(123, 31, 162)"
                  }
                />
              </svg>
            </span>
          ))}
          <span className="magic-text bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 animate-[background-pan_3s_linear_infinite] whitespace-nowrap">
            do
          </span>
        </span>
        we do
      </h1>
    </div>
  );
};

export default Visual;
