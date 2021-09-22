class StackObjectBased<T>{
	
	private count: number;
	private stack: any;

	constructor(){
		this.count = 0;
		this.stack = {}
	}

	public push(element: T){
		this.stack[this.count] = element;
		this.count++;
	}

	public pop(){
		if(this.isEmpty()){
			return 'Can\'t pop, Stack is empty';
		}
		this.count--;
		const result = this.stack[this.count];	
		delete this.stack[this.count];
		return result;
	}

	public peek(){
		if (this.isEmpty()){
			return 'Can\'t peek, Stack is empty';
		}
		return this.stack[this.count - 1];
	}

	public isEmpty(){
		return this.count < 1;
	}

	public size(){
		return this.count;
	}

	public clear(){
		this.count = 0;
		this.stack = {};
	}

	public toString()	{
		if	(this.isEmpty())	{
				return	'';
		}
		let	objString: string	=	`${this.stack[0]}`;
		for	(let i:number =	1; i < this.count; i++)	{	
				objString = `${objString},${this.stack[i]}`;
		}
		return	objString;
	}

}

function decimalToBinary(decNumber: number){
	const stack: StackObjectBased<number> = new StackObjectBased<number>();
	let number: number = decNumber;
	let rem: number;
	let binaryString: string = '';

	while(number > 0){
		rem = Math.floor(number % 2);
		stack.push(rem);
		number = Math.floor(number / 2);
	}

	while(!stack.isEmpty()){
		binaryString += stack.pop();
	}

	return binaryString;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(233));
console.log(decimalToBinary(1000));
