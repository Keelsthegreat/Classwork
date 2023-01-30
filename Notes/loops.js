// // Loops
// iterators are how you declare the value.
// Example:
// i = 2 (any vaule can be placed)
// a sequence of instructions that are repeated for either certain number of times or until a condition is met 
// for(let 1 = 0; i <10; i++) {
//     console.log(i);
// }

// -----------------------------------------------------------------------

// let j = 98
// for(let i=99; i > 0; i--)
//  {j=i-1
//     console.log(`${i},"Bottles of cream soda on the wall, ${i}, bottles of cream soda. Take one down and pass it around, ${j}, bottles of cream soda on the wall."`)
// }

// % remainer operator

// While loop - as long as condition is true the code is executed.
// integers=3
// while (integers<= 35) {
//     console.log(integers)
//     integers+=3
// } 

// int = 5
// while (int <= 100) {
//     console.log(int)
//     int+=5
// }

let numArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let i= 0;
while (i < numArr.length) {
    if (i % 2 == 0 ) {
    console.log(i*3);
}  
i += 1;
}
 //functions
 //a block of code enclosed in braces {} is used when the 
//declarative
// with parameter - when function is being declared
// function printMyName(name) {
//     console.log(`My name is ${name}`)
// }

// arrow functions
// const printMyName (name,age)=> 
// {console.log("hi my name really is", name)
//     console.log("Hi my age is",age) }



// //arguments = when functions are already declared
// printMyName("Akili")

//  (x+y+z+w)

// const doMath= (x,y) => {
//     console.log("addition",x+y)
//     console.log("subtraction",x-y)
//     console.log("multiply", x*y)

// }
// doMath= (12,22)
// //----------------------------------------------
// const add = (x,y) => {
//     console.log("addition",x+y)
// }

// const subtract = (x,y) => {
//     console.log("subtraction",x-y)
// }

// const doAllMath = ()=> {
//     add
//     subtract
// }
