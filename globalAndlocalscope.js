// let a =2;
// const b =3;
// var c =4;

if (true) {
    let a =200;
    const b =300;
    var c =400;
    // console.log(a,b,c);
}

// console.log(a);
// console.log(b);
// console.log(c);

// nested function
function one() {
    const username = "vishal";
    
    function two() { 
        const website = "youtube";
        console.log(username);
        console.log(website);

    }
    // can not access website outside two function due to scope
    // console.log(website);
    two()
    
}
 one()