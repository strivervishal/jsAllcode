// higher order function
const powerOne = (n)=>{
    return n ** 2 ;
}
 function powerTwo(powerOne,n) {
     return powerOne(n) * n;
 }
 const result = powerTwo(powerOne,4);
 console.log(result);

 // direct function return 
 function sayHello() {
     return ()=>{
        console.log("hello vishal");
     }
 }
  const guessResult = sayHello();
  guessResult();
  console.log(guessResult);

  //nested function 
  const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return n+m+p;
        }
        return twoFun
    }
       return oneFun
}
  console.log(higherOrder(2)(35)(3));

  const myNum =[1,2,3,4];
  const subArr = arr =>{
    let total = 0;
     arr.forEach(element => {
        total += element;
     });
     return total;
  } 
  console.log(subArr(myNum))