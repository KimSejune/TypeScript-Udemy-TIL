interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;
  constructor(public name: string) {}
  greet(phrase: string): void {
    console.log(`class ${phrase} ${this.name}`);
  }
}

let user1 = new Person("Sejune");
user1.name = "Suhyun";
user1.greet("Hi");
