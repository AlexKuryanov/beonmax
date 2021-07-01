"use strict";

const money = prompt("Ваш бюджет на месяц?");
const time = prompt("Введите дату в формате YYYY-MM-DD");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

// q = question
const q1 = prompt("Введите обязательную статью расходов в этом месяце");
const q2 = prompt("Во сколько обойдется?");
const q3 = prompt("Введите обязательную статью расходов в этом месяце");
const q4 = prompt("Во сколько обойдется?");

appData.expenses.q1 = q3;
appData.expenses.q2 = q4;

alert(appData.budget / 30);
