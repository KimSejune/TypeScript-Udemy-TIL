"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`Deparmnet: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const account = new Department("Sejune");
account.addEmployee("A");
account.addEmployee("B");
account.addEmployee("C");
account.describe();
account.printEmployeeInformation();
//# sourceMappingURL=app.js.map