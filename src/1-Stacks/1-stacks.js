// ADT Stack implemented in TS
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (element) {
        this.stack.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.stack.length < 1) {
            return 'Can\'t pop, Stack is empty';
        }
        return this.stack.pop();
    };
    Stack.prototype.peek = function () {
        if (this.stack.length < 1) {
            return 'Can\'t peek, Stack is empty';
        }
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length < 1;
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    Stack.prototype.clear = function () {
        this.stack = [];
    };
    return Stack;
}());
var stack = new Stack();
//Push
stack.push(3);
stack.push(6);
stack.push(9);
stack.push(12);
//Pop
console.log(stack.pop(), 'element was removed from Stack');
//Peek
console.log('Now the top element in the Stack is', stack.peek());
//Is Empty
console.log('Stack is empty?', stack.isEmpty());
//Size 
console.log('Stack size:', stack.size());
//Clear
stack.clear();
console.log(stack.pop());
console.log('Stack is empty?', stack.isEmpty());
