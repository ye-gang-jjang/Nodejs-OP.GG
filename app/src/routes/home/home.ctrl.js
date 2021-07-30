"use strict";

const users = {
    id: ["kim", "nana", "dada"],
    psword: ["1234", "5678", "1111"],
};

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
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};



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
