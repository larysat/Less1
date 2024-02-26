const Praline = require("./praline");
const Pomade = require("./pomade");
const Chocolate = require("./chocolate");
const SetOfCandy = require("./setOfCandy");

const praline1 = new Praline("praline", 18, 80, true, false);
const praline2 = new Praline("praline", 20, 60, false, false);
const praline3 = new Praline("praline", 22, 85, true, true);

const chocolate1 = new Chocolate("chocolate", 17, 75, true, false);
const chocolate2 = new Chocolate("chocolate", 27, 83, true, true);

const pomade1 = new Pomade("pomade", 16, 60, true);
const pomade2 = new Pomade("pomade", 14, 55, false);

SetOfCandy.addCandy(praline1);
SetOfCandy.addCandy(praline2);
SetOfCandy.addCandy(praline3);

SetOfCandy.addCandy(chocolate1);
SetOfCandy.addCandy(chocolate2);

SetOfCandy.addCandy(pomade1);
SetOfCandy.addCandy(pomade2);

//console.log(SetOfCandy);
console.log(
  "Total weight of Set of sweets, g ",
  SetOfCandy.getTotalWight(3, 4, 2)
);
console.log(
  "Total calorie content of Set of Sweets, kcal ",
  SetOfCandy.getTotalCalorieСontent(3, 4, 2)
);
//Находим конфеты с шоколадом калорийностью менее заданных ккал БЕЗ орехов
console.log(
  "Конфеты с калорийностью ниже 60 ккал с шоколадом без орехов",
  SetOfCandy.filerByWeightAndFilling(60)
);

console.log(
  "Сортировка по калорийности**************",
  SetOfCandy.sortByCalorieContent()
);
