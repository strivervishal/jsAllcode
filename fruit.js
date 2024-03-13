// 01) creation of an empty array
const fruits = new Array();
//o/p => []

// 02) Add the following fruits to the "fruits" array: "apple", "banana", "orange" 

fruits.push("apple","banana","orange");
// console.log(fruits);
// o/p => ["apple","banana","orange"]

// remove the first fruit from the array
fruits.shift();
//o/p => ["banana","orange"]


//03) add "grape " to the end of the array     
fruits.push("grape")
//o/p => ["banana","orange","grape"]

// Update the second fruit in the array to "pear"
 fruits.splice(1,1,"pear")
console.log(fruits);

// final o/p => [ 'banana', 'pear', 'grape' ]