"use strict";
var _a;
const e1 = {
    name: "Sejune",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
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
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.description);
const userInput = "";
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log("storedData :", storedData);
const userInputZero = 0;
const storedDataZero = userInputZero !== null && userInputZero !== void 0 ? userInputZero : "DEFAULT";
console.log("storedDataZero :", storedDataZero);
const userInputNull = null;
const storedDataNull = userInputNull !== null && userInputNull !== void 0 ? userInputNull : "DEFAULT";
console.log("storedDataNull :", storedDataNull);
const userInputUndefined = undefined;
const storedDataUndefined = userInputUndefined !== null && userInputUndefined !== void 0 ? userInputUndefined : "DEFAULT";
console.log("storedDataUndefined :", storedDataUndefined);
//# sourceMappingURL=app.js.map