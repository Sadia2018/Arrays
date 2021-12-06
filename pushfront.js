/*Given an array and an additional value, 
insert this value at the beginning of the array. Do this without using any built-in array methods.*/

const arr = ['First book', 'Second book', 'Third book'];

const arrLength = arr.unshift('item 1', ' item 2');

console.log(arrLength); 
console.log(arr); 

//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
 
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

//Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join()); // Jani,Hege,Stale,Kai Jim,Borge
arr.splice(2, 0, "Lene");
console.log(arr.join());