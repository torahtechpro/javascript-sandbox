// //conditional statement
// //control
// const myBalance = 3000;
// const transaction = 9000;
// //is statement
// //if (condition) {
// //lines of code depends on the condition

// //}
// //if (false) {
//    // console.log ("yes")
// // }
// //it will not show in the console cos it is false

// if (myBalance >= transaction){
//     console.log("transaction successful");
// }

// //18+
// const age = 12;
// if (age >= 18){
//     console.log("you are eligible to vote");
// }
// //if the length of a paasword is 7 and above - good password
// const Password = "e67e6";

// if (password.length >= 7){
//     console.log("Good Password");
// }

// //if the length of a paasword is 7 and above has @ - good password
// const password = "e67e6665h@";

// if (password.length >= 7 && password.includes("@")){
//     console.log("Good Password");
// }

// //if else statement


// //if (condition){
// //first.action//}else{
// // second.action//}

// const age2 = 18;
// // eligible 18= or not
// if (age2 >= 18) {
//     console.log("you are eligible to vote");
// } else {
//     console.log("you are ineligible to vote,you must be 18+")
// }

// // youth/underage 0-40 or aged 41
// const age3 = 40;
// if (age3 >= 0 && age <= 40){
//     console.log("you are in thr youth/underage category");
// } else {
//     console.log ("you are in the aged category");
// }
// //write an if else statement is even number check if a number is even or odd AND LOG TO THR console
// const num = 90;
// if (num % 2 === 0) {

// }
// //declare two variablea 1.savings 2.transactionAmount
// //write an if else statement to check if transaction will be successful or not i.e insufficient fund

// const savings = 5000;
// const transaction2 = 10000;
// if (savings >= transaction2) {
//     console.log("insufficient Fund");
// } else{
//     console.log ("successful")
// }


// conditional statement
// control

const myBalance =30000;
const transaction =30000;

// if statement 
// if(condition){
// lines of code 
// }
// if(false){
//     console.log("yes");
// }

if(myBalance >= transaction){
    console.log("Transaction successful");
}

// 18+
const age = 25;
if (age >= 18){
    console.log("You are eligible to vote");
}

// if the lenght of the password is 7 and above has @ - good password
const password = '@e67e67e67'

if (password.length >= 7 && password.includes("@")){
    console.log("Good password");
}

// if else statement
// if (condition){
// first action
// }else{
// second action
//}

const age2 = 15;
// eligible 18+ or not

if(age2 >= 18){
    console.log("you are eligible to vote");
}else{
    console.log("you are ineligible to vote, you must be 18+");
}

// youth/underage 0-40 or aged 41
const age3 = 40;
if (age3 >= 0 && age3 <= 40){
    console.log("you are in the youth/underage category");
} else{
    console.log("you are in the aged category");
}
// write an if else statement to check if a number is even or odd and log to the console
const evenNumber = 40;

if (evenNumber >= 2 ) {
    console.log( " 40 is even ");
} else {
    console.log("an odd number");
}

// declare two variables 1. savings 2.trasactionAmount
// write an if else statement to check if transaction will be successful
// or not 

const savings = 100000;
const transactionAmount= 10000;

if (savings >= transactionAmount) {
  console.log("Transaction successful");
} else{
    console.log("Not successfull")
}
// multiple conditions eelse if statement
// posive > 0 negative < 0 ane zero
let myNum =98;
if (myNum > 0 ){
    console.log("This is a Positive nUmber");
}else if (myNum < 0){
    console.log("This is the Negative Number")
} else {
    console.log("This is zero")
}

//underage 0-12 teens 13 - 19 Adults 20 aged 41

const age4 = 24
if (age4 >= 0 && age4 <= 12){
    console.log(" underage");
} else if (age4 >= 13 && aged4 <= 19){
console.log("Teens");
} else if (aged4 >= 20 && aged4 <= 40) {
    console.log("adult");
} else if (aged4 >= 41) {
    console.log ("aged");
} else {
    console.log("invalid age,try again")
}



switch (grade) {
    case "A":
    case "a":
      console.log("Excellent");
      break;
    case "B":
    case "b":
      console.log("Very Good");
      break;
    case "C":
    case "c":
      console.log("Good");
      break;
    case "D":
    case "d":
      console.log("Fair");
      break;
    case "E":
    case "e":
      console.log("Poor");
      break;
    case "F":
    case "f":
      console.log("Failed");
      break;
    default:
      console.log("ivalid grade");
  }
  



