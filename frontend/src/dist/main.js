"use strict";
// src/main.tsx
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
client_1["default"].createRoot(document.getElementById("root")).render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        " ",
        react_1["default"].createElement(App_tsx_1["default"], null)),
    " "));
