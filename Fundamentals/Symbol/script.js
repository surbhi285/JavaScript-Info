// SYMBOL

let id = Symbol("id");

// symbol are guaranteed to be unique. Even if we create many symbols with exactly same description, they are 
// diferent values

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1===id2)// false

// symbol donot auto-convert into string.

let id3 = Symbol("id");
console.log(id3); // TypeError: cannot convert a symbol value to string

//because strings and symbols are fundamentally different and should not accidentally convert one into another

// someone really want to show symbol, we need to call ".toString()" on it.

let id4 = Symbol("id");
console.log(id4.toString());

// symbol.description property show the description only

//Symbols allow us to create “hidden” properties of an object, that no other part of 
//code can accidentally access or overwrite.

// for eg if we’re working with user objects, that belong to a third-party code. 
//We’d like to add identifiers to them

let user ={
    name: "john"
};
 let id5 = Symbol("id");
 user[id] = 1;
 console.log(user[id]); // 1

 // if we want to use symbol in an object literal {...}, we need square brackets 

 let id6 = Symbol("id");

 let user2 ={
    name:"john",
    [id]: 123 // not "id" because we need the value from variable id as the key, not the string "id"
 };

 // Symbolic properties donot participate in for...in loop

 let id7 = Symbol("id");
 let user1 = {
    name: "John",
    age: 30,
    [id]: 123
 };
 for(let key in user1){
    console.log(key); // output -> name , age not symbol
 }
 // we need to access symbol directly
 console.log(user1[id]); // 123

 // Object.keys(user) also ignores Symbol. That’s a part of the general “hiding symbolic properties” principle

 // Object.assign() copies both string and symbol properties

 let id8 = Symbol("id");
 let user3 ={
    [id] : 123,
 };
 let clone = Object.assign({}, user3);

 console.log(clone[id]); // 123

