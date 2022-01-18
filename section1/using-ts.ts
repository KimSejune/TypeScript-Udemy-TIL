const button = document.querySelector("button");
// '!' 를통하여 값이 분명히 들어올 것을 강조하고 as를 사용하여 Type Casting을 한다.
// 하단의 inpu1.value ''Element' 형식에 'value' 속성이 없습니다.ts(2339)' 경고가 없어진다.
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number): number {
  return num1 + num2;
}

button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
