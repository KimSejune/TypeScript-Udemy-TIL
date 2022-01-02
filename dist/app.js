"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT Department - ID : " + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastRepost = reports[0];
    }
    get mostRecentReport() {
        if (this.lastRepost) {
            return this.lastRepost;
        }
        throw new Error("No Report found.");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log("Accounting Department - ID : " + this.id);
    }
    addEmployee(name) {
        if (name === "Sejune") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastRepost = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Static Create");
console.log(employee1);
console.log(Department.fiscalYear);
const itCount = new ITDepartment("3", ["Sejune"]);
itCount.addEmployee("A");
itCount.addEmployee("B");
itCount.addEmployee("C");
console.log(itCount);
itCount.describe();
itCount.printEmployeeInformation();
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "Something Test";
accounting.addReport("Something");
accounting.addEmployee("Sejune");
accounting.addEmployee("Suhyun");
accounting.printReports();
accounting.printEmployeeInformation();
accounting.describe();
console.log(accounting.mostRecentReport);
//# sourceMappingURL=app.js.map