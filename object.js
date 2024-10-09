//OBJECt
//{key : value,key2: value2}
//key and value pairs are called object properties
//proprties of- comma is neccessary
const person ={
    firstName:"Ade",
    lastName: "Wale",
    age : 64,
    isMarried: true,
    friends: ["John", "Jane"],
    workhours: {
     monday: "8 hours",
    }

};

console.log(person);
//accEss properties inside object
//  dot notation objName.propertyName

console.log(person.age);
console.log(person.friends);
console.log(person.car);
console.log(person.workhours.monday);


//bracket notation objName[propertyName];
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workhours"]["monday"]);

// adding z new property to an object
person.car ="Benz";
person.hobbies = ["running","sleeping"];
console.log(person);

//removing a property from an object delete
delete person.isMarried;
console.log(person);

//object method -functions that the developer writes to work on the object
const book ={
    title: "In The  Shadow",
    author: "John Doe",
    yearPublished: 2000,
    genre: "fiction",
    isBestSeller: false,
    rating: 3.5,
    summary: function () {
        //Thre book is titled in the shadow and
        // it is written by John Doe and has a rating of 3.5
        console.log(`The Book is Titled ${this.title} and it is written by ${this.author} and has a rating of ${this.rating}`

        );
    },
   };

   //object Destructuring
   //mordern and faster way of picking properties in an object
   
//    const user = {
//     username: "user001",
//     fullname: "Peter Pan",
//     password: "**********",
//     profilePic: "avater",
//     followers: ["Wale", "John", "Jane"],
//     following: ["Elon Musk", "T Pain", "Ronaldo"],
//      dateOfAccount:2020,
//      post:{
//     title: "JS is fun",
//      desc:"I love JS alot",
//      },

//    };

//    user.profilePic;
//    user.post.title;
//    user.fullname;

//    const



// OBJECT DESTRUCTURING -
//modern and faster way of picking properties in an object
const user = {
    username: "user001",
    fullName: "Peter Pan",
    password: "",
    profilePic: "avatar",
    followers: ["Wale", "John", "Jane"],
    following: ["Elon Musk", "T pain", "Ronaldo"],
    dateOfAccount: 2020,
    posts: {
      title: "JS is Fun",
      desc: "I love JS a lot",
    },
  };
  
  user.profilePic;
  user.posts.title;
  user.fullName;
  
  const { username, profilePic, dateOfAccount, password, followers } = user;
  const {
    posts: { title, desc },
  } = user;
  console.log(title, desc);
  
  const myMainUser = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };
  const email = "mubarak@google.com";
  //aliase
  const {
    id,
    email: mainUserEmail,
    address: {
      street,
      geo: { lat: latitude, lng: longitude },
    },
    company: { name, catchPhrase, bs },
  } = myMainUser;
  


  //array destructuring
  //the integerity of an array has to be kept

  const PeoplesNames = ["Susan","Joy", "Mercy","Ade"];
  const [one, , two] = peoplesNames;
  console.log(one);
  


