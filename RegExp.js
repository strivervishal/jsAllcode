// regular expression ----usefull in pattern matching [string]
const pattern = 'pw';
const patternMatching = new RegExp(pattern);
const flag = 'gi';
const expOne = /pw/gi;
const expOneCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";
// match function used match given argument match in defind strings
const twoCheck = expOneCheck.match(/pw/gi);
console.log(twoCheck);

// //test function is used to check given string present or not 
// const test = expOne.test(expOneCheck);
// console.log(test);
// // replace any string 
// const replaceStrings = expOneCheck.replace(expOne,"p-w");
// console.log(replaceStrings);

// const webUrl = "https://pw-skills.com/vishal%20pandey";
// // const webUrl1 = webUrl.replace(/pw/gi,"p-w");
// const webUrl1 = webUrl.replace(/%\d0/,"-");

// console.log(webUrl1);
