// objects are used to store keyed collections of various data and more complex entities

// a property is "key:value" pair where key is string(also called "property name") and value can be anything

//Object can be creted by two ways
// 1-> way
// let user = new Object(); //-> "object constructor syntax"
//2-> way
let user2 = { //-> object literal syntax
name: "john", // key "name" store value "john"
age: 30   // key "age" store value "30"
} ; 

// to get property value of object
console.log(user2.name) // -> john
console.log(user2.age) // => age 

// to add property 
user2.isAdmin = true; // isadmin is added in user2 object with value true;

// to remove the property we can use "delete"
delete user2.age;

// Another eg 
let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ) // John (if enter "name")

// we cant use alert(user.key) it will give undefined 

// we can square brackets in an object literal, when creating an object. Thats called computed properties

let fruit = prompt("which fruit", "apple");

let bag ={
    [fruit]:5, // the name of the property is taken from the variable fruit
};
alert(bag.apple); // 5 if fruit=apple -> if write name of another fruit it will give undefined
//The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.



// Property Value short Hand
 function makeUser(name, age){
    return{
        name: name,
        age: age,
    };
 }
 let user1 = makeUser('john', 30);
 alert(user1.name); // john 

 // "in" operator ->  to check if the key is present in object or not 
let users = { age: 30 };
let key1 = "age";
alert( key1 in user ); // true, property "age" exist

/* most of the time the comparison with undefined works fine. But there’s a special case when 
it fails, but "in" works correctly. It’s when an object property exists, but stores undefined */

let obj = {
    test: undefined
  };
  alert( obj.test ); // it's undefined, so - no such property?
  alert( "test" in obj ); // true, the property does exist!

  // -----------> Fo in loop 
  // to iterate over all keys of an object

  let users1 ={
    name: "john",
    age: 30,
    isAdmin: true,
  };
  for(let key in user){
    alert(key); // name, age, isAdmin
    alert(user[key]); // john, 30, true
  }

  /* A variable assigned to an object stores not the object itself, but its "address in memory" -
  in other words "a reference" to it 
  
  When we perform actions with the object, e.g. take a property user.name, the JavaScript engine looks 
  at what’s at that address and performs the operation on the actual object.

  NOTE -> When an object variable is copied, the reference is copied, but the object itself is not duplicated.
  
  */

  // -----------Cloning And merging 

  let original ={
    name:"john",
    age: 30,
  };

  let clone ={} // creating a new empty object

  // lets copy all original properties into it
  for(let key in original){
    clone[key] = user[key];
  }
  //now clone is fully independent object with same content of user
  clone.name = "pete"; // changed the data in it 

  alert(original.name)// john;

// Object.assign() -> copies the properties from all source objects into target dest and return it as the result 
  Object.assign(des, ...sources)

  // the first argument dest is target object
  // the second one is list of source objects

  let target = {
    name: "john",
  }

  let source1 = {canView : true};
  let source2 = {canEdit: false};

  // copies all properties from source1 and source2 into target
  Object.assign(target, source1, source2);

  alert(user.name); // john
  alert(user.canView);// true
  alert(user.canEdit)//false

  // if copiedname already exist then it get overwritten

  let original1={name:"john"};
  
  Object.assign(user, {name:"pete"});

  alert(user.name) // pete -> as now user name become pete

  // -----structuredClone -> clones the object with all nested properties

  let users2 = {
    name: "John",
    size:{
      height: 182,
      width: 50,
    }
  };

  let clone1 = structuredClone(user);
   console.log(user2===clone1) // false // they both are different objects

   user.sizes.width =60;
   // so if we check in clone
   console.log(clone.sizes.width); // 50 -> its value not changed remain same 

// NOTE -> There are cases when structuredClone fails for eg when object has function property fo rthat we can
//use  _.cloneDeep(obj) from the JavaScript library