import React from "react";

const CTFEvents = () => {
  const events = [
    { name: "bi0sCTF", description: "India's premier CTF event organized by Team bi0s." },
    { name: "InCTF", description: "An international CTF competition hosted by InCTF organizers." },
    { name: "InCTF J", description: "A junior-level CTF event designed for young cybersecurity enthusiasts." },
    { name: "g0s CTF", description: "A challenge-rich CTF event focusing on various security domains." },
  ];

  return (
    <section className="bg-white text-black dark:bg-black dark:text-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Organized CTF Events</h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-0">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{event.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFEvents;
