"use strict";

class UserStorage {
    static #users = {
        id: ["김김김", "이이이", "비비빅"],
        psword: ["1234", "4567", "8910"],
        name: ["김씨", "이씨", "아이스크림"],
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