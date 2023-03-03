// An array is an ordered collection of data. The data can either be primitive or an object.

let myMantra =["eat","sleep", "repeat"];
console.log(myMantra)

let myFamily =["mom", "dad" , "grandma" , "grandpa" ,"brother"];
console.log(myFamily[2])
// arrays always start at 0//
// when targeting a specfic item in an array, it always starts at 0//
let num20s =[20,40,60,80,100]
console.log(num20s)
console.log(num20s[4])

//JavaScript's push() method appends an item to the end of an array. Here, the number 4 is appended to the end of the array, changing the number of array elements from three to four:

var items = [1, 2, 3];

items.push(4);

console.log(items);
// [1, 2, 3, 4]

//If you were to assign the return value of the push() method, the output would be slightly different, displaying the item that was appended to the end of the array instead of all the elements:

var items = [1, 2, 3];

var result = items.push(4);

console.log(result );
// 4 

