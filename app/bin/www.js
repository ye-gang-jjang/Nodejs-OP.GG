"use strict";


//포트 설정
const PORT = 3000;
const app = require("../app");

//터미널창
app.listen(PORT, () => {
    console.log("서버가동");
});

