/*------ STRING CONVERSION-----
Use the String(value) function to convert a value to string */

let value = true;
alert(typeof value)  // Boolean

value = String(value);
alert(typeof value) // String

/* ----- NUMBER CONVERSION------
Use the Number(value) funtion to convert a value to number */

let str = "123"
alert(typeof str) //string

let num  = Number(str)
alert(typeof num) // number

// if string is not valid number then while conversion it return NaN

let age = Number("this is not valid number")
alert(age) // NaN

// so if we convert undefined it give NaN, null will be 0, true and false will 1 and 0 respectively.

/* -------BOOLEAN CONVERSION ------
Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true  */

alert(Boolean(1)); // true
alert(Boolean(0)); // false
alert(Boolean ("hello")); // true
alert(Boolean("")); // false (without space)
alert(Boolean(" ")); // true (with space)
alert(Booolean("0")); // true

