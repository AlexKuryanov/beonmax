"use strict";

const money = +prompt("Ваш бюджет на месяц?");
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
    i = 0;
  }
}

/*let i = 0;
 while (i < 2) {
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
    i = 0;
  }
  i++;
} */

/* do {
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
    i = 0;
  }
  i++;
} while (i < 2); */

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay.toFixed(2));

if (appData.moneyPerDay < 1000) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 5000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 5000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка!");
}
