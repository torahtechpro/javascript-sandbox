const nums = [7, 8, 2, 4];
// complex data structure
//[object, ]
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible1", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss forest", director: "John Doe", rating: 4.1 },
{ id: 2, title: "Mission Impossible2", director: "Tom Cruise", rating: 4.4 },
];

//
movies.map((movie) => {
  console.log(movie.title.toUpperCase(), movie.rating);
});
//4.0 and above
const topRatedMovies = movies.filter((movie) => {
  return movie.rating >= 4;
});

console.log(topRatedMovies);

// miss
const searchedMovies = movies.filter((movie) => movie.title.includes("miss"));
console.log(searchedMovies);
//MISS -> miss '      MISS     '
const searchMovies = (searchTerm) => {
  const converted = searchTerm.trim().toLowerCase();
  console.log(converted);
};

searchMovies("miss");

//const searchMovies = (searchTerm) => {
    //const converted = searchTerm.trim().toLowerCase();
    //const moviesSearched = movies.filter((movie)) =>
     //movie.title.toLowerCase() .includes(converted)   
   
//);
//return moviesSearched;
//};


//get the movies directed by tom cruise
const searchedMovies2 = movies.filter((movie) => movie.director.toLowerCase().includes("tom cruise"));
console.log(searchedMovies2);

//get me the movie that has an id of 3
const moviesWithId3 =movies.find((movie) => movie.id === 3);
console.log(moviesWithId3);

//get movies that are rated less than 4

const searchedMovies3 = movies.filter((movie) => movie.rating < 4);



const events = [
    {
      id: 1,
      title: "Movie In the Park",
      category: "Party",
      date: "Aug 6th, 2024",
      price: 0,
      location: "Lagos",
    },
    {
      id: 2,
      title: "Burna Live In Concert",
      category: "Party",
      date: "Dec 23rd, 2024",
      price: 25000,
      location: "Lagos",
    },
    {
      id: 3,
      title: "Read With Kuku",
      category: "Education",
      date: "Sept 6th, 2024",
      price: 5000,
      location: "Online",
    },
    {
      id: 4,
      title: "Japa on a Budget",
      category: "Education",
      date: "Nov 6th, 2024",
      price: 10000,
      location: "Abuja",
    },
    {
      id: 5,
      title: "Mainland Block Party",
      category: "Party",
      date: "Dec 6th, 2024",
      price: 12000,
      location: "Lagos",
    },
  ];
//get the total number of event
  console.log(events.length);

  //get all of the event happening in lagos

const eventshappening = events.filter((events) => events.location.toLowerCase().includes("lagos".toLowerCase));
//console.log(events);

//15000 or less
const event= events.find((event) => event  === 15000 );
console.log(events);

//get me parties
const eventsparties = events.filter((eventsparty) => eventsparty.category.toLowerCase().includes("party".toLowerCase()));
console.log(eventsparties);

//arrange the event alpahbetically using their title
const arranged = events.sort((a, b) => a.title.localeCompare(b.title));
console.log(arranged);

//get a random event from event list

const numOfevent = events.length;
const randomeventPosition = Math. floor (Math.random() * numOfevent);
console.log(events[randomeventPosition]);













 
  
