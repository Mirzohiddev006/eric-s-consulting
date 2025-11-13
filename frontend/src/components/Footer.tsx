import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#103162] text-gray-300 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Column 1: Quick Links (from Figma & base.html) */}
        <div>
          <h5 className="text-lg font-bold text-white mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Address (from Figma & base.html) */}
        <div>
          <h5 className="text-lg font-bold text-white mb-4">Address</h5>
          <ul className="space-y-2">
            <li className="flex items-start">
              {/* Icon placeholder */}
              <span className="mr-3 mt-1">📍</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=7577+Central+Parke+Blvd,+Mason,+OH+45040"
                target="_self"
                className="hover:text-white"
              >
                7577 Central Parke Blvd Mason, OH 45040
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-3">📞</span>
              <a href="tel:+14698330078" className="hover:text-white">
                +1 469 833 0078
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-3">✉️</span>
              <a
                href="mailto:erkinbay@erixconsulting.com"
                className="hover:text-white"
              >
                erkinbay@erixconsulting.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Logo & Tagline (from Figma) */}
        <div className="md:text-right">
          <img
            src="/logo.png"
            alt="Eric's Consulting"
            className="h-12 mb-4 md:ml-auto"
          />
          <p>
            Helping in protection against potential risks by purchasing a
            jurisdiction policy.
          </p>
        </div>
      </div>

      {/* Copyright Bar (from base.html) */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-700 text-center md:flex md:justify-between">
        <p className="text-gray-400 text-sm">
          ©{" "}
          <a href="https://erixconsulting.com" className="hover:text-white">
            Eric's Consulting
          </a>
          , All Right Reserved.
        </p>
        <p className="text-gray-400 text-sm">
          Designed By{" "}
          <a href="https://www.cognilabs.org/en" className="hover:text-white">
            Cognilabs Company
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
