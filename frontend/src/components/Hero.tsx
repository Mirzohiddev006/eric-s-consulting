import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative bg-[#103162] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="consultant.png"
          alt="Consulting Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#103162]/95 via-[#103162]/80 to-transparent"></div>
      </div>

      {/* Main Hero Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
        {/* Hero Content */}
        <div className="relative z-10">
          <div className="max-w-xl">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              The Best Consulting
              <br />
              Begins Here
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-12">
              For Individuals And Organisations
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
              <div className="text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  15
                </div>
                <div className="text-sm sm:text-base text-gray-200">
                  Potential Projects
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  159
                </div>
                <div className="text-sm sm:text-base text-gray-200">
                  New Projects
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  144
                </div>
                <div className="text-sm sm:text-base text-gray-200">
                  Successful Projects
                </div>
              </div>
              <div className="text-left">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                  120
                </div>
                <div className="text-sm sm:text-base text-gray-200">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#1877f2] transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#1da1f2] transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#e4405f] transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-[#0088cc] transition-all duration-300 transform hover:scale-110"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Bar */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-sm sm:text-base text-gray-300">
          <a
            href="tel:+14698330078"
            className="flex items-center hover:text-white transition-colors"
          >
            <FiPhone className="mr-2 flex-shrink-0" />
            <span>+1 469 833 0078</span>
          </a>
          <a
            href="mailto:erkinbay@erixconsulting.com"
            className="flex items-center hover:text-white transition-colors"
          >
            <FiMail className="mr-2 flex-shrink-0" />
            <span className="break-all sm:break-normal">
              erkinbay@erixconsulting.com
            </span>
          </a>
          <div className="flex items-center">
            <FiClock className="mr-2 flex-shrink-0" />
            <span>Mon - Fri : 09 AM - 09 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
