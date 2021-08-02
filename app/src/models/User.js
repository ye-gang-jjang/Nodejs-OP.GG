"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, psword } = UserStorage.getUsersInfo(body.id);


        if (id) {
            if (id === body.id && psword === body.psword) {
                return { success: true, msg: "환영합니다." };
            }
            return { success: false, msg: "비밀번호 다름" };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
    }
}

module.exports = User;