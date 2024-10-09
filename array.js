//ARRAYS-COMPLEX DATA TYPES
//[ELEMENT1,element2]
//elements in arrays are separated by commas
//const mixedArr = [9,"str",true,65,9.8,null. [90, false]];
//const students = ["goodness", "aisha", "adura"];
//console.log(students);
//array properties (length)
//console.log (studnts.length);
//getting element in an array_position arrName
//UNSHIFT ADDS A NEW ELEMENT IN THE FRONT
//SHIFT WILL REMOVE THE ELEMENT FROM THE ARRAY FROM THE FRONT
//POP REMOVES FROM THE END
//PUSH ADDS FROM THE END



// ARRAYS - complex data types
// [element1, element2,]
const mixedArr = [9, "str,true,65,9.8,null, [90,false]"];

const students = ["goodness","Aisha","Adura"];
console.log(students);

// ARRAY PROPERTIES (LENGHT)
console.log(students.lenght);
// getting element in an array - position arrName[position]
console.log(students[1]);
// change el in array
students[0] = "John Doe";
console.log(students);

// ARRAY METHODS
// adding and removing els frm an array push pop shift and unshift 
// LIFO

students.push("Theresa");
students.push("eniola");
students.pop();
students.pop();
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift()

console.log(students);



//CONVERT AND ARRAY TO A STRING WE HAVE (toString, JOIN)
//console.log(student.toString());
//console.log(student.joing("*"));

// convert arrays to a string (tostring, join)
console.log(students.toString());
console.log(students.join("*"));

const onlineStudents = ["john", "peter", "paul"];
const weekdaystudents = ["Ade", "susan", "joy"];
const allStudents = onlineStudents.concat(weekdaystudents["ruth", "gift"]);
console.log(allStudents);


//includes
console.log(onlineStudents.includes("Paul"));

//sorts, reverse
const carBrands =["toyota", "lexus", "toyota", "bmw", "audi","chevrolet", "Audi"];
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());

//in sorts alphabetical order letter comes first

//extract portions of an array slice (start, end(not included))
//const friends =["Ola","Timi", "Jane"];
//console.log(friends.slice(0, 2));
//console.log(friends.slice(1));

//split
//when you perform array method on a string


//hello olleh ['h','e', 'l','l','o']-o ll e h

const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("hello"));


//higher order array methods (callback functions ,interator methods)
// for of method-it allows us to interate and pick out of the array
const fruits = ['Oranges','Mangoes','Pear','Grapes'];

for (const fruit of fruits) {
   console.log(`${fruit} is something i like`);
    if (fruit === "pear") {
    console.log(`${fruit} is my best fruit`);
    }
}

//find,filter,foreach.map,reduce every some

//FOREACH-executes a function for each element in an array

const customers = ['Jane', 'Mary', 'Tayo','Bimpe', 'Lanre'];
//individual element
//index is thr position in the array
customers.forEach((customer, index) => {
    console.log(customer, index);
})

//MAP method is similar to FOREACH method
//map method creates a new array with transformed element
//you have to tell it what it needs to do

const nums = [4,5,6,7];
const transformedNums = nums.map((num) => {
  return num * 2;
});
 console.log(transformedNums);




 //Find -returns the first matching element in an array
 const mySpecialNum = nums.find((num) => {
    return num > 5
 });
   console.log(mySpecialNum);




   //FILTER - IT RETURNS ALL THE ELEMENT THAT FITS A SEARCH CONDITION IN AN ARRAY
    //find returns one thing filter will return all

   const allMyspecialNums = nums.filter ((num) => num >= 5);
   console.log(allMyspecialNums);
  



let myBalance = 8000
const transactions = [4000, -125, 10000, -5000, -2000, 1500];

transactions.map((transaction) => {
    if (transaction > 0) {
        console.log(`You have been credited with ${transaction} Naira`)
    } else {
        console.log(`You have been credited with ${transaction} Naira`)
    }
})

transactions.map((transaction) => {
    myBalance += transaction;
});
console.log(myBalance);

const myCreditTranscations = transactions.filter((transaction) => transaction > 0);
console.log(myCreditTranscations);

const myDebitTransactions = transactions.filter((transaction) => transaction < 0);
console.log(myDebitTransactions);

const maxTransaction =  50000;
// find if there is any transaction close to that maxTranscation
transactions.push(1000000);

const specialTransactions = transactions.find((transaction) => transaction >= maxTransaction);
console.log(specialTransactions);


//every and some
//every = checks if all element satisfy a condition
const ages = [20, 42, 61, 81,12]
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
//some =checks if at leastone satisfy the condition
const somechildren = ages.some ((age) => age < 18);
console.log(somechildren);

//REDUCE -accumulating numbers
const cartPrices = [25000,32000,15000,4000,-2500];
const cartTotal =cartPrices.reduce((prev,curr) => {
    return prev + curr;
}, 300);
console.log(cartTotal);

//sort
const peoplesName = ["zigi", "Samson", "Niyi", "Ademola"];
//const atoZ = peoplesName.sort();
//console.log(atoZ);

const ztoA = peoplesName.sort((a,b) => b-a);
console.log(ztoA);
const prices = [8000,67000,676,5600];

const Lowesttohigest = prices.sort((a, b) => a-b);
console.log(Lowesttohigest);

//extract portions of an array slice (start, end(not included))
const friends =["Ola","Timi", "Jane"];
console.log(friends.slice(0, 2));
console.log(friends.slice(1));
//example 
const kids = [23,45,56,57,89,100];
console.log(kids.slice(0,3));
console.log(kids.slice(1));
//it doesnt change the original array 
//it usually use to slice out part of an array


//tuesday

//Array.isArray- check if a variable is array or not
console.log(Array.isArray(45));
//Array.from -changes a datatype to an array
console.log(Array.from("123"));


//Indexof,lastIndexOf
const arr = ["ade","john","jane","ade"]
console.log(arr.indexOf("ade"));
console.log(arr.lastIndexOf("ade"));

//delete-
console.log(arr);
delete arr[1];
console.log(arr);


//findIndex- position of the element that matches a search condition

const arr2 = (5,6,7,8,120,500,56);
const theIndexIs = arr2.findIndex((num) => num > 100);
console.log(theIndexIs);


















