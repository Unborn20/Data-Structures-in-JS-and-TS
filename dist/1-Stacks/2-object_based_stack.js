"use strict";
class StackObjectBased {
    constructor() {
        this.count = 0;
        this.stack = {};
    }
    push(element) {
        this.stack[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {
            return 'Can\'t pop, Stack is empty';
        }
        this.count--;
        const result = this.stack[this.count];
        delete this.stack[this.count];
        return result;
    }
    peek() {
        if (this.isEmpty()) {
            return 'Can\'t peek, Stack is empty';
        }
        return this.stack[this.count - 1];
    }
    isEmpty() {
        return this.count < 1;
    }
    size() {
        return this.count;
    }
    clear() {
        this.count = 0;
        this.stack = {};
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.stack[0]}`;
        for (let i = 1; i < this.count; i++) {
            objString = `${objString},${this.stack[i]}`;
        }
        return objString;
    }
}
function decimalToBinary(decNumber) {
    const stack = new StackObjectBased();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number / 2);
    }
    while (!stack.isEmpty()) {
        binaryString += stack.pop();
    }
    return binaryString;
}
console.log(decimalToBinary(10));
console.log(decimalToBinary(233));
console.log(decimalToBinary(1000));
//# sourceMappingURL=2-object_based_stack.js.map