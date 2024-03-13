function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; 
    }
    console.log(newString);


// const prompt = require("prompt-sync")({sigint:true})

    
 // "olleh"
 setTimeout(reverseString,2000);
}
// reverseString("hello")
