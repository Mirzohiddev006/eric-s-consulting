"use strict";
// src/pages/Home.tsx
exports.__esModule = true;
var react_1 = require("react");
var Hero_1 = require("../components/Hero");
var Features_1 = require("../components/Features");
var About_1 = require("../components/About");
var Team_1 = require("../components/Team");
var Home = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Hero_1["default"], null),
        react_1["default"].createElement("main", { className: "bg-white" },
            react_1["default"].createElement(Features_1["default"], null),
            react_1["default"].createElement(About_1["default"], null),
            react_1["default"].createElement(Team_1["default"], null))));
};
exports["default"] = Home;
