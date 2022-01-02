abstract class Department {
  // Field Area
  // private readonly id: string;
  // public name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];
  // Constructor Area
  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  // Method Area
  // Param에 this: Department를 추가한다.
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID : " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastRepost: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastRepost) {
      return this.lastRepost;
    }
    throw new Error("No Report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastRepost = reports[0];
  }

  static getInstance() {
    // 1번만 사용된다.
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  // override
  describe() {
    console.log("Accounting Department - ID : " + this.id);
  }

  // override
  addEmployee(name: string): void {
    if (name === "Sejune") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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

// itCount.employees[2] = "F"; // employees를 public으로 두면 이렇게 직접 변경이 가능하다.
itCount.describe();
itCount.printEmployeeInformation();
// const accountingCopy = { name: "test", describe: account.describe };
// accountingCopy.describe();

// const accounting = new AccountingDepartment("d2", []);
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
