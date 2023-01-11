const express = require("express");
const path = require("path");
const app = express();
// const db = require("./mongo_db.js"); // db 불러오기
const route = require("./route.js");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "main"));
// db(); // 실행
app.use(express.static(path.join(__dirname, "html")));
app.use("/", route);

// 에러 처리 부분
app.listen(8080, () => {
  console.log("Express App on port 8080!");
});
