function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log("Rendering logger");
    console.log(logString);
    console.log(constructor);
  };
}

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

const person = new Person();

console.log(person);

// target => Property Target을 나타내며 object 구조를 가진다
function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
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
  @Log
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid Prive - should be positive!");
    }
  }
  @Log
  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
