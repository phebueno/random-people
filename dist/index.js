"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var person_routes_1 = __importDefault(require("./routes/person.routes"));
var app = (0, express_1.default)();
app.get("/health", function (req, res) { return res.status(200).send("I'm Ok!"); });
app.use(person_routes_1.default);
var port = process.env.PORT || 5000;
app.listen(port, function () { return console.log("Server is up and running on port ".concat(port)); });
