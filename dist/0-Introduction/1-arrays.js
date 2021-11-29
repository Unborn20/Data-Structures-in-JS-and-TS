"use strict";
// Using arrays
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.map((a) => a * 2);
const arrFiltered = arr.filter(a => (a % 2) == 0);
const sumAll = arrFiltered.reduce((previous, current) => previous + current);
const isEven = arr.some(a => (a % 2) === 0);
const evens = Array.from(arr, x => (x % 2) === 0);
arr.push(12);
arr.pop();
//console.log(arr);
//console.log(newArr);
//console.log(arrFiltered);
//console.log(sumAll);
//console.log(isEven);
//console.log(evens);
// Property iterator
const iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// Entries
const entries = arr.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
// Keys
const keys = arr.keys();
console.log(iterator.next());
//Values
const values = arr.values();
console.log(iterator.next());
// Sorting strings
const names = ['Sergio', 'Pepe', 'Ana', 'Annie', 'Mikasa'];
const namesSorted = names.sort((a, b) => a.localeCompare(b));
console.log(namesSorted);
//# sourceMappingURL=1-arrays.js.map