import React, { useState } from "react";
import { AuthProps } from "../types";
import { FaUserCircle } from "react-icons/fa";

// This internal component helps keep the dropdown logic clean
const DropdownLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <a
    href={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  >
    {children}
  </a>
);

const Navbar: React.FC<Partial<AuthProps>> = ({
  user,
  hasUnreadMessages,
  openRequests,
  activePage,
}) => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  const getLinkClass = (page: string) =>
    `hover:text-brand-secondary transition-colors ${
      activePage === page ? "text-brand-secondary" : "text-white"
    }`;

  return (
    <nav className="bg-[#103162] p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src="/logo.png" alt="Eric's Consulting" className="h-10" />
        </a>

        {/* Main Navigation (from Figma) */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="/" className={getLinkClass("home")}>
            Main
          </a>
          <a href="/contact" className={getLinkClass("contact")}>
            Contact Us
          </a>
          <a href="/service" className={getLinkClass("services")}>
            Our Services
          </a>

          {/* Authentication Logic (from base.html) */}
          {user?.isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 text-white hover:text-brand-secondary"
              >
                <FaUserCircle size={24} />
                <span>{user.firstName}</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 py-1"
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <DropdownLink href="/profile">Manage Account</DropdownLink>

                  {/* Staff/Superuser links (from base.html) */}
                  {(user.isSuperuser || user.isStaff) && (
                    <DropdownLink href="/chat_page">
                      Private Chat
                      {hasUnreadMessages && (
                        <span className="ml-2 w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                      )}
                    </DropdownLink>
                  )}
                  {user.isSuperuser && (
                    <>
                      <DropdownLink href="/request_messages">
                        Requests
                        {openRequests && (
                          <span className="ml-2 w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                        )}
                      </DropdownLink>
                      <DropdownLink href="/chat_history">
                        Chats History
                      </DropdownLink>
                    </>
                  )}
                  <div className="border-t border-gray-100 my-1"></div>
                  <DropdownLink href="/logout">Logout</DropdownLink>
                </div>
              )}
            </div>
          ) : (
            <a href="/login" className={getLinkClass("login")}>
              Login
            </a>
          )}

          {/* Contact Button (from Figma) */}
          <a
            href="tel:+998901234567"
            className="bg-[#103162] hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors"
          >
            Contact Now!
          </a>
        </div>

        {/* Mobile Menu Button (placeholder) */}
        <div className="md:hidden">
          <button className="text-white">
            {/* You would add an icon here, e.g., from react-icons */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
