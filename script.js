'use strict'
//Отримуємо від користувача три числа;
let firstNum = prompt('Введіть перше числове значення:');
let secondNum = prompt('Введіть друге числове значення:');
let thirdNum = prompt('Введіть третє числове значення:');
//Змінні для зведення результату;
let num1 = parseFloat(firstNum);
let num2 = parseFloat(secondNum);
let num3 = parseFloat(thirdNum);
//Знаходження середнього арифметичного та алерт.
let result = (num1 + num2 + num3)/3;
alert('Середнє арифметичне число = ' + result);