// immediately invoked function
// function chai() {
//     console.log("DEVICE CONNECTE TO DB");
// }
//  chai()

// implementation of immediatly invoked function
// (function chai() {
//     console.log("DEVICE CONNECTE TO DB");
// })()
(function loginUserMessage(username = "sam") {
    if (true) {
        console.log("Please enter valid username");
    }
    return `${username} just logged now`;
})();
  
  //named IIFE
  (function vishal_code() {
    // console.log("DB CONNECTED JUST NOW BY VISHAL");
  })();

//   IIFE function in arrow function
(function chai_code(name) {
    console.log(`DB CONNECTED BY ${name}`);
  })('vishal pandey');// argument pass here 
 