'use strict';

let money = +prompt("Ваш бюджет на месяц (в руб.)?", "50000");
let data = prompt("Введите дату в формате YYYY-MM-DD?", "2000-06-17");
let appData = {     // объект
	budget: 0,  // под ключом "name" хранится значение "John"
	timeData: 30,        // под ключом "age" хранится значение 30
	expenses: {},
	optionalExpenses: {},
	income : [],
	saving : false
  };

appData.budget = money;
appData.timeData = data;
let question = prompt("Введите обязательную статью расходов в этом месяце", "food");
let question2 = +prompt("Во сколько обойдется?", "2000");
appData.expenses[question] = question2;
money = appData.budget / 30;
let temp_alert = "Ваш бюджет на один день: " + String(money.toFixed(2)) + " рублей";
alert(temp_alert);
console.log("Месячный бюджет:", appData.budget, "Дата заполения:", appData.timeData);
console.log("Cтатья расходов:", question, "расходы:", appData.expenses[question]);