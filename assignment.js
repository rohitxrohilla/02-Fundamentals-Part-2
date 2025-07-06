//! functions

// const describeCountry = function (country, population, capitalCity){
//     const intro =  `${country} has ${population} people and its capital city is ${capitalCity} `
//     return intro
// }
// console.log(describeCountry("India","100 million","Delhi"));

//! Function Declarations vs. Expressions

// function percentageOfWorld1(population){
//     const percentage = population/7900*100
//     return `population is ${population} million so the percenatge is ${percentage.toFixed(2)}%`
// }
// console.log(percentageOfWorld1(1441));
// console.log(percentageOfWorld1(23));


// const percentageOfWorld2 = function(population){
//     const percentage = population/7900*100
//          return `population is ${population} million so the percenatge is ${percentage.toFixed(2)}%`
// }
// console.log(percentageOfWorld2(90));


//! Arrow functions

// const percentageOfWorld3 = (population)=>{
//     const percentage = population/7900*100
//      return `population is ${population} million so the percenatge is ${percentage.toFixed(2)}%`
// }
// console.log(percentageOfWorld3(983));

//! function calling another functions

// function percentageOfWorld1(population){
//      const percentage = population/7900*100
//      return percentage;
//     //  return `population is ${population} million so the percenatge is ${percentage.toFixed(2)}%`
//  }

// const describePopulation = (country, population) =>{
//     const pop = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${pop}% of the world`;
// }
// console.log(describePopulation("America", 14));

// const rightAge = (birthYear)=>{
//     age = 2025 - birthYear
//     return age;
// }

// const validAge = (birthYear)=>{

//     rightAge(birthYear);

//     if (age>=23) {
//         console.log("you can drink");
//         return age;
//     }
//     else{
//         console.log("you cannot drink");
//         return -1;
//     }
// }
// console.log(validAge(1990));
// console.log(validAge(2005));


//! arrays

// const population = [1441, 109, 45, 7633];
// console.log(population.length == 4);

//  function percentageOfWorld1(population){
//       const percentage = population/7900*100
//       return percentage;
//  }

// const percentage1 = percentageOfWorld1(population[0]);
// const percentage2 = percentageOfWorld1(population[1]);
// const percentage3 = percentageOfWorld1(population[2]);
// const percentage4 = percentageOfWorld1(population[3]);

// const percentages = [percentage1,percentage2,percentage3,percentage4]
// console.log(percentages);

//!array methods

// const neighbours = ["bhutan","nepal","sri lanka","tibet"]

// neighbours.push("utopia")
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// if(!neighbours.includes("germany")){
//     console.log ("it is a central european country");
// }

//! objects

// const myCountry = {
//     country: "india",
//     capital: "delhi",
//     language: "hindi",
//     population: "400",
//     neighbours: ["tibet","bhutan,","nepal"],

//     describe: function(){
//         return `${this.country} has ${this.population} million people and ${this.neighbours.length} neighbouring countries as ${this.neighbours[0]},${this.neighbours[1]},${this.neighbours[2]}`
        
//     },

//     checkIsland: function(){
//         return (this.neighbours.length==0)?true:false
//     }
// }
// console.log(`${myCountry.country} has ${myCountry.population} million people and ${myCountry.neighbours.length} neighbouring countries as ${myCountry.neighbours[0]},${myCountry.neighbours[1]},${myCountry.neighbours[2]}`);

// myCountry.population = 402;
// console.log(myCountry);

// myCountry["population"] = 404;
// console.log(myCountry);

// console.log(myCountry.describe());
// console.log(myCountry.checkIsland());


//! looping in arrays, continue and break

// const populations = [10, 1441, 332, 83];
// const percenatges2 = [];

// const percentageOfWorld3 = (population)=>{
//     const percentage = population/7900*100
//     return percentage;
// }

// for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld3(populations[i] )
//     percenatges2.push(perc)
// }
// console.log(populations);

// console.log(percenatges2);

//! looping backwards and loops in loops

// let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let x = 0;x <= listOfNeighbours.length-1;x++){
//     for (let y = 0; y < listOfNeighbours[x].length; y++) {
//         console.log(`Neighbour: ${listOfNeighbours[x][y]}`);
//     }
// }


//! While Loop










