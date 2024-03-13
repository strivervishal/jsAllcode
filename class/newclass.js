// class in js
// class product{
// //properties variable ----data member
// name;
// price;
// rating;
// // behaviour --functions ===>function member
// display(){
//     console.log("this playing the current product:");
// }
// }

// let p = new product();
// // new keyword create a empty plain object
// //p work as a object;
// console.log(p);
// p.display();

// constructor in class
// class product{
// constructor(n,p,r) {
//   this.name = n;
//   this.price = p;
//   this.rating = r;
// //   return 10;
// return {x:3,y:2}
// }
// constructor(){

// } // multiple constructor can not use in class;
// display(){
//     console.log("result of product:",this.name,this.price,this.rating);
// }
// }
// let p = new product("iphone",10000,5);
// console.log(p);
// p.display();

// without classes how to use this keyword ;
// function product1(n,p,r) {
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }

//  let p = new product1("iphone",10000,5);
// //  console.log(p);

//  let x = {
//     p:product1
//  };
//  x.p("iphone",1000,5);
// //  console.log(x);

//  const product2 = function(n,p,r){
//     this.name = n;
//     this.price = p;
//     this.rating = r;
//  }
//  const print = new product2("iphone",10000,5);
//  console.log(print);


// ======= arrow function can not work like constructor 

// const product3 = (n,p,r)=>{
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }
// const pr = new product3("iphone",10000,5);
// console.log(pr);

// if we hold value of arrow function in any normal it works normally
// let obj = {
//     x:10,
//     fun(){
//         console.log(this.x);
//     }
// }
// console.log(obj);
// obj.fun();

// let obj ={
//      x:2,
//      fun(){
//         y = {
//              gun:()=>{
//                console.log(this.x);
//              }
//         }
//         y.gun();
// }
// }
//  obj.fun()

// static method in class 
class product{
    constructor(n,p,r) {
      this.name = n;
      this.price = p;
      this.rating = r;
    //   return 10;
    // return {x:3,y:2}
    }
    // constructor(){
    
    // } // multiple constructor can not use in class;
    static custom(){
        console.log("calling a static method in js");
    }
    display(){
        console.log("result of product:",this.name,this.price,this.rating);
    }
    }
    let p = new product("iphone",10000,5);
    console.log(p);
    p.display();
    
    // static function calling by class name
    product.custom();