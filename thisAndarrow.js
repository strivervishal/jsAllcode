const chai = {
    username:"vishal",
    welcomMessage:function (){
        // console.log(`${this.username},welcome to our website`)
        //this this print whole entity of an object 
        // console.log(this);
    } 
}
 chai.welcomMessage()

//  console.log(this);
// print undefined 
//  console.log(this.username);

// can this works in function 
// this can not work in functions
function addtwo(n1,n2) {
    const username = "vishal"
    // console.log(this.username);
    return n1+n2;
}
//  console.log(addtwo(1,2))
//  op=undefined 

// arrow function 
 
// const add_two = (n1,n2) => {
//    const username = "vishal"
// //    it works only same constext 
// //    console.log(this.username);
// //    console.log(this);
//    return n1+n2;
// }
//  let namkeen = add_two(1,4);
//  console.log(namkeen);

//  const add_two = (n1,n2) => n1+n2;
// implicit return any value
const add_two = (n1,n2) => (n1+n2);
 console.log(add_two(1,9));

//  using arrow function return a object 

// const return_object = () =>{username:"vishalpandey"}  print undefined
const return_object = () =>({username:"vishalpandey"})
console.log(return_object());