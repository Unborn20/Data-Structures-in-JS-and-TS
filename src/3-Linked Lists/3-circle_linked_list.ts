import LinkedList from "./1-simple_linked_list";
import {defaultEquals} from './util';

export default class CircleLinkedList<T> extends LinkedList<T>{
    constructor(equalsFn: Function = defaultEquals){
        super(equalsFn);        
    }
}