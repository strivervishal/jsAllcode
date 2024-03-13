//add array and object with functions
const object = {
    username:"vishal pandey",
    price:200,
}
 function addObject(newObject) {
    return `Username is ${newObject.username} and the price of their product is ${newObject.price}.`
 }

 let result = addObject(object);
//  let result = addObject({username,price});
 console.log("Outcome:",result);

 // add array with functions
 const array = [200,499,699,300];
 function addArray(...myArray) {
    return myArray[1];
 }

  let handleArray = addArray([100,200,3000]);
  console.log(handleArray);