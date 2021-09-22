import {defaultEquals} from './util.ts';
import Node from './model/node.ts';

export default class LinkedList<T>{

    count : number;
    head : any;
    equalsFn: Function;

    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }

    push(element: T){
        const node: any = new Node<T>(element);
        let current: any;
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

    removeAt(index: number){
        if(index >= 0 && index < this.count){
            let current : any = this.head;
            //removing first item
            if(index === 0){
                this.head = current.next;
            }else{
                let previous: any;
                for(let i: number = 0; i < index; i++){
                    previous = current;
                    current = current.next;
                }
                // link previous with current's next: skip it to remove
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return;
    }

    getElementAt(index: number){
        if(index >= 0 && index <= this.count){
            let node: any = this.head;
            for(let i:number = 0; (i < index && node != null); i++){
                node = node.next;                
            }
            return node;
        }
        return;
    }

}

const linkList = new LinkedList<number>();
linkList.push(23);
linkList.push(54);
linkList.push(102);
console.log(linkList.removeAt(1));
console.log(linkList.getElementAt(1));