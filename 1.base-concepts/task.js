"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = Math.pow(b, 2) - 4 * a * c;

  if (dis === 0) {
    arr = [-b / (2 * a)];
  }
  if (dis > 0) {
    arr = [(-b + Math.sqrt(dis)) / (2 * a), (-b -Math.sqrt(dis)) / (2 * a)]
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let time = new Date();
  let currentMonth = time.getMonth();
  let currentYear = time.getFullYear();

  if (String(parseFloat(percent)) != String(percent)) {
    return 'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
  }
  if (String(parseFloat(contribution, 10)) != String(contribution)) {
    return 'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
  }
  if (String(parseFloat(amount, 10)) != String(amount)) {
    return 'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
  }
  let credit = amount - contribution;
  let month = date.getMonth() - currentMonth + (12 * (date.getFullYear() - currentYear));
  let percentOfMonth = percent / 12 / 100;
  let paymentOfMonth = credit * (percentOfMonth + percentOfMonth / (Math.pow(1 + percentOfMonth, month) - 1));
  let amountCredint = +parseFloat(paymentOfMonth * month).toFixed(2);
  return amountCredint;
}