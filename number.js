//NUMBER 9 0,4 118
const myAge = 87;
// number ,ethods toFixed
const num = 9.5678
console.log(num.toFixed(0));
console.log(num.toFixed(1));
console.log(num.toFixed(2));

// + - * /
const x = 7;
const y = 7;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// ** raised to the power  (exponent)
console.log(3 ** 2)
//modulus % (return the reminder of a division)
console.log(6 % 2); //its 0 cos there is no reminder
console.log(100 % 10);

// order of operation (bodmas)
// PEMDAS
//P-BRACKET E-EXPONET M-MULTIPLICATION D-DIVISION A-ADDITION S-SUBSTRACTION
//4 + 2 * 3;

let likes = 0;
//likes = likes + 1;
//likes = likes + 1;
//likes = likes + 1;
//likes = likes - 1;

likes++;
likes++;
likes++;
likes--;
console.log("Likes" ,likes);

// likes++;
// likes--;

let savings = 5000;
//savings = savings + 3000;
savings = savings + 3000;
// savings = savings + 10000;
savings +=10000;
//7000
//savings = savings- 7000;


const fullName = "Peter Pan"

 const accountNumber = 56789054;
 let myBalance = 4000;
 //jan transaction
 // credited 10000, debited 200 as smscharges,received gift 3000
 //gifted someone 1200

 myBalance += 10000;
 myBalance -= 200;
 myBalance += 3000;
 myBalance -=1200;
 console.log("my Balance is ", myBalance);

 //fullname with account number: accountNumber has a balance of myBalance
 const accountStatement = `${fullName} with account number ${accountNumber} has a balance ${myBalance.toFixed(2)}`;
console.log(accountStatement)

 






