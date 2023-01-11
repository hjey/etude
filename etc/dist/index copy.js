"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const name = process.env.MYNAME;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server is running 🤷‍♂️');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    console.log(`You are entering ${name}'s server`);
});
// package.json-scripts-demon 폴더를 src로 바꾸면 javascript 실행
// package.json-scripts-demon 폴더를 dist로 바꾸면 typescript 실행
