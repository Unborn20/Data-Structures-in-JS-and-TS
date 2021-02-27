interface Person{
	name: string,
	age: number
}

function printName(person: Person){
	console.log(person.name, person.age);
}

const sergio = {name: 'Sergio', age: 20};

printName(sergio);

interface Sum<T>{
    compareTo(b: T): number
}

class MyObject implements Sum<MyObject>{

    public age: number = 0;

    constructor(age: number){
        this.age = age;
    }

    compareTo(b: MyObject){
        if(this.age === b.age){
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}

const mo1 = new MyObject(6);
const mo2 = new MyObject(5);

console.log(mo1.compareTo(mo2));
