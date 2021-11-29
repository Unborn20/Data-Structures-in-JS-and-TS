import LinkedList from "./1-simple_linked_list";
import {defaultEquals} from './util';

export default class DoubleLinkedList<T> extends LinkedList<T>{
    constructor(equalsFn: Function = defaultEquals){
        super(equalsFn);        
    }
}

// const doubleLinked = new DoubleLinkedList<number>();
// doubleLinked.push(2);
// doubleLinked.push(277);
// doubleLinked.push(528);
// console.log(doubleLinked.getElementAt(1));
// console.log(doubleLinked.getHead());
