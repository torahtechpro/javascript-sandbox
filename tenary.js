//Switch Statement-
//perform action with different conditions
// with a swtch statemnet always add a -BREAK;
//IT IS ALso used  TO SWITCH EXPESSION

// ex
//a- excellent, b -very good

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

//a nexted IF that is if inside if

let myAtmPin = 5678;
let enteredPin = 5679;
const myBalance = 8000;
let transactionAmount = 5000;
if (myAtmPin=== enteredPin) {
  console.log("Incorrect Pin");
}
//tenary operator
// condition? first action : second action

myAtmPin === enteredPin
? console.log ("perform Transaction")
? console.log ("incorrect Pin");

myBalance >= transactionAmount
? console.log("Transaction successful")
: console.org("insufficient funds")
