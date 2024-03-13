// const newSet = new Set();
const setA = new Set([1,2,3,4]);
const setB = new Set([1,2,3,4,5,6]);
// let setA = new Set([2,3,4])
// let setB = new Set([2,3,4,5])
 function difference(setA,setB) {
    return new Set([...setB].filter(element => !setA.has(element)));
    
}
const total = difference(setA,setB);
console.log(total); 

// convert value of object into array 
// function myArguments() {
//      let arr = Array.from(arguments);
//     //  let final = arr.map(element => element);
//         return arr.map(element =>element)
     
// }

//  let final = myArguments(1,2,3,4);
//  console.log(final);

function argrument(...argruments) {
 let finalAns = argruments.map(element =>element)   
 console.log(finalAns);
}
argrument(1,2,3,4,5)

const heros = ["vishalprasad","ajayprasad"];

 const prasad1 = heros.filter((h)=>{
   return h.endsWith("prasad");
 })
 console.log(prasad1);

