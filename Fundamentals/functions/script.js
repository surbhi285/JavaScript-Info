// ---to declare function---

function message(){  // function keyword goes first and then name of function
    console.log("Hello everyone!")// called as function body
}
message(); //this call executes the code of function

/* ----Local variable---
A variable declared inside the function is only visible inside that function */

function message1 (){
    let say = "hello everyone its javascript"
    console.log(say);
}
message1 (); // "hello everyone its javascript"
console.log(say); // error

/* -----Outer variable ----
Function can acces an outer variable as well */

let userName = "John";
function message3(){
    let say1 = 'Hello'+ userName;
    console.log(say1);
}
message3(); // Hello John

/* Not only function have access to outer variable but it can also modify it */

let userName1 = "John";
function message4(){
    userName1="Bob"; // change the outer variable
    let say2 = "Hello" + userName1;
    console.log(say2);
}
console.log(userName1); // John -> before function call
message4();
console.log(userName1); // Bob -> after function call as username value modified

// if same-named variable is declared inside the function then it shadows the outer-one//

let user = "John";
function message5(){
    let user = "Bob"
    let say3 = "hello"+ user;
    console.log(say3);
}
message5(); // hello Bob -> function will create and use it own user
console.log(user); // John -> function didnot access the outer variable.

/*------Parameter -----
we can pass arbitary data to function using parameters */

function mess(from, text){ //Parameters : from, text
    console.log(from+':'+text);
}
mess('Ann', 'Hello'); //Ann: Hello -> these value is copies to from and text then function execute it
mess("hey", "whatsup");// hey: whatsup

// Another Example -> here function is declared with two parameters, then called with 
// two arguments : from and hello 
function messages(from, text){ // two parameters 
from ="*"+from+"*" // putting star before and after from
console.log(from+':'+text); 
}
let from ="ann";
messages(from, Hello);// *Ann* : hello  --- called with two arguments from and hello

// the value of "FROM" is the same, the function modified the local copy
alert(from); // Ann


/*------Default value -----
if function is called but argument is not provided then corresponding value become undefined----*/

function value(from, text){
    console.log(from+":"+text);
}
value("ann"); // ann: undefined -> as value of text not passed so it becomes undefined

// we can specify the so-called "default" value for parameter in the function declaration, using = //

function value1(from, text="no argument passed"){
    console.log(from+":"+text);
}
value1("ann"); // ann : no argument passed

// suppose in argument we write "undefined" then also default values jumps in //

value1("ann", undefined) // ann : no argument passed

function showMessage(from, text=anotherfunction()){
    // anotherfunction() only execute if no text given
    //its result become the value of text
}// so in this example anotherfunction isn't called at all , if the text parameter is provided
//on the otherhand, its independently called every time when text is missing.


/* ---- Alternative default parameter ----
we can check if parameter is passed during the function execution, by comparing it with undefined. */

function alternative(text){
    if (text===undefined){ // if parameter is missing
         text='empty message';
    }
        console.log(text);
}
alternative(); // empty message 

/* -----nullish coalescing operator "??" ---*/
function showCount(count){
    console.log(count??"unknown")// if count is undefined or null , print unknown
}
showCount(0); // 0
showCount(null); //unknown
showCount()// unknown

/* ----Returning Value ----
A function can be return a value back into calling code as the result */

function sum(a, b){
    return a+b;
}
let result = sum(1, 2);
console.log(result); // 3
//The directive return can be in any place of the function. When the execution reaches it, the function 
//stops, and the value is returned to the calling code (assigned to result above).

function checkAge(age){
    if(age>=18){
        return true;
    }else{
        return false;
    }
}
    let age = 27;
    if(checkAge(age)){
        console.log('Acces granted');
    }else{
        console.log('Access denied');
    }

    // it is possible to use return without a value //

    function showMovie(age){
        if(!checkAge(age)){
            return;
        }
        console.log("showing an movie")
    }// in this eg, if checkAge(age) return false , then show Movie wont proceed to the alert


    // if a function doesnot return value , it is as same as if it returns undefined
    function doNothing(){
       // empty
    }
    console( doNothing()===undefined); // true

    // Empty return is also same as return undefined
    function doNothing(){
        return;
    }
    console.log(doNothing()===undefined); // true