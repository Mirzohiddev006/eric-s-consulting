"use strict";
exports.__esModule = true;
var react_1 = require("react");
var teamMembers = [
    {
        name: "Dilfuza Abdullaeva",
        role: "Expert in Digital marketing, business consultant, visa support, and immigration consultant",
        image: "../../public/team/dilfuza.png"
    },
    {
        name: "Ulugbek Shukurov",
        role: "Expert in Criminal law, immigration consultant, Lawyer",
        image: "../../public/team/Ulug'bek.png"
    },
    {
        name: "Khushnazar Juraev",
        role: "Lawyer, Expert, Immigration Consultant",
        image: "../../public/team/khushnazar.png"
    },
];
var Team = function () {
    return (react_1["default"].createElement("section", { className: "py-16 md:py-24 bg-white" },
        react_1["default"].createElement("div", { className: "container mx-auto px-6" },
            react_1["default"].createElement("div", { className: "max-w-3xl mb-16 text-center mx-auto" },
                react_1["default"].createElement("h2", { className: "text-4xl font-bold text-brand-dark-blue mb-6" }, "Meet Our Highly Experienced Team"),
                react_1["default"].createElement("p", { className: "text-lg text-gray-600" }, "Our team is not only skilled but also dedicated to providing the best service possible.")),
            react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" }, teamMembers.map(function (member) { return (react_1["default"].createElement("div", { key: member.name, className: "bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow" },
                react_1["default"].createElement("img", { src: member.image, alt: member.name, className: "w-full h-[500px] object-cover" }),
                react_1["default"].createElement("div", { className: "p-6 text-center" },
                    react_1["default"].createElement("h3", { className: "text-2xl font-bold text-brand-dark-blue mb-2" }, member.name),
                    react_1["default"].createElement("p", { className: "text-brand-blue font-medium" }, member.role)))); })))));
};
exports["default"] = Team;
