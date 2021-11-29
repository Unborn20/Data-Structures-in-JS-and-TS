"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const node_1 = __importDefault(require("./model/node"));
class LinkedList {
    constructor(equalsFn = util_1.defaultEquals) {
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    push(element) {
        const node = new node_1.default(element);
        let current;
        if (this.head === null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
            //removing first item
            if (index === 0) {
                this.head = current.next;
            }
            else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return;
    }
    getElementAt(index) {
        if (index >= 0 && index <= this.count) {
            let current = this.head;
            for (let i = 0; (i < index && current != null); i++) {
                current = current.next;
            }
            return current;
        }
        return;
    }
    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new node_1.default(element);
            if (index == 0) {
                const current = this.head;
                node.next = current;
                this.head = node;
            }
            else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    indexOf(element) {
        let current = this.head;
        for (let i = 0; (i < this.count && current !== null); i++) {
            if (this.equalsFn(element, current.element)) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.size() === 0;
    }
    getHead() {
        return this.head;
    }
    toString() {
        if (this.head === null) {
            return '';
        }
        else {
            let obtString = `${this.head.element}`;
            let current = this.head.next;
            for (let i = 1; (i <= this.size() && current !== null); i++) {
                obtString = `${obtString}, ${current.element}`;
                current = current.next;
            }
            return obtString;
        }
    }
}
exports.default = LinkedList;
const linkList = new LinkedList();
linkList.push(23);
linkList.push(54);
linkList.push(102);
linkList.insert(777, 1);
linkList.push(67);
console.log(linkList.removeAt(2));
console.log(linkList.getElementAt(1));
console.log(linkList.indexOf(67));
console.log(linkList.toString());
//# sourceMappingURL=1-simple_linked_list.js.map