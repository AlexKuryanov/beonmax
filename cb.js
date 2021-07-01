"use strict";

function first() {
  setTimeout(() => {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log("I learn " + lang);
  callback();
}

// learnJS("JavaScript", function () {
//   console.log("I finished 5th lesson!");
// });

function done() {
  console.log("I finished 5th lesson!");
}

learnJS("Pyton", done);
