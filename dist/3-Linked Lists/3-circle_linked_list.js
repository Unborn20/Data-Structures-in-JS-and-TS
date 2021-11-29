"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1_simple_linked_list_1 = __importDefault(require("./1-simple_linked_list"));
const util_1 = require("./util");
class CircleLinkedList extends _1_simple_linked_list_1.default {
    constructor(equalsFn = util_1.defaultEquals) {
        super(equalsFn);
    }
}
exports.default = CircleLinkedList;
//# sourceMappingURL=3-circle_linked_list.js.map