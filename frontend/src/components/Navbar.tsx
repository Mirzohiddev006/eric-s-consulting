import React, { useState, useEffect } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface User {
  isAuthenticated: boolean;
  isSuperuser: boolean;
  isStaff: boolean;
  firstName: string;
  lastName: string;
}

interface AuthProps {
  user?: User | null;
  hasUnreadMessages?: boolean;
  openRequests?: boolean;
  activePage?: string;
}

const DropdownLink: React.FC<{ href: string; children: React.ReactNode }> = ({
  href,
  children,
}) => (
  <Link
    to={href}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-brand-blue transition-colors"
  >
    {children}
  </Link>
);

const Navbar: React.FC<Partial<AuthProps>> = ({
  user,
  hasUnreadMessages,
  openRequests,
  activePage,
}) => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (page: string) =>
    `hover:text-brand-secondary transition-all duration-300 relative group ${
      activePage === page ? "text-brand-secondary" : "text-white"
    }`;

  const renderNavLinks = (mobile: boolean = false) => (
    <>
      <Link
        to="/"
        className={`${getLinkClass("home")} ${mobile ? "block py-2" : ""}`}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        Main
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to="/contact"
        className={`${getLinkClass("contact")} ${mobile ? "block py-2" : ""}`}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        Contact Us
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary group-hover:w-full transition-all duration-300"></span>
      </Link>
      <Link
        to="/service"
        className={`${getLinkClass("services")} ${mobile ? "block py-2" : ""}`}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        Our Services
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-secondary group-hover:w-full transition-all duration-300"></span>
      </Link>
    </>
  );

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#103162]/95 backdrop-blur-lg shadow-lg" : "bg-[#103162]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link
            to="/"
            className="transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/logo.png"
              alt="Eric's Consulting"
              className="h-8 sm:h-10 md:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {renderNavLinks()}

            {/* Auth Section */}
            {user?.isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-white hover:text-brand-secondary transition-all duration-300 transform hover:scale-105"
                >
                  <FaUserCircle size={24} />
                  <span className="hidden xl:inline">{user.firstName}</span>
                </button>

                {/* Dropdown */}
                {isProfileOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl z-50 py-2 animate-[slideDown_0.3s_ease-out] border border-gray-100"
                    onMouseLeave={() => setProfileOpen(false)}
                  >
                    <DropdownLink href="/profile">Manage Account</DropdownLink>

                    {(user.isSuperuser || user.isStaff) && (
                      <DropdownLink href="/chat_page">
                        <div className="flex items-center justify-between">
                          <span>Private Chat</span>
                          {hasUnreadMessages && (
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          )}
                        </div>
                      </DropdownLink>
                    )}
                    {user.isSuperuser && (
                      <>
                        <DropdownLink href="/request_messages">
                          <div className="flex items-center justify-between">
                            <span>Requests</span>
                            {openRequests && (
                              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            )}
                          </div>
                        </DropdownLink>
                        <DropdownLink href="/chat_history">
                          Chats History
                        </DropdownLink>
                      </>
                    )}
                    <div className="border-t border-gray-100 my-2"></div>
                    <DropdownLink href="/logout">Logout</DropdownLink>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login" className={getLinkClass("login")}>
                Login
              </a>
            )}

            {/* CTA Button */}
            <a
              href="tel:+14698330078"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
            >
              Contact Now!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
            {renderNavLinks(true)}

            {user?.isAuthenticated ? (
              <div className="space-y-2 pt-4 border-t border-white/10">
                <a
                  href="/profile"
                  className="block text-white hover:text-brand-secondary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Manage Account
                </a>
                {(user.isSuperuser || user.isStaff) && (
                  <a
                    href="/chat_page"
                    className="block text-white hover:text-brand-secondary py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Private Chat
                    {hasUnreadMessages && (
                      <span className="ml-2 w-2 h-2 bg-red-500 rounded-full inline-block animate-pulse"></span>
                    )}
                  </a>
                )}
                <a
                  href="/logout"
                  className="block text-white hover:text-brand-secondary py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Logout
                </a>
              </div>
            ) : (
              <a
                href="/login"
                className="block text-white hover:text-brand-secondary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
            )}

            <a
              href="tel:+14698330078"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-6 rounded-lg text-center font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Now!
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
