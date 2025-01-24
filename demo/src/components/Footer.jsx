import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Created by <span className="font-semibold">Aswin J</span>. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm mt-2 text-gray-400">
          Built with ❤️ using React, TailwindCSS, and modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
