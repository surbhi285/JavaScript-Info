// ------------QUESTIONS-----------//

//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased 
//“myShortString"

function camelize(str){
    return str
    .split('-') // // splits 'my-long-word' into array ['my', 'long', 'word']
    .map((word, index)=> index==0 ? word : word[0].toUpperCase()+word.slice(1)).join(''); 
       //capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word'] 
      
}
let ans = camelize(`my-long-word`);
console.log(ans); 



// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or 
//equal to a and lower or equal to b and return a result as an array.

let arr =[5, 3, 8, 1];
function filterRange(arr, a, b){
let filtered = arr.filter((value) =>a<=value && value<=b);
return filtered;
}
let result = filterRange(arr, 1, 4);
console.log(result); // [3, 1]


// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values 
//except those that are between a and b

let array =[5, 3, 8, 1]

function filterRangeInPlace(array, a, b){
    for(let i=0; i<array.length; i++){
        let val = array[i];

        if(val<a || val>b){
            array.splice(i, 1);
            i--;
        }
    }
}
filterRangeInPlace(array, 1, 4);
console.log(array); // [3, 1]

// to sort arr in decreasing order
let arr1=[5, 2, 1, -10, 8]

let decreased = arr1.sort((a, b)=> b-a);
console.log(decreased); // [8, 5, 2, 1, -10]


//You have an array of user objects, each one has user.name. Write the code that converts it 
//into an array of names.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
console.log(names); // ["John", "Pete", "Mary"]


// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O

  


