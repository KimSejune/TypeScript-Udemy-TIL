function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log("Rendering logger");
    console.log(logString);
    console.log(constructor);
  };
}
// return function <T extends { new (...args: any[]): { name: string } }>(
//   originalConstructor: T
// ) {
//   console.log("Rendering template");

//   return class extends originalConstructor {
//     constructor(..._: any[]) {
//       super(); // original funciton, class 저장.

//       const hookEl = document.getElementById(hookId);
//       if (hookEl) {
//         hookEl.innerHTML = template;
//         hookEl.querySelector("h1")!.textContent = this.name;
//       }
//     }
//   };
// };

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template");
    const p = new constructor();
    const hookEl = document.getElementById(hookId);
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

// const person = new Person();

// console.log(person);

// target => Property Target을 나타내며 object 구조를 가진다
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return {}; // set, get, enumerable, configurable 수정해서 반환가능하다.
}

function Log3(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return {}; // enumerable, configurable, value, writable 수정해서 반환가능하다.
}

function Log4(target: any, name: string, position: number) {
  console.log("Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position); // index
}

class Product {
  @Log
  title: string;
  @Log
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Prive - should be positive!");
    }
  }
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // 항상 this 키워드를 이 메서드가 아직 속해 있는 객체로 설정하려고한다.
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      // this는 getter Method를 대체한다.
      // getter method를 트리거하는 것을 참조한다.
      // 따라서 getter mathod 대신 this가 우리가 함께 정의한 객체를 항상 참조할 것이다.
      // 즉 모두 정확히 동일한 객체를 참조할 수 있다.
      // console.log("this", this);
      // Printer {message: 'This works!'}
      // message: "This works!"
      // showMessage: ƒ ()
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  // 새로운 descriptor 객체를 반환하여 이전의 descriptor를 덮어쓰게 된다.
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

p.showMessage(); // This works!
const button = document.querySelector("button");

button?.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    // 해당 클래스 이름의 기존 key-value 를 가져온다
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    // 해당 클래스 이름의 기존 key-value 를 가져온다
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

// 등록된 모든 validator를 조사한 후 찾아낸 validator로 다양한 로직을 실행한다.
function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }

  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop);
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseform = document.querySelector("form")!;
courseform.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
