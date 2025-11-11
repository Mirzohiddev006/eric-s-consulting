// src/components/Hero.tsx

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiPhone, FiMail, FiClock } from "react-icons/fi";

const Hero: React.FC = () => {
  return (
    // Asosiy to'q ko'k fonli bo'lim
    <section className="bg-[#103162] text-white py-16 md:py-24">
      {/* 1. Kontent uchun konteyner */}
      <div className="container mx-auto px-8">
        {/* 2. Figmadagi asosiy karta. 
             - max-w-6xl (taxminan 1152px)
             - ml-[-19px] (siz aytgan X -19px)
             - relative, chunki ichidagi elementlar absolute bo'ladi
        */}
        <div className="max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden ml-[-19px]">
          {/* 3. Orqa fon rasmi (carousel-1.jpg) */}
          <img
            src="../../public/consultant.png" // public/hero-image.jpg
            alt="Consulting"
            className="absolute w-[1500px] h-[700px] object-cover clip-path-custom"
          />
          <style>

          </style>
          {/* 5. Rasm va gradient ustidagi matn kontenti */}
          <div className="relative z-10 p-12 mt-4 md:p-12 lg:py-24 lg:px-16 lg:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              The Best Consulting <br /> Begins Here
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              For Individuals And Organisations
            </p>

            {/* Statistika (Yangi dizayndagi ranglar) */}
            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-24 mb-20">
              <div className="text-left">
                <div className="text-3xl font-bold text-white">15 +</div>
                <div className="text-white">Potential Projects</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">159 +</div>
                <div className="text-white">New Projects</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">144 +</div>
                <div className="text-white">Successful Projects</div>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">120 +</div>
                <div className="text-white">Happy Clients</div>
              </div>
            </div>

            {/* Ijtimoiy tarmoqlar (Yangi dizayn - to'qroq fon) */}
            <div className="flex space-x-2">
              <a
                href="https"
                className="py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors"
              >
                <FaFacebookF />
              </a>
              <a
                href="https"
                className="py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https"
                className="py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https"
                className="py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Pastki kontakt paneli */}
      <div className="container mx-auto px-6 pt-16 mt-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <div className="flex items-center mb-4 md:mb-0">
            <FiPhone className="mr-2" />
            <a href="tel:+14698330078" className="hover:text-white">
              +1 469 833 0078
            </a>
          </div>
          <div className="flex items-center mb-4 md:mb-0">
            <FiMail className="mr-2" />
            <a
              href="mailto:erkinbay@erixconsulting.com"
              className="hover:text-white"
            >
              erkinbay@erixconsulting.com
            </a>
          </div>
          <div className="flex items-center">
            <FiClock className="mr-2" />
            <span>Mon - Fri : 09 AM - 09 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
