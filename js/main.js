console.log("Little Debbies are Delicious");
import makeSweet from "./sweetFactory.js";
import API from "./dbCalls.js";
import makeSweetList from "./sweetList.js";

// (name, quantity, desc, shapeId, typeId, seasonId)
const newSweet1 = makeSweet(
  "Happy Camper Cake",
  5,
  "Green Pine trees with chocolate",
  1,
  2,
  3
);
const newSweet2 = makeSweet(
  "Football Brownies",
  6,
  "Looks like a football",
  4,
  1,
  6
);

console.log("this is the new sweet", newSweet1);
console.log("this is the second sweet", newSweet2);

///////////////////////////////////

// go get all the data
const allSweets = () => {
  // API is an object that has multiple methods for interacting with the DB
  //GET
  API.getAllSweets().then((sweets) => {
    // API.getAllSweets returns data, in this case an array
    console.log(sweets);
  });
};

//invoke the allSweets function
// allSweets();

// using the makeSweet factory function, make a sweet object
const newSweet3 = makeSweet(
  "Christmas In December 31",
  5,
  "White Christmas Tree with Santa on the Package",
  1,
  2,
  3
);

//invoke the addASweet method and pass it the newSweet3 object
//POST
API.addASweet(newSweet3).then(() => {
  //Once the new sweet has been added to the DB, go get all the data again.
  allSweets();
});

const allTypes = () => {
  API.getAllTypes().then((typeArray) => {
    console.log("All the types:", typeArray);
  });
};

allTypes();


makeSweetList();