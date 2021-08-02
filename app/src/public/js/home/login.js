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

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req)   // stringify=문자열로 바꿔주는 메소드, req를 JSON형태의 문자열로 바꿈
    })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                location.href = "/main";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
}