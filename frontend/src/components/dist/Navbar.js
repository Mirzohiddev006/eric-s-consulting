"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
// This internal component helps keep the dropdown logic clean
var DropdownLink = function (_a) {
    var href = _a.href, children = _a.children;
    return (react_1["default"].createElement("a", { href: href, className: "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" }, children));
};
var Navbar = function (_a) {
    var user = _a.user, hasUnreadMessages = _a.hasUnreadMessages, openRequests = _a.openRequests, activePage = _a.activePage;
    var _b = react_1.useState(false), isProfileOpen = _b[0], setProfileOpen = _b[1];
    var getLinkClass = function (page) {
        return "hover:text-brand-secondary transition-colors " + (activePage === page ? "text-brand-secondary" : "text-white");
    };
    return (react_1["default"].createElement("nav", { className: "bg-[#103162] p-6 sticky top-0 z-50" },
        react_1["default"].createElement("div", { className: "container mx-auto flex justify-between items-center" },
            react_1["default"].createElement("a", { href: "/" },
                react_1["default"].createElement("img", { src: "/logo.png", alt: "Eric's Consulting", className: "h-10" })),
            react_1["default"].createElement("div", { className: "hidden md:flex space-x-8 items-center" },
                react_1["default"].createElement("a", { href: "/", className: getLinkClass("home") }, "Main"),
                react_1["default"].createElement("a", { href: "/contact", className: getLinkClass("contact") }, "Contact Us"),
                react_1["default"].createElement("a", { href: "/service", className: getLinkClass("services") }, "Our Services"),
                (user === null || user === void 0 ? void 0 : user.isAuthenticated) ? (react_1["default"].createElement("div", { className: "relative" },
                    react_1["default"].createElement("button", { onClick: function () { return setProfileOpen(!isProfileOpen); }, className: "flex items-center space-x-2 text-white hover:text-brand-secondary" },
                        react_1["default"].createElement(fa_1.FaUserCircle, { size: 24 }),
                        react_1["default"].createElement("span", null, user.firstName)),
                    isProfileOpen && (react_1["default"].createElement("div", { className: "absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 py-1", onMouseLeave: function () { return setProfileOpen(false); } },
                        react_1["default"].createElement(DropdownLink, { href: "/profile" }, "Manage Account"),
                        (user.isSuperuser || user.isStaff) && (react_1["default"].createElement(DropdownLink, { href: "/chat_page" },
                            "Private Chat",
                            hasUnreadMessages && (react_1["default"].createElement("span", { className: "ml-2 w-2 h-2 bg-red-500 rounded-full inline-block" })))),
                        user.isSuperuser && (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement(DropdownLink, { href: "/request_messages" },
                                "Requests",
                                openRequests && (react_1["default"].createElement("span", { className: "ml-2 w-2 h-2 bg-red-500 rounded-full inline-block" }))),
                            react_1["default"].createElement(DropdownLink, { href: "/chat_history" }, "Chats History"))),
                        react_1["default"].createElement("div", { className: "border-t border-gray-100 my-1" }),
                        react_1["default"].createElement(DropdownLink, { href: "/logout" }, "Logout"))))) : (react_1["default"].createElement("a", { href: "/login", className: getLinkClass("login") }, "Login")),
                react_1["default"].createElement("a", { href: "tel:+998901234567", className: "bg-[#103162] hover:bg-blue-700 text-white py-2 px-6 rounded-lg transition-colors" }, "Contact Now!")),
            react_1["default"].createElement("div", { className: "md:hidden" },
                react_1["default"].createElement("button", { className: "text-white" },
                    react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                        react_1["default"].createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" })))))));
};
exports["default"] = Navbar;
