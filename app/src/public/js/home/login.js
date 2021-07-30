"use strict";

const id = document.querySelector("#email"),   //querySelector 는 '질의 선택자' 두번째 파라미터로 들어오는 선택자로 값을 가져올 수 있음.
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");


loginBtn.addEventListener("click", login);   //click했을 때 login(함수)

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
}