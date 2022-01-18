function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // 단점 runtime에서만 체크할 수 있다. (TypeScript 사용시 아래와같은 방법은 사용하지 않는 것이 좋다.)
  // javascript는 number, string, boolean Type만 알 수 있다.
  // typescript를 통하여 런타임이아닌 코드작성중에 방어할 수 있다.
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!!");
  // }

  // 상수 result는 타입추론을 통하여 타입을 추론한다.
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// let number1은 typescript가 number type이라고 추론이 가능하기때문에
// 이미 할당되어있는 값을 기반으로 추론을 하기때문이다.
// 굳이 명시하는것이 좋지않다.
// let number1 = 5;

const number1 = 5; // JS에서 5는 5.0과 같다.

// if (5 === 5.0) {
//   console.log("same");
// }
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);
