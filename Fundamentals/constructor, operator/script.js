// the regular{..} syntax allows us to create one object but often we need to create simliar objects, 
// like multiple users or menu items and so on. for this we can use contructor function and new keyword.

//--------------CONSTRUCTOR FUNCTION
// Technically they are regular function. There are two convention though:
//1-> they are named with capital letter first
//2-> they should be excuted only with "new" operator

function User(name){
    this.name=name;
    this.isAdmin=false;
}
let user = new User("jack");
let anotherUser = new User("ann");
let otherUser = new User("sia")

console.log(user.name); // jack
console.log(user.isAdmin);// false
console.log(anotherUser.name);//ann
console.log(otherUser.name);//sia

// when function is executed with new it does the following step;
//1-> a new empty object is created and assigned to "this"
//2-> The function body executes. Usually it modifies "this", adds new properties to it
//3-> The value of "this" is returned.

/* so new User(.. .) works like this

function User(name){
    // this ={} (implicitly)
    // add properties to "this"
    this.name = name;
    this.admin = admin;

   // return(this);(implicitly)
} */

// so we want to creater other users, we can call new User("ann"), new user("alice") and so on.

// NOTE -> so technically any function (except arrows functions, as they dont have "this") can be use as 
// constructor. It can be run with new, it will execute algorithm above. The capital letter first is common
//agreement. to make it clear that function is to be run with new.


//----------->new function()
// if we have many lines of code all about creation of single complex object, we can wrap tham in an immediately
//called constructor function, for eg

let user1 = new function(){ // creating function and immediately call it with new
    this.name=name;
    this.isAdmin=false;
};
// but this constructor function cant be called again because it is not saved anywhere, just created and called.

//----------->new.target
// inside function we can check whether it was called with new or without it using new.target

function see(){
    console.log(new.target);
}
see(); // it give undefined

new see(); 
/* output of new see() =>
 ƒ see(){
    console.log(new.target);
} */

// function User(name){
//     this.name = name;
// }
// let john = User("john");
// console.log(john.name); // it is giving error 

//now in above code if we add new
function UserNew(name){
if(!new.target){ // if it run without new
    return new UserNew(name); // add new 
}
this.name =name;
}
let joe = UserNew("joe");
console.log(joe.name); // joe


///------------>Return from constructor
/* ususally constructor dont have return statement. Their task is to write all necessary stuff into "this"
and it will automatically become result.
so if it is result statement, the the rule is simple
1-> if return is called with an object then the object is returned instead of "this"
2-> if return is called with primitive then it is ignored.
*/

// In below eg return overrides this by returning an object
function BigUser(){
    this.name="john";
    return{name:"ram"}; // <----return this object
}
console.log(new BigUser().name); // ram got that object

// and with empty return

function SmallUser(){
    this.name="john";
    return;
}
console.log(new SmallUser().name);// john

// Method in constructor
// we can add "this" to method also

function foo(name){
    this.name = name; // properties
    this.isAdmin = true;

    this.sayHi = function(){ // method
        console.log("My name is: "+ this.name);
    };
}
let john = new foo("john");
john.sayHi();
