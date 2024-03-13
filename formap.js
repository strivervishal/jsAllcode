// manupulation of array using foreach loop 
const arr = [2,5,6,7];
arr.forEach((element,index,arr)=>{console.log("Result", element,index,arr)});

// map function
const heros = ["ajay","vishal"];
heros.map((h)=>{console.log(h.toUpperCase());}) ;

// filter function return [keyword neccessary]

const name = ["vishalprasad","ajayprasad" ,"vivek"];
const prasad = name.filter((pra)=>{
 return pra.endsWith('prasad')
})
console.log(prasad);

// shopping cart 
const shoppingCart = [200,300,400];
const bills = shoppingCart.reduce((prev,current)=> prev+current,10);
console.log(bills);

//safety type check 
const gameScore = [200,400,5999,32,31];
const gameScoreCheck = gameScore.every((value)=> typeof value === 'number');
console.log("Result:",gameScoreCheck);

const vishal = ["ajay","vishalp"];
const vishal1 = vishal.every((v)=>typeof v === "number");
console.log(vishal1);