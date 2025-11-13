import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#103162] via-[#0a1f45] to-[#103162] text-gray-300 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Column 1: Quick Links */}
          <div className="animate-[fadeInUp_0.6s_ease-out]">
            <h5 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h5>
            <ul className="space-y-3">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Our Services", href: "/service" },
                { label: "Terms & Condition", href: "/" },
                { label: "Support", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="inline-block w-0 group-hover:w-2 h-0.5 bg-cyan-500 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Address */}
          <div className="animate-[fadeInUp_0.8s_ease-out]">
            <h5 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 relative inline-block">
              Address
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <FaMapMarkerAlt className="text-cyan-500 mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7577+Central+Parke+Blvd,+Mason,+OH+45040"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  7577 Central Parke Blvd Mason, OH 45040
                </a>
              </li>
              <li className="flex items-center group">
                <FaPhone className="text-cyan-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="tel:+14698330078"
                  className="hover:text-white transition-colors"
                >
                  +1 469 833 0078
                </a>
              </li>
              <li className="flex items-center group">
                <FaEnvelope className="text-cyan-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:erkinbay@erixconsulting.com"
                  className="hover:text-white transition-colors break-all"
                >
                  erkinbay@erixconsulting.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Logo & Tagline */}
          <div className="sm:col-span-2 lg:col-span-1 animate-[fadeInUp_1s_ease-out]">
            <div className="lg:text-right">
              <img
                src="/logo.png"
                alt="Eric's Consulting"
                className="h-10 md:h-12 mb-4 md:mb-6 lg:ml-auto transform hover:scale-105 transition-transform"
              />
              <p className="text-sm md:text-base leading-relaxed mb-6">
                Helping in protection against potential risks by purchasing a
                jurisdiction policy.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-3 lg:justify-end">
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
                    className={`w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.href.split(".")[0]}
                  >
                    <social.Icon className="text-base md:text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-gray-700/50 animate-[fadeInUp_1.2s_ease-out]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
            <p className="text-center md:text-left">
              ©{" "}
              <a
                href="https://erixconsulting.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Eric's Consulting
              </a>
              , All Right Reserved.
            </p>
            <p className="text-center md:text-right">
              Designed By{" "}
              <a
                href="https://www.cognilabs.org/en"
                className="hover:text-white transition-colors"
              >
                Cognilabs Company
              </a>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
