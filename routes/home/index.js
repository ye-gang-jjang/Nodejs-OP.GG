"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//메인
router.get("/", ctrl.home);

//로그인
router.get("/login", ctrl.login);

//op.gg
router.get("/main", ctrl.main);

module.exports = router;