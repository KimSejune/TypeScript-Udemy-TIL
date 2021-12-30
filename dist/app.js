"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Deparment (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const account = new Department("1", "Sejune");
account.addEmployee("A");
account.addEmployee("B");
account.addEmployee("C");
account.describe();
account.printEmployeeInformation();
//# sourceMappingURL=app.js.map