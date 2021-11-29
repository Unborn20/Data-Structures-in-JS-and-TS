// ADT Stack implemented in TS
class Stack<T>{

	private stack: Array<T>;

	public constructor(){
		this.stack = [];
	}

	public push(element: any){
		this.stack.push(element);
	}

	public pop(){
		if (this.stack.length < 1){
			return 'Can\'t pop, Stack is empty';
		}
		return this.stack.pop();
	}

	public peek(){
		if (this.stack.length < 1){
			return 'Can\'t peek, Stack is empty';
		}
		return this.stack[this.stack.length - 1];
	}

	public isEmpty(){
		return this.stack.length < 1;
	}	

	public size(){
		return this.stack.length;
	}

	public clear(){
		this.stack = [];
	}

}

const stack: Stack<number> = new Stack<number>();

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
