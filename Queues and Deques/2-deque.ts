class Deque{

	private count: number;
	private lowestCount: number;
	private deque: any;

	constructor(){
		this.count = 0;
		this.lowestCount = 0;
		this.deque = {};
	}

	/** Add methods */
	public addFront(element: any){
		if (this.isEmpty()){
			this.addBack(element);
		}else if (this.lowestCount > 0){
			this.lowestCount--;
			this.deque[this.lowestCount] = element;
		}else{
			for (let i = this.count; i > 0; i--){
				this.deque[i] = this.deque[i - 1];
			}
			this.count++;
			this.lowestCount = 0;
			this.deque[0] = element;
		}
	}
	
	public addBack(element: any){
		this.deque[this.count] = element;
		this.count++;
	}

	/** Remove methods */
	public removeFront(){
		if(this.size() < 2){
			return this.removeBack();
		}	
		const result = this.deque[this.lowestCount];
		delete this.deque[this.lowestCount];
		this.lowestCount++;
		return result;
	}	

	public removeBack(){
		if (this.isEmpty()){
			return 'Can\'t remove, Deque is empty';
		}	
		const result = this.deque[this.count-1];
		delete this.deque[this.count-1];
		this.count--;
		return result;
	}

	/** Peek methods */
	public peekFront(){
		if (this.isEmpty()){
			return 'Can\'t peek, Deque is empty';
		}
		return this.deque[this.lowestCount];
	}

	public peekBack(){
		if (this.isEmpty()){
			return 'Can\'t peek, Deque is empty';
		}		
		return this.deque[this.count-1];
	}

	public isEmpty(){
		return this.count - this.lowestCount === 0;
	}

	public size(){
		return this.count - this.lowestCount;
	}

	public toString(){
		if (this.isEmpty()){
			return '';
		}
		let objString = `${this.deque[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; i++){
			objString = `${objString}, ${this.deque[i]}`;
		}
		return objString;
	}

}

const deque: Deque = new Deque();

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
