// function loginUserMessage(username) {
//     return `${username} just logged in`;
// }
//    console.log(loginUserMessage());
// undefined logged in 
function loginUserMessage(username="Ajay") {
    // use single one in if condition 
       if (username === undefined || !username) {
         console.log("Please enter valid username");
         return;
       }
         return `${username} just logged in`;
     }

      console.log(loginUserMessage("vishal"));