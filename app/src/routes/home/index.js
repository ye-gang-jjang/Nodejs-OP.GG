"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//메인
router.get("/", ctrl.output.home);

//로그인
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

//회원가입
router.get("/register", ctrl.output.register);

//op.gg
router.get("/main", ctrl.output.main);

module.exports = router;