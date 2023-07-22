// 1-> Symbol.iterator
let range ={
    from:1,
    to:5
};
// 1-> to call for ..of initially call this

range[Symbol.iterator]=function(){
    // it return iterator object
    //2-> onward, for..of works only with the iterator object below, asking it for next values

    return{
        current : this.from,
        last: this.to,

        // 3. next() is called on each iteration by the for..of loop
        next(){
           // 4. it should return the value as an object {done:..., value:...}
           if(this.current <=this.last){
            return {done: false, value: this.current++};
           }else{
            return{done:true};
           }
        }
    };
};
for(let num of range){
    console.log(num);
}
/*
To make range object iterable(and thus for..of work) we need to add a method to the object named Symbol.iterator
1-> When for..of starts, it calls that method once. The method must return an iterator -an object with the method next
2-> Onward, for..of works only with that returned object
3-> when for..of want the next value, it calls next() on that object.
4-> the result of next() must have the form{done: Boolean, value: any}, where done =true means that the loop is finished 
otherwise value is the next value.

NOTE -> The range itself doenot have the next() method.
Instead, another object, so called "iterator" is created by the call to range[Symbol.iterator](), and its next()
generates value for the iteration
*/

// String iterable
for(let char of "test"){
    console.log(char); // t, e, s, t
}

// iterables vs array-like
//Iterables are objects that implement the Symbol.iterator method
// Array-like are objects that have indexes and length, so they look like arrays

// string are both iterable(for..of works on them) and array-like(they have numeric indexes and length)

// Array.from
// it takes an iterable or array-like value and makes a real ARRAY from it

let arrayLike ={
    0: "hello",
    1:"world",
    length: 2
};
let arr = Array.from(arrayLike);
console.log(arr);// output-> (2) ['hello', 'world']

// now for iterables 
let arr1 = Array.from(range);
console.log(arr1);// output [1, 2, 3, 4, 5]

//full syntax for Array.from also allows us to provide an optional “mapping” function:Array.from(obj[, mapFn, thisArg])

let array = Array.from(range, num => num*num);
console.log(array); // output  [1, 4, 9, 16, 25]