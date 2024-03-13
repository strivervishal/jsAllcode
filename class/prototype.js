const myHeros =["vishal","ajay"];
const heros = ["Ram","shyam"];

const obj = {
    name:"vishwa",
    class:12,
    powerOfMyHeros:function () {
       console.log(`name present in object is ${this.name}`);
       console.log(this);
    }
}
// console.log(obj.powerOfMyHeros());

//inject anything in object
Object.prototype.hitesh = function () {
    // console.log(`hitesh present in all object ${this.name}`);
}
//  console.log(myHeros.hitesh());
//  console.log(obj.hitesh());

 Array.prototype.HeyHitesh = function () {

    console.log('hitesh present in array or not :');
 }
// console.log(myHeros.HeyHitesh());
// console.log(obj.HeyHitesh());

// inheritance in js 
const teacher = {
    name:"vishal",
    salary:49999
}
const teacherWork = {
    work:"assingnment",
    salary:499991
}
const tech = {
    tcs:"shivam",
    salary:499994,
    // add property of teacherWork in tech
    // inside object 
    // __proto__:teacherWork
}
// outside the object 
// teacherWork.__proto__ = teacher;
// console.log(teacherWork.name);
// console.log(tech.work);
// modern method 
Object.setPrototypeOf(teacher,teacherWork);
console.log(teacher.work);

// question "vishal    ";

String.prototype.truelength = function () {
    console.log(`true length is ${this.trim().length}`);
}
"vishal    ".truelength();
"vishalpandey    ".truelength();