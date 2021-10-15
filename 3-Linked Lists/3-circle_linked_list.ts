import LinkedList from "./1-simple_linked_list.ts";
import {defaultEquals} from './util.ts';

export default class CircleLinkedList<T> extends LinkedList<T>{
    constructor(equalsFn: Function = defaultEquals){
        super(equalsFn);        
    }
}