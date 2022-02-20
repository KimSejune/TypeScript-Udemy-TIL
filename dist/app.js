"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log("Rendering logger");
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log("TEMPLATE FACTORY");
    return function (constructor) {
        console.log("Rendering template");
        const p = new constructor();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
    }
};
Person = __decorate([
    Logger("LOGGING"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
const person = new Person();
console.log(person);
function Log(target, propertyName) {
    console.log("Property decorator!");
    console.log(target, propertyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error("Invalid Prive - should be positive!");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log
], Product.prototype, "_price", void 0);
__decorate([
    Log
], Product.prototype, "price", null);
__decorate([
    Log
], Product.prototype, "getPriceWithTax", null);
//# sourceMappingURL=app.js.map