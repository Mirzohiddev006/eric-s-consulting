"use strict";
// src/App.tsx
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
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("./components/Navbar");
var Footer_1 = require("./components/Footer");
var ChatWidget_1 = require("./components/ChatWidget");
// Sahifalarni import qilish
var Home_1 = require("./pages/Home");
var Services_1 = require("./pages/Services");
var Contact_1 = require("./pages/Contact");
var Login_1 = require("./pages/Login");
var Register_1 = require("./pages/Register");
// Profile va Admin sahifalarni ham keyinroq shu yerga qo'shish mumkin
// Bu funksiya Django'dagi 'active_page' logikasini almashtiradi
var getActivePage = function (pathname) {
    if (pathname === "/")
        return "home";
    if (pathname.startsWith("/service"))
        return "services";
    if (pathname.startsWith("/contact"))
        return "contact";
    if (pathname.startsWith("/login"))
        return "login";
    // ... va hokazo
    return "";
};
function App() {
    var _this = this;
    var _a = react_1.useState(null), user = _a[0], setUser = _a[1];
    var _b = react_1.useState(false), hasUnreadMessages = _b[0], setHasUnreadMessages = _b[1];
    var _c = react_1.useState(false), openRequests = _c[0], setOpenRequests = _c[1];
    var location = react_router_dom_1.useLocation();
    var activePage = getActivePage(location.pathname);
    // Sayt ochilganda bir marta backend'dan foydalanuvchi ma'lumotlarini tekshiradi
    react_1.useEffect(function () {
        var checkAuth = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("http://localhost:8000/api/check-auth/")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        if (data.isAuthenticated) {
                            setUser(data.user);
                            setHasUnreadMessages(data.hasUnreadMessages);
                            setOpenRequests(data.openRequests);
                        }
                        else {
                            setUser(null);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Auth tekshirishda xatolik:", error_1);
                        setUser(null);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        checkAuth();
    }, []); // [] - faqat bir marta ishga tushadi
    return (react_1["default"].createElement("div", { className: "min-h-screen flex flex-col" },
        react_1["default"].createElement(Navbar_1["default"], { user: user, hasUnreadMessages: hasUnreadMessages, openRequests: openRequests, activePage: activePage }),
        react_1["default"].createElement(react_router_dom_1.Routes, null,
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/", element: react_1["default"].createElement(Home_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/service", element: react_1["default"].createElement(Services_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/contact", element: react_1["default"].createElement(Contact_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/login", element: react_1["default"].createElement(Login_1["default"], null) }),
            react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", element: react_1["default"].createElement(Register_1["default"], null) })),
        react_1["default"].createElement(Footer_1["default"], null),
        react_1["default"].createElement(ChatWidget_1["default"], { isAuthenticated: !!user }),
        " "));
}
exports["default"] = App;
