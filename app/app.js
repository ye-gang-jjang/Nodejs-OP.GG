"use strict";


//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");    //화면 뷰를 관리해줄 폴더 파일

app.set("view engine", "ejs");   //어떤 엔진으로 사용할지 선택
app.use(express.static(__dirname + '/'));   //css 쓸 수 있게 불러옴
app.use(express.static(`${__dirname}/src/public`)); // dirname은 app.js위치 반환/src/public으로 정적경로로 표현

app.use("/", home);  //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;
















// //----------http--------------
// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

//     if (req.url === "/") {
//         res.end("여기는 루트입니다.");
//     }
//     else if (req.url === "/login") {
//         res.end("여기는 로그인");
//     }
// });

// app.listen(3001, () => {
//     console.log("hhtp로 가동된 서버.");
// });


