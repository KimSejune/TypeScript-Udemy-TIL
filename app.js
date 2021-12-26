"use strict";
const button = document.querySelector("button"); // DOM 값을 찾아낸다.
button.addEventListener("click", () => {
    console.log("Clicked!");
}); // TypeScript가 버튼을 감지해 낼 수 있을지 확신을 못하여 에러를 표시한다.
