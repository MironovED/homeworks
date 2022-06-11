'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - (4 * a * c);
  if (discriminant < 0) {
    return arr = [];
  }

  if (discriminant == 0){
    arr.push(-b / (2*a));
    return arr;
  }

  if (discriminant > 0) {
    arr.push((-b + Math.sqrt(discriminant)) / (2*a));
    arr.push((-b - Math.sqrt(discriminant)) / (2*a));
    return arr;
  }
  return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  if (Number.isNaN(Number(percent)) || Number(percent) < 0) {
      return percent = String(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    }

  if (Number.isNaN(Number(contribution)) || Number(contribution) < 0) {
    return contribution = String(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (Number.isNaN(Number(amount)) || Number(amount) < 0) {
    return amount = String(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  let creditAmount = amount - contribution;
  let monthlyPersent = percent / 100 / 12;
  let nowDate = new Date();
  let finalDate = new Date(date);
  let monthAmount = finalDate.getMonth() - nowDate.getMonth() + (12 * (finalDate.getFullYear() - nowDate.getFullYear()));
  let monthlyPayments = creditAmount * (monthlyPersent + (monthlyPersent / ((Math.pow((1 + monthlyPersent), monthAmount) - 1))));
  
  totalAmount = (monthlyPayments * monthAmount).toFixed(2);
  return Number(totalAmount);
}
