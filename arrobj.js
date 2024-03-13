// 1. Create an empty array called "cars".
const cars = new Array(

    //2.Add three car objects to the "cars" array. Each car object should have the following properties
   {
    make: "Toyota",
    model: "Camry",
     year: 2018
 
   }
);
// o/p =>[ { make: 'Toyota', model: 'Camry', year: 2018 } ]

// 3. Remove the first car object from the "cars" array
console.log(delete cars[0].make);
console.log(delete cars[0].model);
console.log(delete cars[0].year);
// console.log(cars);
// [ {} ]

cars[0].make="Honda";
cars[0].model="Civic";
cars[0].year=2020;

 console.log(cars);
// o/p =>[ { make: 'Honda', model: 'Civic', year: 2020 } ] 

// 5. Update the "model" property of the second car object in the array to "Accord".
cars[0].model = "Accord";
console.log(cars);
// o/p => [ { make: 'Honda', model: 'Accord', year: 2020 } ]

//Print the final "cars" array after performing the above operations
console.log(cars);
// o/p =>  [ { make: 'Honda', model: 'Accord', year: 2020 } ]
