import React from 'react';

const Team = () => {
  return (
    <div className="flex space-x-6 justify-center">
      {/* bi0s CTF Card */}
      <div className="group relative flex flex-col my-6 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        {/* Turbulent Filter Definition */}
        <svg className="hidden">
          <defs>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.006,0.741"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="indefinite"
                  begin="mouseenter"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="static" scale="10">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="800ms"
                  repeatCount="1"
                  begin="mouseenter"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>

        {/* Card Image */}
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            style={{ filter: 'url(#noise)' }}
            src="https://images.unsplash.com/photo-1679626951853-60e909d288ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="bi0s CTF"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 dark:text-slate-200 text-xl font-semibold">
            bi0s CTF
          </h6>
          <p className="text-slate-600 dark:text-slate-400 leading-normal font-light">
            The bi0s CTF team participates in global Capture The Flag (CTF) competitions and organizes several CTF events, including InCTFs. Specializations include Web Security, Reverse Engineering, Binary Exploitation, Cryptography, Forensics, and Android Security.
          </p>
        </div>
      </div>

      {/* bi0s Hardware Card */}
      <div className="group relative flex flex-col my-6 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        {/* Turbulent Filter Definition */}
        <svg className="hidden">
          <defs>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.006,0.741"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="indefinite"
                  begin="mouseenter"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="static" scale="10">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="800ms"
                  repeatCount="1"
                  begin="mouseenter"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>

        {/* Card Image */}
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            style={{ filter: 'url(#noise)' }}
            src="https://images.unsplash.com/photo-1606096872829-b268a1c89f8a?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4MnwwfDF8c2VhY2h8OXx8aGFyZ3dhcmV8ZW58MHx8fHwxNjcwNzAzNzI5&ixlib=rb-1.2.1&q=80&w=1080"
            alt="bi0s Hardware"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 dark:text-slate-200 text-xl font-semibold">
            bi0s Hardware
          </h6>
          <p className="text-slate-600 dark:text-slate-400 leading-normal font-light">
            Focused on hardware security, this team specializes in Embedded Systems, Firmware Analysis, Wireless Security, Automotive Security, ICS/SCADA Security, and Side Channel Analysis.
          </p>
        </div>
      </div>

      {/* bi0s Pentest Card */}
      <div className="group relative flex flex-col my-6 bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
        {/* Turbulent Filter Definition */}
        <svg className="hidden">
          <defs>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.006,0.741"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;100"
                  dur="800ms"
                  repeatCount="indefinite"
                  begin="mouseenter"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="static" scale="10">
                <animate
                  attributeName="opacity"
                  values="0;1;0"
                  dur="800ms"
                  repeatCount="1"
                  begin="mouseenter"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>

        {/* Card Image */}
        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img
            className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
            style={{ filter: 'url(#noise)' }}
            src="https://images.unsplash.com/photo-1606056979395-d029547ce104?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg4MnwwfDF8c2VhY2h8Mnx8cGVuZXRyYXRpb258ZW58MHx8fHwxNjcwNzAzNzMw&ixlib=rb-1.2.1&q=80&w=1080"
            alt="bi0s Pentest"
          />
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h6 className="mb-2 text-slate-800 dark:text-slate-200 text-xl font-semibold">
            bi0s Pentest
          </h6>
          <p className="text-slate-600 dark:text-slate-400 leading-normal font-light">
            Specializing in penetration testing, this team researches how to detect and exploit vulnerabilities in networks, cloud appliances, and web-based systems. They actively participate in bug-bounty programs and boot2root CTFs for real-time bug hunting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
