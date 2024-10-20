import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-white mb-4">
          &copy; {new Date().getFullYear()} Book Finder. All rights reserved.
        </p>
        <p className="text-gray-400">
          All credits go to <span className="font-bold text-white">Arif Ur Rahman</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
