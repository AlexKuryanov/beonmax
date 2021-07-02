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