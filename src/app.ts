type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}

type ElevatedEmployee = Admin & Employee;
const e1: ElevatedEmployee = {
  name: "Sejune",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Sejune", " Kim");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "Sejune",
  job: {
    title: "CTO",
    description: "My own company",
  },
};
console.log(fetchedUserData?.job?.description);

const userInput = "";
const storedData = userInput ?? "DEFAULT";
console.log("storedData :", storedData);

const userInputZero = 0;
const storedDataZero = userInputZero ?? "DEFAULT";
console.log("storedDataZero :", storedDataZero);

const userInputNull = null;
const storedDataNull = userInputNull ?? "DEFAULT";
console.log("storedDataNull :", storedDataNull);

const userInputUndefined = undefined;
const storedDataUndefined = userInputUndefined ?? "DEFAULT";
console.log("storedDataUndefined :", storedDataUndefined);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: ", emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: ", emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("startDate: ", emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a Truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo ...", amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//     default:
//       speed = 0;
//       break;
//   }
//   console.log("Moving at speed: ", speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInputElement = document.getElementById(
// //   "user-input"
// // )! as HTMLInputElement;
// // userInputElement.value = "Hi there!";

// // 느낌표를 사용하고 싶지 않다면
// const userInputElement = document.getElementById("user-input");
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there!";
// }

// interface ErrorContainer {
//   // { email, 'Not a valid email', username: 'Must start with a character!}
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email",
//   username: "Must start with a character!",
// };
