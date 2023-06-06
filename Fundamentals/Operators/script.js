/* The unary negation - reverses the sign of a number: */
let x = 1;
x = -x;
alert(x); //-1, unary negation was applied

/* if any of the operands is a string then other one is converted to string too */
alert('1'+2) // "12"
alert(2+2+'1') // "41" -> The first two is number so they are added then third is string so it will concatenate

/* Unary plus (+) if operand is not number then adding unary plus before string converts it to number 
Why are unary pluses applied to values before the binary ones? 
As we’re going to see, that’s because of their higher precedence.*/

let apples = "2";
let oranges = "3";
alert(apples+oranges) ; // "23" it is string we can't add

alert(+apples + +oranges); // 5 here adding +before apples and oranges convert them in number

/* Increment/ Decrement 
Increment/decrement can only be applied to variables. 
Trying to use it on a value like 5++ will give an error. */

let counter1 =2;
let counter2 =2;
counter1++; // postfix, it also increase the value but first return old value
++counter2; // prefix, it increase first then return value
alert(counter1); //2
alert(counter2); //3

let counter3 = 2;
let counter4 = 2;
counter3--;
--counter4;
alert(counter3) // 2
alert(counter4)//1


/* ------Some Question---- */

alert(""+1+0) // "10" -> addition with string ""+1 converts "1" then "1"+0 = "10"

alert(""-1+0) // -1 -> subtraction only works with number it converts empty string "" to 0

alert(true+false) // 1 -> as true is 1 and false is 0 so 0+1 is 1

alert(6/"3") // 2 -> division also works with number onlu=y so it convert 3 to number

alert("2"*"3") //6

alert(4+5+"px") // "9px"

alert ("$"+4+5) //"$45"

alert("4"-2) //2

alert("4px"-2)//NaN -> as subtraction work with number and 4px is not valid number

alert(" -9 "+5) // " -9 5" -> addition with a string appends the number 5 to the string.

alert(" -9 " -5 )// -14 ->subtraction always converts to numbers, so it makes " -9 " a number -9.

alert(null+1)//1 -> null becomes 0 after the numeric conversion.

alert(undefined+1) // NaN ->undefined becomes NaN after the numeric conversion.

alert(" \t \n" - 2 ) //-2 ->\t and \n considered as 0 so 0-2 =-2




