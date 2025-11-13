"use strict";
// src/pages/Login.tsx
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Login = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(""), error = _c[0], setError = _c[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setError("");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch("http://localhost:8000/api/login/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ email: email, password: password })
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (data.success) {
                        // Muvaffaqiyatli kirganda, sahifani yangilaymiz
                        // (yoki AppContext'ni yangilab, bosh sahifaga o'tkazamiz)
                        window.location.href = "/";
                    }
                    else {
                        setError(data.error || "Login yoki parol noto'g'ri");
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    setError("Server bilan bog'lanishda xatolik yuz berdi.");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement("div", { className: "min-h-[60vh] flex items-center justify-center bg-gray-50 py-12" },
        react_1["default"].createElement("div", { className: "w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl" },
            react_1["default"].createElement("h2", { className: "text-3xl font-bold text-center text-brand-dark-blue" }, "Kirish"),
            error && (react_1["default"].createElement("div", { className: "p-3 text-center text-red-800 bg-red-100 rounded-lg" }, error)),
            react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "space-y-6" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700" }, "Email manzil"),
                    react_1["default"].createElement("input", { id: "email", name: "email", type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "mt-1 w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue", required: true })),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("label", { htmlFor: "password", className: "block text-sm font-medium text-gray-700" }, "Parol"),
                    react_1["default"].createElement("input", { id: "password", name: "password", type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "mt-1 w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue", required: true })),
                react_1["default"].createElement("button", { type: "submit", className: "w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors" }, "Kirish"),
                react_1["default"].createElement("p", { className: "text-center text-gray-600" },
                    "Hisobingiz yo'qmi?",
                    " ",
                    react_1["default"].createElement("a", { href: "/register", className: "font-medium text-brand-blue hover:underline" }, "Ro'yxatdan o'tish"))))));
};
exports["default"] = Login;
