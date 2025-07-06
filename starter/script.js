'use strict';   //using strict mode to avoid bugs

//! functions

// function hello(){
//     console.log("hiii");   
// }
// hello(23);  /// here specifying the argument will have no effect since there is no parameter passed.


// function sum(a,b){
//     console.log(a, b);
//     let add = a+b;
//     return add;
// }
// console.log(sum(3,4));

// function fruitProcessor(apples,oranges){
//     console.log(apples, oranges);
//     const fruitJuice = `Fruit juice contains ${apples} apples and ${oranges} oranges`
//     return fruitJuice;
// }
// const juice = fruitProcessor(5,3)
// console.log(juice);
// console.log(fruitProcessor(4,1));


//! function decleration and expressions

// /// this is function decleration, 1) we can call them before they are defined in the code
// console.log(calcAge1(2002));
// function calcAge1(birthYear){   
//     const presentYear = 2025
//     const age = 2025 - birthYear
//     return age;
// }
// console.log(calcAge1(2005));

// /// this is function expression, here we have assigned the function to a variable
// const calcAge2 = function(birthYear){   
//     const age2 = 2025 - birthYear
//     return age2
// }

// console.log(calcAge2(2001));


//! Arrow function

// const calcAge = birthYear => 2025 - birthYear;  ////when we have only one param and one line of code, return is done implicitly and no need to use return
// console.log(calcAge(2005));

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1962, "dharambir"))

//! function calling another function

// const cutFruits = (fruit)=>{
//     return fruit * 4;
// }

//  function fruitProcessor(apples,oranges){
//     const applePieces = cutFruits(apples)
//     const orangePieces = cutFruits(oranges)

//      const fruitJuice = `Fruit juice contains ${applePieces} apples and ${orangePieces} oranges`
//      return fruitJuice;
// }

// console.log(fruitProcessor(2,3));

//! introduction to arrays

/// arrays are mutable. even if the array is constant we can modify the element but not the whole array

// const friends = ["ram","sham","mohit"];
// const friends1 = new Array("rohit","sahil","mohit");

// console.log(friends);
// console.log(friends[1]);
// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = "akshit";
// console.log(friends);



// const calcAge = (birthYear)=>{
//     const age = 2025-birthYear;
//     return age;
// }

// const years = [2005,1990,1989,2012]
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const age4 = calcAge(years[3])

// const ages = [age1,age2,age3,age4]
// console.log(ages);


//! basic array operations (methods)

// const fruits = ["mango","apple","grapes","kiwi"]

// fruits.push("litchi");  //to add a element at the end
// console.log(fruits);

// fruits.unshift("peach")  //to add a element at the beggining
// console.log(fruits);

// fruits.pop();  //to remove the last element
// console.log(fruits);

// fruits.shift();  //to remove the first elment
// console.log(fruits);

// console.log(fruits.indexOf("grapes"));   //to get the index of element
// console.log(fruits.indexOf("papaya"));  //not in the array so it will return -1

// console.log(fruits.includes("apple"));  //similar to indexOf but return bool value


//! Introduction to objects

//*in objects we define key value pair, the order of these value doesnt matter when we want to retrieve them
// const car = {
//     brand: "bmw",   //these are properties
//     year: 2021,
//     color: "black",
//     model: "top"
// }
// console.log(car.year); 
// console.log(car["brand"]);

// const ask = prompt("what do you want to know about car? is it brand, year, color or model ? ")

// if (car[ask]) {
//     console.log(car[ask]);   
// }
// else {
//     console.log("wrong request");
//    
//}

//* instead of these 4 properties if we passed any other property then the result will be undefined

// // to add new properties
// car.engine = "V8";
// car["type"] = "suv";
// console.log(car);

// // challenge -->

// const rohit = {
//     firstName: "rohit",
//     lastName: "rohilla",
//     age: 20,
//     friends: ["ram","sham","rahul"]
// }

// const length = rohit.friends.length;
// const friend1 = rohit.friends[0];
// const friend2 = rohit.friends[1];
// const friend3 = rohit.friends[2];
// console.log(`${rohit["firstName"]} has ${length} friends one is ${friend1} and other two are ${friend2} and ${friend3} `);


//! Object methods

// const rohit = {
//     firstName: "rohit",
//     lastName: "rohilla",
//     birthYear: 2005,
//     friends: ["ram","sham","rahul"],
//     hasLicense: true,

//     // calcAge: function(){
//     //     return 2025-this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     }

// }

// console.log(rohit.calcAge());
// console.log(rohit.age);


//! for loop

// for(let rep=1;rep<=10;rep++){
//     console.log(`this is your rep ${rep}`);
    
// }

//! looping arrays , breaking and continuing

// const rohit = [
//     "rohit rohilla",
//     20,
//     "student",
//     ["ram","sham","mohan"]
// ]

// const types = []

// for(let i = 0;i<=rohit.length-1;i++){
//     console.log(rohit[i], typeof rohit[i]);   //filling an array

//     types.push(typeof rohit[i])
// }
// console.log(types);


// const birthYear = [2005,1990,1989,2018]
// const age = []

// for(let i=0;i<=birthYear.length-1;i++){
//    age.push(2025-birthYear[i]);
// }
// console.log(age);

//* continue is to exit the current iteration of loop or we can say just to skip
//* break is used to terminate the loop 

// const rohit = [
//     "rohit rohilla",
//     20,
//     "student",
//     ["ram","sham","mohan"]
// ]

// console.log("--- only strings ---");
// for(let i = 0; i <= rohit.length-1; i++)
// {
    
//     if (typeof rohit[i]!=="string") {
//         continue;
//     }else
//     console.log(rohit[i], typeof rohit[i]);
// }

// console.log("--- break with number ---");
// for(let i = 0;i<=rohit.length-1;i++){
//     if(typeof rohit[i] === "number"){
//         break;
//     }
//     else
//     console.log(typeof rohit[i]);
    
// }


//! looping backwards and loops in loops

// const rohit = [
//     "rohit rohilla",
//     20,
//     "student",
//     ["ram","sham","mohan"]
// ]

// for (let i = rohit.length-1; i >= 0; i--) {
//     console.log(rohit[i]);
// }

// for(let exercise = 1;exercise<4;exercise++){
//     console.log(`----Starting Exercise ${exercise} `);
//     for (let part = 1; part < 6; part++) {
//         console.log(`this is part ${part} of exercise ${exercise}`);
//     }
// }


//! while loops


//* while loop chalane ke liye hume condition true rakhni hai. jab tak condition true rahegi tab tak while loop chalega.

//let dice = Math.random() * 6; //* ye decimal value dega, hume decimal nhi chahiiye to hum Math.trunc use karenge and '* 6' matlab 0 to 5 tak dega lein hume 1 to 6 chaiye to hume usme 1 add karenge

// let dice = Math.trunc(Math.random() * 6) +1 ;
// console.log(dice);

// while (dice !== 6) {
//     console.log(dice);
//     dice =  Math.trunc(Math.random() * 6) +1 ;
//     if (dice === 6) {
//         console.log("6 has occured now loop will be terminated");
        
//     }
// }





