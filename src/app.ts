class Department {
  // Field Area
  name: string;
  private employees: string[] = [];
  // Constructor Area
  constructor(n: string) {
    this.name = n;
  }

  // Method Area
  // Param에 this: Department를 추가한다.
  describe(this: Department) {
    console.log(`Deparmnet: ${this.name}`);
  }

  addEmployee(employee: string) {
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

// account.employees[2] = "F"; // employees를 public으로 두면 이렇게 직접 변경이 가능하다.
account.describe();
account.printEmployeeInformation();
// const accountingCopy = { name: "test", describe: account.describe };
// accountingCopy.describe();
