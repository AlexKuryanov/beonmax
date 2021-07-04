"use strict";

const startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalexpensesValue =
  document.getElementsByClassName('optionalexpenses-value')[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  buttons = document.querySelectorAll('button'),
  inputs = document.querySelectorAll('input'),
  values = document.querySelectorAll('[class$="value"]');

const expensesItems = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  calcBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  savingsSum = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

let money, time;
expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
calcBtn.disabled = true;

startBtn.addEventListener('click', function () {
  buttons.forEach((button) => {
    button.removeAttribute('disabled');
  });
  inputs.forEach((input) => {
    input.value = null;
  });
  values.forEach((value) => {
    value.textContent = '';
  });

  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  money = +prompt("Ваш бюджет на месяц?", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }

  appData.timeData = time;
  appData.budget = money;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesItems.length; i++) {
    const q1 = expensesItems[i].value,
      q2 = expensesItems[++i].value;
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
      sum += +q2;
    } else {
      i = i - 1;
    }
  }
  expensesValue.textContent = sum;
});


optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    let q = optionalExpensesItem[i].value;
    if (typeof q != null && q != "" && q.length < 30) {
      appData.optionalExpenses[i] = q;
      optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    } else {
      i = i - 1;
    }
  }
});

calcBtn.addEventListener('click', function () {

  if (appData.budget != undefined) {
    appData.moneyPerDay =
      ((appData.budget - +expensesValue.textContent) / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    let moneyPerDay = Number(appData.moneyPerDay);
    if (moneyPerDay < 1000) {
      levelValue.textContent = "У Вас минимальный уровень достатка";
    } else if (moneyPerDay > 1000 && moneyPerDay < 3000) {
      levelValue.textContent = "У Вас средний уровень достатка";
    } else if (moneyPerDay >= 3000) {
      levelValue.textContent = "У Вас высокий уровень достатка";
    } else {
      levelValue.textContent = "Введите Ваш доход!";
    }
  } else {
    dayBudgetValue.textContent = "Введите Ваш доход!";
  }
});

incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

savingsSum.addEventListener('input', function () {

  if (appData.savings == true) {
    let sum = savingsSum.value,
      percent = percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }

});

percentValue.addEventListener('input', function () {

  if (appData.savings == true) {
    let sum = savingsSum.value,
      percent = percentValue.value;

    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }

});

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};