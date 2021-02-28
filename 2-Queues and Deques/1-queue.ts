class Queue{

	private count: number;
	private	lowestCount: number;
	private queue: any;

	constructor(){
		this.count = 0;
		this.lowestCount = 0;
		this.queue = {};
	}

	public enqueue(element: any){
		this.queue[this.count] = element;
		this.count++;
	}	

	public dequeue(){
		if (this.isEmpty()){
			return 'Can\'t dequeue, queue is empty';
		}
		const result = this.queue[this.lowestCount];
		delete this.queue[this.lowestCount];
		this.lowestCount++;
		return result;
	}

	public peek(){
		if (this.isEmpty()){
			return 'Can\t peek, queue is empty';
		}
		return this.queue[this.lowestCount];
	}

	public isEmpty(){
		return this.count - this.lowestCount === 0;
	}

	public size(){
		return this.count - this.lowestCount;
	}

	public clear(){
		this.count = 0;
		this.lowestCount = 0;
		this.queue = {};
	}

	public toString(){
		if (this.isEmpty()){
			return '';
		}
		let objString = `${this.queue[this.lowestCount]}`;
		for (let i = this.lowestCount + 1; i < this.count; i++){
			objString = `${objString}. ${this.queue[i]}`;
		}
		return objString;
	}

}

/** Testing Queue Data Structure */
const queue: Queue = new Queue();
queue.enqueue('Person 1');
queue.enqueue('Person 2');
queue.enqueue('Person 3');
console.log('Queue is empty?', queue.isEmpty());
console.log('There are currently', queue.size(), 'persons');
const size = queue.size();
for (let i = 0; i < size; i++){
	console.log(queue.dequeue(), 'was attended');
}
console.log('Queue is empty', queue.isEmpty());
console.log(queue.dequeue());

/** Playing Hot Potato*/
function hotPotato(elementList: Array<string>, num: number){
	const queue: Queue = new Queue();
	const eliminatedList = [];

	for (let i: number = 0; i < elementList.length; i++){
		queue.enqueue(elementList[i]);
	}

	while (queue.size() > 1){
		for (let i: number = 0; i < num; i++){
			queue.enqueue(queue.dequeue());
		}
		eliminatedList.push(queue.dequeue());
	}

	return {
		eliminated: eliminatedList,
		winner: queue.dequeue()
	}
}

const result = hotPotato(['Sergio', 'Pepe', 'Alcachofa', 'Susana'], 12);

console.log('-----HOT POTATO GAME-----');
result.eliminated.forEach(name => {
	console.log(`${name} has left`);
});

console.log(`${result.winner} is the winner`);
