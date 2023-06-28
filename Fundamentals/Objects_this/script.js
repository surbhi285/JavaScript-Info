//--------> Method -> A function that is property of an object is called its method 
let user ={
    name: "John",
    age:30, 
};
user.sayHi=function(){
    console.log("Hello");
};
user.sayHi(); //Hello
// in above eg we used function expression to create function and 
//assign it to the property user.sayHi of the object here we got method say.Hi of the object user

// we can use a pre-declared function as method 
let user1={
    name:"john"
}
user1.sayHi=function(){
    console.log("hello");
};
user1.sayHi(user.sayHi);

/* we can also write method lie 
user={
 sayHi(){
console.log("hello")
}
};    */


//--------> "this" in methods

/* to acces the  object, a method can be used "this" keyword. */

// the value of this is the object "before dot", the one used to call method

let user2 ={
    name:"john",
    age:30,

sayHi() {
console.log(this.name); // "this" is the "current object"
}
};
user2.sayHi(); // john

// it ia also possible to calling the name without "this" keyword by referencing it via the outer variable

let user3 ={
    name:"john",
    age:30,

sayHi(){
    console.log(user.name);// here we use user instead of this
}
}
user3.sayHi(); // john

// but using object name instead of this is unrelaible. suppose if we decide to copy user to another varible 
// eg admin=user and overwrite user with something else then it will give error. See the below eg

// let user4={
//     name:"john",
//     age:30,

// sayHi(){
//     console.log(user4.name); // leads to an error // so if we use "this" instead of user4 then code will work
// }
// };
// let admin =user4;
// user4=null;// overwrites user
// admin.sayHi(); // // TypeError: Cannot read property 'name' of null

//----------> "this" is not bound
//1-> it can be used in any function even if its not a method of an object
// calling "this" without an object
function say(){
    console.log(this)
}
say(); // it give golobal object -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// the value of this is evaluated during run-tim, depending on the context.
// "this" has no value until the function is called

let user5 ={name:"john"};
let admin = {name: "ann"};

function sayHi(){
    console.log(this.name);
}
// use the same function in two obj
user5.f=sayHi;
admin.f=sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user5.f(); // john (this==user)
admin.f(); // ann (this==admin)

admin['f']();// ann (dot or square brackets acces the method - doesnt matter)
// the rule is simple if obj.f() is called, then "this" is "obj" during the call "f". 

// NOTE -> In JS "this" is free, its value is evaluated at call-time and doesnot depend on where the method
//was declared , but rather on what object is "before the dot"


// -------> Arrow function have no "this"
/*Arrow function  are special: they dont have their "own" this. if we reference this 
from such a function it taken from the outer "normal" function
in arrow function we cant have separate "this" */

let user6={
    name: "ram",
    sayHi(){
        let arrow =()=>
        console.log(this.name)
        arrow();
        }
    };
    user6.sayHi();// ram


    //-------Some Example
    //1->
    // function makeUser(){
    //     return{
    //         name: "john",
    //         ref:this
    //     };
    // }
    // let userEg = makeUser();
    // console.log(userEg.ref.name)//Error
    /* because the value of "this" inside the makeUser() is undefined, because it is called as a function
    not as method with "dot" syntax */
    // to make it write

    function makeUser(){
        return{
            name: "john",
            ref(){
                return this;
        }
    }
};
    let userEg = makeUser();
    console.log(userEg.ref().name)// john
    //Now it works, because user.ref() is a method. And the value of this is set to the object before dot .