"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var featureList = [
    {
        icon: react_1["default"].createElement(fa_1.FaCalendarCheck, { size: 32, className: "text-brand-blue" }),
        title: "Easy Process",
        description: "At our consulting company, we make success simple. Our process is clear, fast, and focused — from understanding your goals to delivering practical, measurable results. With expert guidance and transparent communication, we turn complex challenges into easy, effective solutions."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaComments, { size: 32, className: "text-brand-blue" }),
        title: "Fast Solution",
        description: "We deliver fast, effective solutions tailored to your business needs. Our team analyzes challenges quickly and provides clear, actionable strategies that bring results without delay. With us, you get speed, precision, and impact — all in one place."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaHandshake, { size: 32, className: "text-brand-blue" }),
        title: "Transparency",
        description: "Transparency is at the heart of everything we do. We keep you informed at every stage from planning to execution with honest communication and clear reporting. You'll always know what we're doing, why it matters, and how it benefits your business."
    },
    {
        icon: react_1["default"].createElement(fa_1.FaTags, { size: 32, className: "text-brand-blue" }),
        title: "Affordable Service",
        description: "We provide high-quality consulting services at prices that fit your budget. Our goal is to deliver maximum value without unnecessary costs, ensuring every client big or small can access expert guidance. With us, you get professional solutions that are both effective and affordable."
    },
];
var Features = function () {
    return (react_1["default"].createElement("section", { className: "py-16 md:py-24 bg-gray-50" },
        react_1["default"].createElement("div", { className: "container mx-auto px-6" },
            react_1["default"].createElement("h2", { className: "text-4xl font-bold text-center text-brand-dark-blue mb-12" }, "Main Reasons Why People Choose Us!"),
            react_1["default"].createElement("p", { className: "text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16" }, "Choosing the right consulting company is critical to peace of mind and financial security. We stand out from the crowd with our unwavering commitment to our clients."),
            react_1["default"].createElement("div", { className: "max-w-4xl mx-auto space-y-8" }, featureList.map(function (feature) { return (react_1["default"].createElement("div", { key: feature.title, className: "flex flex-col md:flex-row items-start p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow" },
                react_1["default"].createElement("div", { className: "flex-shrink-0 p-5 bg-blue-50 rounded-xl" }, feature.icon),
                react_1["default"].createElement("div", { className: "md:ml-6 mt-6 md:mt-0" },
                    react_1["default"].createElement("h3", { className: "text-2xl font-bold text-brand-dark-blue mb-3" }, feature.title),
                    react_1["default"].createElement("p", { className: "text-gray-600 leading-relaxed" }, feature.description)))); })))));
};
exports["default"] = Features;
