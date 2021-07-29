"use strict";

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

const main = (req, res) => {
    res.render("home/main");
};

module.exports = {
    home,
    login,
    main
};
// 위랑 같은 내용임
//{ key: key }
//{
//    hello: hello,
//    login: login,
//};
