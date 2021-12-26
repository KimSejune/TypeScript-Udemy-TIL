// 느낌표를 붙이면 그 값이 무조건 있다는 것을 의미한다
const button = document.querySelector("button")!; // DOM 값을 찾아낸다.

function clickHandler(message: string) {
  console.log("Clicked!" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "ㅁㄴㅇ")); // TypeScript가 버튼을 감지해 낼 수 있을지 확신을 못하여 에러를 표시한다.
}
