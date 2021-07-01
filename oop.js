"use strict";

/* let soldier = {
  health: 400,
  armor: 100,
};

let john = {
  health: 100,
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor); */

class Soldier {
  constructor(health = 400, armor = 100) {
    this.health = health;
    this.armor = armor;
  }
}

let john = new Soldier('John');
john.health = 100;

console.log(john);
console.log(john.armor);