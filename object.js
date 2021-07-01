"use strict";

// create object:

// not useful method
let obj = new Object();

// recommended method to create an object:
let options = {
  width: 1024,
  height: 1024,
  name: "test",
};

// get object's value:
console.log(options.width);
console.log(options["name"]);

// add property to object:
options.bool = false;
options.colors = {
  border: "black",
  bg: "red",
};

// delete property:
delete options.bool;

//go through properties of object:
for (const key in options) {
  console.log("Property " + key + " has value " + options[key]);
}

console.log(Object.keys(options).length);

console.log(options);
