"use strict";

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
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
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