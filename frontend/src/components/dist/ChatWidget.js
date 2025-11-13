"use strict";
// src/components/ChatWidget.tsx
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
// Ikonkalarni import qilish (FaRobot - yangi avatar uchun)
var fa_1 = require("react-icons/fa");
var ChatWidget = function (_a) {
    var isAuthenticated = _a.isAuthenticated;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = react_1.useState([]), messages = _c[0], setMessages = _c[1];
    var _d = react_1.useState(""), input = _d[0], setInput = _d[1];
    var _e = react_1.useState(false), isLoading = _e[0], setIsLoading = _e[1];
    var messagesEndRef = react_1.useRef(null);
    // Xabarlar o'zgarganda pastga skroll qilish
    var scrollToBottom = function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    react_1.useEffect(scrollToBottom, [messages, isLoading]);
    // Oyna ochilganda chat tarixini yuklash
    react_1.useEffect(function () {
        if (isOpen) {
            var fetchChatHistory = function () { return __awaiter(void 0, void 0, void 0, function () {
                var response, data, welcomeMessage, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            setIsLoading(true);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, 5, 6]);
                            return [4 /*yield*/, fetch("/chat-bot")];
                        case 2:
                            response = _a.sent();
                            if (!response.ok)
                                return [2 /*return*/];
                            return [4 /*yield*/, response.json()];
                        case 3:
                            data = _a.sent();
                            welcomeMessage = {
                                sender: "bot",
                                text: "Salom, sizga qanday yordam bera olaman?"
                            };
                            setMessages(__spreadArrays([welcomeMessage], (data.chat_history || [])));
                            return [3 /*break*/, 6];
                        case 4:
                            error_1 = _a.sent();
                            console.error("Chat tarixini yuklashda xatolik:", error_1);
                            return [3 /*break*/, 6];
                        case 5:
                            setIsLoading(false);
                            return [7 /*endfinally*/];
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            fetchChatHistory();
        }
    }, [isOpen]);
    // Xabarni yuborish funksiyasi
    var handleSend = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var userMessage, formData, response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!input.trim() || isLoading)
                        return [2 /*return*/];
                    if (!isAuthenticated) {
                        setMessages(function (prev) { return __spreadArrays(prev, [
                            {
                                sender: "bot",
                                text: "Chatbotdan foydalanish uchun tizimga kiring yoki ro'yxatdan o'ting."
                            },
                        ]); });
                        setInput("");
                        return [2 /*return*/];
                    }
                    userMessage = { sender: "user", text: input };
                    setMessages(function (prev) { return __spreadArrays(prev, [userMessage]); });
                    setInput("");
                    setIsLoading(true); // "Yozmoqda..." indikatorini yoqish
                    formData = new FormData();
                    formData.append("message", input);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("/chat-bot", {
                            method: "POST",
                            body: formData
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP xatolik! Status: " + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    data.messages.forEach(function (msg) {
                        setMessages(function (prev) { return __spreadArrays(prev, [{ sender: "bot", text: msg.text }]); });
                    });
                    return [3 /*break*/, 6];
                case 4:
                    error_2 = _a.sent();
                    console.error("Xabar yuborishda xatolik:", error_2);
                    setMessages(function (prev) { return __spreadArrays(prev, [
                        {
                            sender: "bot",
                            text: "Kechirasiz, xabar yuborishda xatolik yuz berdi."
                        },
                    ]); });
                    return [3 /*break*/, 6];
                case 5:
                    setIsLoading(false); // "Yozmoqda..." indikatorini o'chirish
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { onClick: function () { return setIsOpen(!isOpen); }, className: "fixed bottom-8 left-8 bg-brand-blue text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300 ease-in-out hover:scale-110" }, isOpen ? react_1["default"].createElement(fa_1.FaTimes, { size: 24 }) : react_1["default"].createElement(fa_1.FaComments, { size: 24 })),
        react_1["default"].createElement("div", { className: "fixed bottom-[calc(4rem+1.5rem)] left-8 w-96 h-[600px] shadow-2xl rounded-2xl z-50 flex flex-col transition-all duration-300 ease-in-out bg-brand-dark-blue\n          " + (isOpen
                ? "opacity-100 transform scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 transform scale-95 -translate-y-4 pointer-events-none") },
            react_1["default"].createElement("div", { className: "flex items-center justify-between p-4 border-b border-gray-700" },
                react_1["default"].createElement("div", { className: "flex items-center space-x-3" },
                    react_1["default"].createElement("div", { className: "flex-shrink-0 w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center" },
                        react_1["default"].createElement(fa_1.FaRobot, { className: "text-white" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h3", { className: "font-bold text-lg text-white" }, "Eric's Assistant"),
                        react_1["default"].createElement("p", { className: "text-xs text-gray-400" }, "Last seen recently"))),
                react_1["default"].createElement("button", { onClick: function () { return setIsOpen(false); }, className: "text-gray-400 hover:text-white" },
                    react_1["default"].createElement(fa_1.FaTimes, { size: 20 }))),
            react_1["default"].createElement("div", { className: "flex-1 p-4 overflow-y-auto space-y-4" },
                messages.map(function (msg, index) { return (react_1["default"].createElement("div", { key: index, className: "flex items-end space-x-2 " + (msg.sender === "user" ? "justify-end" : "justify-start") },
                    msg.sender === "bot" && (react_1["default"].createElement("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center" },
                        react_1["default"].createElement(fa_1.FaRobot, { className: "text-white" }))),
                    react_1["default"].createElement("div", { className: "p-3 rounded-2xl max-w-[80%] break-words shadow-sm\n                  " + (msg.sender === "user"
                            ? "bg-brand-blue text-white rounded-br-none"
                            : "bg-blue-200 text-gray-900 rounded-bl-none" // Figmadagidek och ko'k
                        ) }, msg.text))); }),
                isLoading && (react_1["default"].createElement("div", { className: "flex items-end space-x-2 justify-start" },
                    react_1["default"].createElement("div", { className: "flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center" },
                        react_1["default"].createElement(fa_1.FaRobot, { className: "text-white" })),
                    react_1["default"].createElement("div", { className: "bg-blue-200 text-gray-900 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center space-x-2" },
                        react_1["default"].createElement("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" }),
                        react_1["default"].createElement("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" }),
                        react_1["default"].createElement("div", { className: "w-2 h-2 bg-gray-500 rounded-full animate-bounce" })))),
                react_1["default"].createElement("div", { ref: messagesEndRef })),
            react_1["default"].createElement("form", { onSubmit: handleSend, className: "p-4" },
                react_1["default"].createElement("div", { className: "relative" },
                    react_1["default"].createElement("input", { type: "text", value: input, onChange: function (e) { return setInput(e.target.value); }, placeholder: "Ask me anything...", className: "w-full bg-white text-gray-900 rounded-full px-6 py-4 pr-16 border-none\r\n                         focus:outline-none focus:ring-2 focus:ring-brand-blue" }),
                    react_1["default"].createElement("button", { type: "submit", className: "absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center\r\n                         text-gray-500 hover:text-brand-blue hover:bg-gray-100 transition-colors\r\n                         disabled:opacity-50", disabled: isLoading || !input.trim() },
                        react_1["default"].createElement(fa_1.FaPaperPlane, { size: 18 })))))));
};
exports["default"] = ChatWidget;
