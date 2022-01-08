"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
    }
    greet(phrase) {
        console.log(`class ${phrase} ${this.name}`);
    }
}
let user1 = new Person("Sejune");
user1.name = "Suhyun";
user1.greet("Hi");
//# sourceMappingURL=app.js.map