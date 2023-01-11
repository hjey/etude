const express = require("express");
const path = require("path");
const app = express();
const db = require("../../test/mongo_db.js"); // db 불러오기
const route = require("./index.js");

const port = process.env.PORT;
const name = process.env.MYNAME;

// const dotenv = require('dotenv');
// dotenv.config();
require("dotenv").config();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "html"));
db(); // 실행
app.use(express.static(path.join(__dirname, "html")));
app.use("/", route);

/*
app.get("/", (req, res) => {
  res.send("🎼Express + 🎆TypeScript Server");
});
 */

app.listen(port, () => {
  console.log(`🎶 [server]: Server is running at http://localhost:${port}`);
  console.log(`You are entering ${name}'s Javascript server`);
});

// npm run dev    >>(nodemon) 서버([nodemon])와 클라이언트([0]같은거) 동시 실행
// npm run demon  >>(concurrency + nodemon) 서버만 실행
// 패키지 자동 추가) npm set-script {스크립트 이름} {명령어}
// concurrently 서버 클라이언트 동시실행, \" 그리고 tsc 가져와 실행하고 --watch 관찰해 노데몬 그 후에 실행해

// npm install --save-dev (or npm i -D ) only adds the package to your “dev dependencies

// node -r dotenv/config index.js >> 라이브러리 import/export 없이 실행하고자 하면 앞에 require dotenv or config 받아와 실행할 때만 불러와서 사용
/* 
  commonJS의 경우 require/exports 사용  !! S
  const name = require('./modules.js');
  module.exports = name;

  ES6(ES2015)의 경우 import/export 사용 !! UPGRADED
  import name from './modules.js';
  export default name;
 */
