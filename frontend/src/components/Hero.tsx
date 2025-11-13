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
          className="w-full h-full object-cover animate-[fadeIn_1s_ease-in]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103162]/95 via-[#103162]/80 to-transparent"></div>
      </div>

      {/* Main Hero Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32">
        {/* Hero Content */}
        <div className="relative z-10">
          <div className="max-w-xl animate-[slideInLeft_0.8s_ease-out]">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-[fadeInUp_0.6s_ease-out]">
              The Best Consulting
              <br />
              Begins Here
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-12 animate-[fadeInUp_0.8s_ease-out]">
              For Individuals And Organisations
            </p>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              {[
                { value: "15", label: "Potential Projects", delay: "0.2s" },
                { value: "159", label: "New Projects", delay: "0.4s" },
                { value: "144", label: "Successful Projects", delay: "0.6s" },
                { value: "120", label: "Happy Clients", delay: "0.8s" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-left transform hover:scale-105 transition-transform duration-300"
                  style={{ animation: `fadeInUp 1s ease-out ${stat.delay}` }}
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3 animate-[fadeInUp_1s_ease-out]">
              {[
                {
                  Icon: FaFacebookF,
                  href: "https://facebook.com",
                  color: "hover:bg-[#1877f2]",
                },
                {
                  Icon: FaTwitter,
                  href: "https://twitter.com",
                  color: "hover:bg-[#1da1f2]",
                },
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com",
                  color: "hover:bg-[#e4405f]",
                },
                {
                  Icon: FaTelegramPlane,
                  href: "https://telegram.org",
                  color: "hover:bg-[#0088cc]",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                  aria-label={social.href.split(".")[0]}
                >
                  <social.Icon className="text-lg sm:text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Bar */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-6 md:pb-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-sm sm:text-base text-gray-300 animate-[fadeInUp_1.2s_ease-out]">
          <a
            href="tel:+14698330078"
            className="flex items-center hover:text-white transition-all duration-300 hover:translate-x-1"
          >
            <FiPhone className="mr-2 flex-shrink-0" />
            <span>+1 469 833 0078</span>
          </a>
          <a
            href="mailto:erkinbay@erixconsulting.com"
            className="flex items-center hover:text-white transition-all duration-300 hover:translate-x-1"
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

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
