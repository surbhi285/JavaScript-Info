// ---- FUNCTION DECLARATION ----//
function sayHi(){
    alert("hello");
}
sayHi(); 

//-----FUNCTION EXPRESSION-----//
/* It allows us to create a new function int the middle of any expression 
The function creation happens in the context of the assignment expression (to the right side of =),
this is Function Expression */

let say = function(){
    console.log("Hello");
}; // here we can see a variable "Say" getting a value , the new function, created as function();

// ---we can copy function to another variable--- //

function message(){    // here function declaration creates the function and put it into variable"message"
    console.log("hii")
}

let func = message; // here we are copying the above function into variable func 
//let func = message () -> by this we would write the "result of the call message()" into the function,
//not the function message itself.

func(); // hii -> run the copy 
message(); // hii -> this still works too 

//-----for the above code we could have use function expression----//

let message1 = function(){ // create
    console.log("Hello");
};
let func1 = message1; // copy

func1(); // hello
message1(); // hello


//-----CALLBACK FUNCTION---------//
/* A function is a function passed into another function as an argument, which is then invoked
inside the outer function to complete some kind of action */

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}
function showOk(){
    alert("you agreed");
}
function showCancel(){
    alert("you cancel");
}
ask ("do you agree?", showOk, showCancel);  
//The arguments "showOk" and "showCancel" of "ask" are called callBack functions or just callbacks
// the idea is that we pass a function or expect it to be "called back" later if necessary 
// in above case "showOk" becomes the callBack for "yes" and "showCancel" for "no" answer.

// above code written by function expression //
function ask(question, yes, no){
    if(confirm (question)) yes()
    else no();
} 
ask(
    "Do you agree?",
    function () { alert("you agreed"); },
    function() {alert ("you cancelled");}   
);


//==== FUNCTION EXPRESSION VS FUNCTION DECLARATION ====//

// FUNCTION DECLARATION -> a function, declared as a separate statement//
function sum(a,b){
    return a+b;
}

// FUNCTION EXPRESSION -> a function, created inside an expression or inside another syntax construct//
let sum = function(a, b){
    return a+b;
}

/* function expression is created when the execution reaches it and is usable only for the moment
but function declaration can be called earlier than it is defined.  when javaScript prepares to run 
the script it first looks for global function declaration in it and creates function and then code 
execute*/

sayHI ("John"); // hello John
function sayHI(name){
    console.log('hello, ${name}');
}
// above eg The Function Declaration sayHI is created when JavaScript //
//is preparing to start the script and is visible everywhere in it.//   

sayHi2("John"); // error
function sayHi2(name){
    console.log('hello, ${name}');
}
// it wouldn' work in function expression . Function Expressions are created when the execution reaches it.//
//That would happen only in the line (96). Too late.

