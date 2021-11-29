"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1_simple_linked_list_1 = __importDefault(require("./1-simple_linked_list"));
const util_1 = require("./util");
class DoubleLinkedList extends _1_simple_linked_list_1.default {
    constructor(equalsFn = util_1.defaultEquals) {
        super(equalsFn);
    }
}
exports.default = DoubleLinkedList;
// const doubleLinked = new DoubleLinkedList<number>();
// doubleLinked.push(2);
// doubleLinked.push(277);
// doubleLinked.push(528);
// console.log(doubleLinked.getElementAt(1));
// console.log(doubleLinked.getHead());
//# sourceMappingURL=2-double_linked_list.js.map