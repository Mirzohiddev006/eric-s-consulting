"use strict";
// src/components/Hero.tsx
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var fi_1 = require("react-icons/fi");
var Hero = function () {
    return (
    // Asosiy to'q ko'k fonli bo'lim
    react_1["default"].createElement("section", { className: "bg-[#103162] text-white py-16 md:py-24" },
        react_1["default"].createElement("div", { className: "container mx-auto px-8" },
            react_1["default"].createElement("div", { className: "max-w-2xl mx-auto rounded-3xl shadow-2xl overflow-hidden ml-[-19px]" },
                react_1["default"].createElement("img", { src: "consultant.png" // public/hero-image.jpg
                    , alt: "Consulting", className: "absolute w-[1500px] h-[700px] object-cover top-28" }),
                react_1["default"].createElement("style", null),
                react_1["default"].createElement("div", { className: "relative z-10 p-8 md:p-12 lg:py-24 lg:px-16 lg:w-2/3" },
                    react_1["default"].createElement("h1", { className: "text-4xl md:text-5xl font-bold leading-tight mb-4 whitespace-nowrap" },
                        "The Best Consulting ",
                        react_1["default"].createElement("br", null),
                        " Begins Here"),
                    react_1["default"].createElement("p", { className: "text-xl text-gray-300 mb-8" }, "For Individuals And Organisations"),
                    react_1["default"].createElement("div", { className: "relative grid grid-cols-2 sm:grid-cols-4 gap-24 mb-20" },
                        react_1["default"].createElement("div", { className: "text-left" },
                            react_1["default"].createElement("div", { className: "text-3xl font-bold text-white" }, "15"),
                            react_1["default"].createElement("div", { className: "text-white" }, "Potential Projects")),
                        react_1["default"].createElement("div", { className: "text-left" },
                            react_1["default"].createElement("div", { className: "text-3xl font-bold text-white" }, "159"),
                            react_1["default"].createElement("div", { className: "text-white" }, "New Projects")),
                        react_1["default"].createElement("div", { className: "text-left" },
                            react_1["default"].createElement("div", { className: "text-3xl font-bold text-white" }, "144"),
                            react_1["default"].createElement("div", { className: "text-white" }, "Successful Projects")),
                        react_1["default"].createElement("div", { className: "text-left" },
                            react_1["default"].createElement("div", { className: "text-3xl font-bold text-white" }, "120"),
                            react_1["default"].createElement("div", { className: "text-white" }, "Happy Clients"))),
                    react_1["default"].createElement("div", { className: "flex space-x-2" },
                        react_1["default"].createElement("a", { href: "https", className: "py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors" },
                            react_1["default"].createElement(fa_1.FaFacebookF, null)),
                        react_1["default"].createElement("a", { href: "https", className: "py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors" },
                            react_1["default"].createElement(fa_1.FaTwitter, null)),
                        react_1["default"].createElement("a", { href: "https", className: "py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors" },
                            react_1["default"].createElement(fa_1.FaInstagram, null)),
                        react_1["default"].createElement("a", { href: "https", className: "py-2 px-4 bg-gray-700/50 rounded-lg hover:bg-brand-blue transition-colors" },
                            react_1["default"].createElement(fa_1.FaTelegramPlane, null)))))),
        react_1["default"].createElement("div", { className: "container mx-auto px-6 pt-16 mt-8" },
            react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between items-center text-sm text-gray-300" },
                react_1["default"].createElement("div", { className: "flex items-center mb-4 md:mb-0" },
                    react_1["default"].createElement(fi_1.FiPhone, { className: "mr-2" }),
                    react_1["default"].createElement("a", { href: "tel:+14698330078", className: "hover:text-white" }, "+1 469 833 0078")),
                react_1["default"].createElement("div", { className: "flex items-center mb-4 md:mb-0" },
                    react_1["default"].createElement(fi_1.FiMail, { className: "mr-2" }),
                    react_1["default"].createElement("a", { href: "mailto:erkinbay@erixconsulting.com", className: "hover:text-white" }, "erkinbay@erixconsulting.com")),
                react_1["default"].createElement("div", { className: "flex items-center" },
                    react_1["default"].createElement(fi_1.FiClock, { className: "mr-2" }),
                    react_1["default"].createElement("span", null, "Mon - Fri : 09 AM - 09 PM"))))));
};
exports["default"] = Hero;
