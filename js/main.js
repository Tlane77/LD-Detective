console.log("Little Debbies are Delicious");
import makeSweet from "./sweetFactory.js";

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
