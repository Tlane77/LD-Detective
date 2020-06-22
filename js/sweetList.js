// get and save an array of sweets
// populate dom with specific items

import API from "./dbCalls.js";
import makeSweetHTML from "./sweetDOM.js";
import registerDeleteListener from "./events.js";

const sweetContainer = document.querySelector("#sweetContainer");

const makeSweetList = () => {
  sweetContainer.innerHTML = "";
  API.getAllSweets().then((sweetsArray) => {
    //can i get just the brownies?
    const brownies = sweetsArray.filter((item) => {
      return item.typeId === 1;
    });

    /////array method examples

    const allSweetNames = sweetsArray.map((item) => {
      const htmlComponent = `<p>${item.name}</p>`;
      return htmlComponent;
    });

    console.log("all names", allSweetNames);
    sweetContainer.innerHTML += allSweetNames.join("");

    const firstBrownie = sweetsArray.find((item) => {
      return item.typeId === 2;
    });

    const firstTree = sweetsArray.find((item) => {
      return item.desc.includes("Tree");
    });

    console.log("firstTree", firstTree);

    console.log("firstBrownie", firstBrownie);

    // put them on the dom
    console.log("brownies", brownies);

    // brownies.forEach(item => {
    // 	sweetContainer.innerHTML += makeSweetHTML(item);
    // })

    //loop through the sweetsArray and display on the dom
    sweetsArray.forEach((item) => {
      sweetContainer.innerHTML += makeSweetHTML(item);
    });

    //invoke the register delete functionality to add to each item in the list
    registerDeleteListener.registerDeleteListener();
  });
};

export default makeSweetList;
