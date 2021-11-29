"use strict";
class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.deque = {};
    }
    /** Add methods */
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        }
        else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.deque[this.lowestCount] = element;
        }
        else {
            for (let i = this.count; i > 0; i--) {
                this.deque[i] = this.deque[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.deque[0] = element;
        }
    }
    addBack(element) {
        this.deque[this.count] = element;
        this.count++;
    }
    /** Remove methods */
    removeFront() {
        if (this.size() < 2) {
            return this.removeBack();
        }
        const result = this.deque[this.lowestCount];
        delete this.deque[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    removeBack() {
        if (this.isEmpty()) {
            return 'Can\'t remove, Deque is empty';
        }
        const result = this.deque[this.count - 1];
        delete this.deque[this.count - 1];
        this.count--;
        return result;
    }
    /** Peek methods */
    peekFront() {
        if (this.isEmpty()) {
            return 'Can\'t peek, Deque is empty';
        }
        return this.deque[this.lowestCount];
    }
    peekBack() {
        if (this.isEmpty()) {
            return 'Can\'t peek, Deque is empty';
        }
        return this.deque[this.count - 1];
    }
    isEmpty() {
        return this.count - this.lowestCount === 0;
    }
    size() {
        return this.count - this.lowestCount;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.deque[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.deque[i]}`;
        }
        return objString;
    }
}
/**Testing Deque Data Structure*/
const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack(1);
deque.addBack(2);
deque.addFront(3);
deque.addFront(5);
deque.addBack(4);
console.log(deque.toString());
console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.removeFront());
console.log(deque.isEmpty());
/**Palindrome checker*/
function palindromeChecker(word) {
    const deque = new Deque();
    let aux = word.toLowerCase().split('');
    aux = aux.filter(a => {
        if (/[A-Za-z]/.test(a)) {
            deque.addBack(a);
            return a;
        }
    });
    while (deque.size() > 1) {
        if (deque.removeFront() !== deque.removeBack()) {
            return `${word} it is not a palindrome`;
        }
    }
    return `${word} is palindrome!`;
}
console.log(palindromeChecker('Repaper'));
console.log(palindromeChecker('Level'));
console.log(palindromeChecker('Noon'));
console.log(palindromeChecker('Nothing'));
console.log(palindromeChecker('Eva, can I see bees in a cave?'));
//# sourceMappingURL=2-deque.js.map