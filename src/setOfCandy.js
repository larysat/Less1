class SetOfCandy {
  constructor() {
    this.setOfSweet = [];
  }

  addCandy(candy) {
    this.setOfSweet.push(candy);
  }
  //Находим общую массу всего набора: m, n, p - количество конфет одного типа
  getTotalWight(n, m, p) {
    let weight1 = 0;
    for (let candy of this.setOfSweet) {
      if (candy.type === "praline") {
        weight1 = weight1 + n * candy.weight;
      }
    }
    let weight2 = 0;
    for (let candy of this.setOfSweet) {
      if (candy.type === "chocolate") {
        weight2 = weight2 + m * candy.weight;
      }
    }
    let weight3 = 0;
    for (let candy of this.setOfSweet) {
      if (candy.type === "chocolate") {
        weight3 = weight3 + p * candy.weight;
      }
    }
    let weight = weight1 + weight2 + weight3;

    return weight;
  }
  //Находим общую калорийность всего набора: m, n, p - количество конфет одного типа
  getTotalCalorieСontent(n, m, p) {
    let calorie1 = 0;
    for (let candy of this.setOfSweet) {
      if (candy.type === "praline") {
        calorie1 = calorie1 + n * candy.calorieСontent;
      }
    }
    let calorie2 = 0;
    for (let candy of this.setOfSweet) {
      if (candy.type === "chocolate") {
        calorie2 = calorie2 + m * candy.calorieСontent;
      }
    }
    let calorie3 = 0;
    for (let candy of this.setOfSweet) {
      if (candy.type === "chocolate") {
        calorie3 = calorie3 + p * candy.calorieСontent;
      }
    }
    let calorie = calorie1 + calorie2 + calorie3;

    return calorie;
  }
  //Находим конфеты калорийностью менее заданных ккал БЕЗ орезов но С шоколадом
  filerByWeightAndFilling(limCalorieСontent) {
    return this.setOfSweet
      .filter(
        (candy) =>
          (candy.calorieСontent >= limCalorieСontent) &
          (candy.withNuts === false) &
          (candy.withChocolate === true)
      )
      .map((candy) => {
        return {
          type: candy.type,
          calorieСontent: candy.calorieСontent,
          withChocolate: candy.withChocolate,
          withNuts: candy.withNuts,
        };
      });
  }

  sortByCalorieContent(a, b) {
    return this.setOfSweet
      .sort((a, b) => (a.calorieСontent > b.calorieСontent ? 1 : -1))
      .map((candy) => {
        return { calorieСontent: candy.calorieСontent, type: candy.type };
      });
  }
}
module.exports = new SetOfCandy();
