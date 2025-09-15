import React from 'react';
import { assets, FOOTER_CONSTANTS } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="logo" width={40} className="rounded-lg" />
          <span className="text-lg font-semibold text-gray-800">
            Mrityunjay Gupta
          </span>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} InstaErase.ai. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          {FOOTER_CONSTANTS.map((item, index) => (
            <a
              href={item.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 hover:opacity-80"
            >
              <img src={item.logo} alt={item.name || 'logo'} width={28} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
