"use strict";

const money = prompt("Ваш бюджет на месяц?");
const time = prompt("Введите дату в формате YYYY-MM-DD");
const question1 = prompt("Введите обязательную статью расходов в этом месяце");
const question2 = prompt("Во сколько обойдется?");

const appData = {
  budget: money,
  timeData: time,
  expenses: {
    question1: question2,
  },
  optionalExpenses: {},
  income: [],
  savings: false,
};
alert(`Ваш дневной бюджет: ${money / 30}`);
