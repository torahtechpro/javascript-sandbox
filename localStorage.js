// local storage api

// set sth inth localstorage
//localStorage.setItem("token", "hello");

// getting sth from the localStorage
//localStorage.getItem("token");

//remove values in the localstorage
//localStorage.removeItem("token");

//clear our local storge
// localStorage.clear();
 //localStorage can only take in strings

 const user = {
    id: 1,
    theme: "dark"
 };

 //JSON .stringify
 // Javascript object notation
 localStorage.setItem("user",JSON.stringify(user));
 //JSON.parse
 JSON.parse(localStorage.getItem("user"));