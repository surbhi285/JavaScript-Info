// -----------ARROW FUNCTION-------//
// Allows us to write shorter function syntax.

let sum =(a,b) => a+b;
/* this arrow function is shorter form of :
let sum = function (a, b){
    return a+b;
}; */
console.log(sum(1, 2)); //3

// if we have only one argument then 
let double = n =>n*2;
// it is same as let double = function(n) {return n*2}
console.log(double(3)); //6

// if there are no arguments, parentheses are empty, but they must be present

let say = () => console.log("Hello")
say();

//----Multiline arrow function 
/* in multiple expression and statements case we can enclose them in curly braces.
The major difference is that curly braces require a return within them to return a value */

let sum1= (a,b) =>{ // the curly braces open  a multiline
    let result = a+b;
    return result; // if we use curly braces then we need return 
};
console.log(sum(1, 2));