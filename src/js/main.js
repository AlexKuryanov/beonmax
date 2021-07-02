"use strict";

const startBtn = document.getElementById('start');
const resultTable = document.querySelector('.result-table');
const values = resultTable.querySelectorAll('[class$=value]');
const data = document.querySelector('.data');
const expensesItem = data.getElementsByClassName('expenses-item');
const confirmExpensesBtn = data.getElementsByTagName('button')[0];
const confirmOptionalExpensesBtn = data.getElementsByTagName('button')[1];
const calcBtn = data.getElementsByTagName('button')[2];
const optionalExpensesItem = data.querySelectorAll('.optionalexpenses-item');
const chooseIncome = data.querySelector('#income');
const savings = data.querySelector('#savings');
const savingsSum = data.querySelector('#sum');
const choosePercent = data.querySelector('#percent');
const timeData = document.querySelector('.time-data');
const timeInputs = timeData.querySelectorAll('input');

//trainer's code
/* let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = 
    document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = 
      document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'); */

let money, time;

function start() {
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}
start();

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      const q1 = prompt("Введите обязательную статью расходов в этом месяце"),
        q2 = prompt("Во сколько обойдется?");
      if (
        typeof q1 === "string" &&
        typeof q1 != null &&
        typeof q2 != null &&
        q1 != "" &&
        q2 != "" &&
        q1.length < 50
      ) {
        console.log("It works");
        appData.expenses[q1] = q2;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    let moneyPerDay = Number(appData.moneyPerDay);
    if (moneyPerDay < 1000) {
      alert("У Вас минимальный уровень достатка");
    } else if (moneyPerDay > 1000 && moneyPerDay < 5000) {
      alert("У Вас средний уровень достатка");
    } else if (moneyPerDay >= 5000) {
      alert("У Вас высокий уровень достатка");
    } else {
      alert("Произошла ошибка!");
    }
  },
  checkSavings: function () {
    if (appData.savings === true) {
      let save = +prompt("Какая сумма Ваших накоплений?", ""),
        percent = +prompt("Под какой процент?", "");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i < 3; i++) {
      let q = prompt("Статья необязательных расходов?");
      if (typeof q != null && q != "" && q.length < 30) {
        appData.optionalExpenses[i] = q;
      } else {
        i = i - 1;
      }
    }
  },
  chooseIncome: function () {
    let items;
    while (items == "" || items == null || !isNaN(items)) {
      items =
        prompt("Есть дополнительный доход? (Перечислите через запятую)", "");
    }

    if (
      typeof items === "string" &&
      typeof items != null &&
      items != ""
    ) {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может, что-то еще?", ""));
      appData.income.sort();
    }
    let incomes = "Способы доп. заработка: \n";
    appData.income.forEach((elem, i) => {
      incomes += (i + 1) + ": " + elem + "\n";
    });
    alert(incomes);
  },
};
let keys = "Наша программа включает в себя данные: \n";
for (let key in appData) {
  keys += key + ": " + appData[key] + "\n";
}
console.log(keys);