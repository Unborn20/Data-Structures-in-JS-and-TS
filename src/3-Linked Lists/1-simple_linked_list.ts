import {defaultEquals} from './util';
import Node from './model/node';

export default class LinkedList<T> {
    
    private count : number;
    private head : any;
    private equalsFn: Function;

    constructor(equalsFn : Function = defaultEquals){
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }

    public push(element: T){
        const node = new Node<T>(element);
        let current : Node<T>;
        if(this.head === null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    }

    public removeAt(index: number){
        if(index >= 0 && index < this.count){
            let current : Node<T> = this.head;
            //removing first item
            if(index === 0){
                this.head = current.next;
            }else{
                const previous : any = this.getElementAt(index - 1);
                current = previous.next;
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return;
    }

    public getElementAt(index: number){
        if(index >= 0 && index <= this.count){
            let current : Node<T> = this.head;            
            for(let i : number = 0; (i < index && current != null); i++){                
                current = current.next;
            }
            return current;
        }
        return;
    }

    public insert(element: T, index: number) : boolean{
        if(index >= 0 && index <= this.count){
            const node = new Node<T>(element);
            if(index == 0){
                const current = this.head;
                node.next = current;
                this.head = node;
            }else{
                const previous : any = this.getElementAt(index - 1);                
                const current : Node<T> = previous.next;
                node.next = current;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    public indexOf(element : T){
        let current = this.head;
        for(let i : number = 0; (i < this.count && current !== null); i++){
            if(this.equalsFn(element, current.element)){
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    public remove(element : T){
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    public size() : number{
        return this.count;
    }

    public isEmpty() : boolean{
        return this.size() === 0;
    }

    public getHead(){
        return this.head;
    }

    public toString(){
        if(this.head === null){
            return '';
        }else{
            let obtString = `${this.head.element}`;
            let current = this.head.next;
            for(let i : number = 1; (i <= this.size() && current !== null); i++){
                obtString = `${obtString}, ${current.element}`;
                current = current.next;
            }
            return obtString;
        }
    }
}

const linkList = new LinkedList<number>();
linkList.push(23);
linkList.push(54);
linkList.push(102);
linkList.insert(777, 1);
linkList.push(67);
console.log(linkList.removeAt(2));
console.log(linkList.getElementAt(1));
console.log(linkList.indexOf(67));
console.log(linkList.toString());