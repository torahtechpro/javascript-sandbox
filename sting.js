//DATA TYPES
// we have 1.primitive 2.complex data type
//primitive data type-can only hold just one value at a time 
//complex hold more than one
//primitive strings,number, boolean,null and undefined
//copmplex type-object arrays

//strings are text characters they are  in Quotation marks eiter single quote or double quote
const firstName = "john";
const lastName = "doe";
console.log(firstName);
console.log(lastName);

//string Properties length
//string.length
console.log(lastName.length);
console.log(firstName.length);
// const mypassword = 'typo

//concatennation

const fullName =firstName + " "+ lastName;
console.log(fullName.length)

//STRING METHODS-function that can be performed oin strings
//toUppercase
console.log(fullName.toUpperCase());
//to lower case
console.log(fullName.toLowerCase())
//replace, replaceAll
console.log(fullName.replace("o","*"));
console.log(fullName.replaceAll("o", "*"))
//includes
console.log(fullName.includes("y"));
//startsWith, endwith
console.log(fullName.startsWith("JO"));
console.log(fullName.endsWith("e"));

const myEmail = "torahenterprise@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"))
//console.log("google.com"));
//indexOf,lastIndexOf

console.log(myEmail.indexOf("o"));
console.log(myEmail.lastIndexOf('o'));

//console.log(myEmail.chartAt(5));
//concat
console.log(myEmail.concat("example"))






//extract portions of  a string

//1.slice 2.substring 3.substr
//slice(start,end(non inclusive))
//substr-start poition,the type of characters we want
//substr(1, 2)
const surname = "Sandler";
console.log(surname.slice(0,4));
console.log(surname.slice(1,4));
console.log(surname.substring(1,6));
console.log(surname.substr(0,5));





//template literals-allolws us to formay variables into strings
//backticks `the Book ${bookTitle}`
// description2 = `The book ${bookTitle} written by ${author} was published in the year`

const name1 = "Ade"
const name2 = "wale"
//Ade is a boy
const sentence = `${name1} is a boy`;
//His name is Wale
const sentence2 = `His name is ${name2}`;

//Tinubu said and i quote 'let the poor breathe"`

const quote = `Tinubu said and i quote "Let the poor breathe"`
console.log(quote);










//bullean value is true and false