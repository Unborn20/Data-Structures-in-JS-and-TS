import {defaultEquals} from './util';
import Node from './model/node';

export default class LinkedList{

    count : number;
    head : any;
    equalsFn: Function;

    constructor(equalsFn = defaultEquals){
        this.count = 0;
        this.head = undefined;
        this.equalsFn = equalsFn;
    }

    push(element){
        const node: Node = new Node(element);
        let current: Node;
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

    

}