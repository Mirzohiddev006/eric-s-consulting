"use strict";
// src/pages/Contact.tsx
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var fi_1 = require("react-icons/fi");
var Contact = function () {
    var _a = react_1.useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        // Bu yerga backend'ga yuborish logikasini qo'shasiz
        console.log(formData);
        alert("Xabaringiz yuborildi!");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };
    return (react_1["default"].createElement("div", { className: "bg-white py-16 md:py-24" },
        react_1["default"].createElement("div", { className: "container mx-auto px-6" },
            react_1["default"].createElement("div", { className: "text-center mb-16" },
                react_1["default"].createElement("h1", { className: "text-4xl font-bold text-brand-dark-blue mb-4" }, "Biz bilan bog'laning"),
                react_1["default"].createElement("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto" }, "Savollaringiz bormi? Bizga xabar yuboring, biz siz bilan tez orada bog'lanamiz.")),
            react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row gap-12" },
                react_1["default"].createElement("div", { className: "lg:w-2/3 bg-gray-50 p-8 rounded-2xl shadow-lg" },
                    react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                        react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
                            react_1["default"].createElement("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "Ismingiz", className: "w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue", required: true }),
                            react_1["default"].createElement("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "Email manzilingiz", className: "w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue", required: true })),
                        react_1["default"].createElement("input", { type: "text", name: "subject", value: formData.subject, onChange: handleChange, placeholder: "Mavzu", className: "w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue", required: true }),
                        react_1["default"].createElement("textarea", { name: "message", value: formData.message, onChange: handleChange, placeholder: "Xabaringiz", rows: 6, className: "w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue", required: true }),
                        react_1["default"].createElement("button", { type: "submit", className: "w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors" }, "Xabarni yuborish"))),
                react_1["default"].createElement("div", { className: "lg:w-1/3 space-y-6" },
                    react_1["default"].createElement("h3", { className: "text-2xl font-semibold text-brand-dark-blue" }, "Bizning ma'lumotlarimiz"),
                    react_1["default"].createElement("div", { className: "flex items-start space-x-4" },
                        react_1["default"].createElement(fi_1.FiMapPin, { size: 24, className: "text-brand-blue mt-1" }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h4", { className: "font-bold text-gray-800" }, "Manzil"),
                            react_1["default"].createElement("p", { className: "text-gray-600" }, "7577 Central Parke Blvd Mason, OH 45040"))),
                    react_1["default"].createElement("div", { className: "flex items-start space-x-4" },
                        react_1["default"].createElement(fi_1.FiMail, { size: 24, className: "text-brand-blue mt-1" }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h4", { className: "font-bold text-gray-800" }, "Email"),
                            react_1["default"].createElement("a", { href: "mailto:erkinbay@erixconsulting.com", className: "text-gray-600 hover:text-brand-blue" }, "erkinbay@erixconsulting.com"))),
                    react_1["default"].createElement("div", { className: "flex items-start space-x-4" },
                        react_1["default"].createElement(fi_1.FiPhone, { size: 24, className: "text-brand-blue mt-1" }),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("h4", { className: "font-bold text-gray-800" }, "Telefon"),
                            react_1["default"].createElement("a", { href: "tel:+14698330078", className: "text-gray-600 hover:text-brand-blue" }, "+1 469 833 0078"))))))));
};
exports["default"] = Contact;
