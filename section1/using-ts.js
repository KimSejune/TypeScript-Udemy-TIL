var button = document.querySelector("button");
// '!' 를통하여 값이 분명히 들어올 것을 강조하고 as를 사용하여 Type Casting을 한다.
// 하단의 inpu1.value ''Element' 형식에 'value' 속성이 없습니다.ts(2339)' 경고가 없어진다.
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
