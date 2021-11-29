"use strict";
function printName(person) {
    console.log(person.name, person.age);
}
const person = { name: 'Sergio', age: 20 };
printName(person);
class MyObject {
    constructor(age) {
        this.age = 0;
        this.age = age;
    }
    compareTo(b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}
const mo1 = new MyObject(6);
const mo2 = new MyObject(5);
console.log(mo1.compareTo(mo2));
//# sourceMappingURL=0-interfaces.js.map