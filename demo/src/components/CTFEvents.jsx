import React from "react";

const CTFEvents = () => {
  const events = [
    { name: "bi0sCTF", description: "India's premier CTF event organized by Team bi0s." },
    { name: "InCTF", description: "An international CTF competition hosted by InCTF organizers." },
    { name: "InCTF J", description: "A junior CTF for budding cybersecurity enthusiasts." },
    { name: "g0s CTF", description: "A challenge-rich CTF event focusing on various security domains." },
  ];

  return (
    <section className="bg-white text-black dark:bg-black dark:text-white py-16 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-8">Organized CTF Events</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          CTFs hosted by Team bi0s, featuring exciting security challenges.
        </p>
        <br />
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative dark:bg-gray-900 bg-white border-dark shadow  border dark:border-gray-700 rounded-2xl p-4 sm:p-6 hover:after:top-1/4 after:absolute after:left-0 after:w-[1px] after:h-[70px] after:transition-all after:duration-500 after:ease-in-out after:bg-gradient-to-b after:from-transparent after:via-indigo-500 after:to-transparent after:top-2/3 group box-border transform hover:scale-105 hover:rotate-3 transition-transform duration-300 ease-in-out"
            >
              <h3 className="text-indigo-500 uppercase text-sm sm:text-base">{event.name}</h3>
              <p className="text-gray-500 text-center text-sm sm:text-base">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFEvents;
