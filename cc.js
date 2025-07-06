//! 1.

// const calcAverage = (score1,score2,score3)=>{
//     const avg = (score1+score2+score3)/3;
//     return avg;
// }
// const scoreDolphins = calcAverage(44,23,71);
// const scoreKoalas = calcAverage(65,54,49);

// const checkWinner = (avgDolphins,avgKoalas)=>{
//     if(avgDolphins>=avgKoalas*2){
//         return `Dolphin wins ( ${avgDolphins}>${avgKoalas} )`
//     }
//     else if(avgKoalas>=avgDolphins*2){
//         return `Dolphin wins ( ${avgKoalas}>${avgDolphins} )`
//     }
//     else 
//     return "no wins"
// }
// console.log(checkWinner(scoreDolphins,scoreKoalas));

//! 2.

// const calcTip = (billValue)=>{
//     if (50<=billValue<=300) {
//         return billValue*15/100;
//     }
//     else
//     return billValue*20/100;
// }

// const bills = [125,555,44]

// const tip1 = calcTip(bills[0])
// const tip2 = calcTip(bills[1])
// const tip3 = calcTip(bills[2])

// const tips = [tip1,tip2,tip3]
// console.log(tips);

// const total = [bills[0]+tip1, bills[1]+tip2,bills[2]+tip3 ]
// console.log(total);

//! 3.

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,

//     calcBmi: function(){
//         this.bmi = this.mass/this.height**2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,

//     calcBmi: function(){
//         this.bmi = this.mass/this.height**2;
//         return this.bmi;
//     }
// }

// mark.calcBmi();
// console.log(mark.bmi);
// john.calcBmi();
// console.log(john.bmi);

// if(john.bmi>mark.bmi){
//     console.log(`john's bmi(${john.bmi}) is greater than mark(${mark.bmi})`);
// }
// else{
//     console.log(`john's bmi(${john.bmi}) is less than mark(${mark.bmi})`);
    
// }


//! 4.

// const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// const calcTip = (billValue)=>{
//     if (50<=billValue<=300) {
//         return billValue*15/100;
//     }
//     else
//     return billValue*20/100;
// }

// for (let i = 0; i < bills.length-1; i++) {
//    let tip = calcTip(bills[i]);   
//     tips.push(tip);
//     total.push(bills[i]+tips[i]);
// }
// console.log(tips);
// console.log(total);

//! bonus

// arr = [3,2,7];
// let sum=0;
// calcAvg = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let avg = sum/arr.length;
//     return avg;
// }
// console.log(calcAvg(arr));

