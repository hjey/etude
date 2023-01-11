'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const sendData = {
    country: "Iran",
    family_name: "Muhamad",
    job: "Student",
    age: 27
};
app.get('/get', (req, res) => {
    // res.send('Express + TypeScript Server is running 🤷‍♂️');
    res.send(sendData);
});
app.listen(port);
