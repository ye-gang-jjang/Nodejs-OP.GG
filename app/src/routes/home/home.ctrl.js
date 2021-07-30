"use strict";

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
        console.log(req.body);
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
