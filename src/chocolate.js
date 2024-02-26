const Candy = require("./candy");

class Chocolate extends Candy {
  constructor(type, weight, calorieСontent, withChocolate, withNuts) {
    super(type, weight, calorieСontent);
    this.withChocolate = true;
    this.withNuts = false;
  }

  addNutsToChocolate() {
    this.withNuts = true;
    return this;
  }
}
module.exports = Chocolate;
