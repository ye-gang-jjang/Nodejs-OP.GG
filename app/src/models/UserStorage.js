"use strict";

class UserStorage {
    static #users = {        //static = 정적 변수로 만들기, #표시 public변수에서 private 변수로 만듬
        id: ["kim", "nana", "dada"],
        psword: ["1234", "5678", "1111"],
        name: ["김씨", "나나씨", "다다씨"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;