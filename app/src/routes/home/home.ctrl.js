"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    main: (req, res) => {
        res.render("home/main");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);


        // const id = req.body.id,
        //     psword = req.body.psword;

        // const users = (UserStorage.getUsers("id", "psword"));

        // const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다.";
        // return res.json(response);
    },
};

module.exports = {
    output,
    process,
};




// ===========================
// const home = (req, res) => {
//     res.render("home/index");
// };

// const login = (req, res) => {
//     res.render("home/login");
// };

// const main = (req, res) => {
//     res.render("home/main");


// 위랑 같은 내용임
//{ key: key }
//{
//    hello: hello,
//    login: login,
//};
