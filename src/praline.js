const Candy = require("./candy");

class Praline extends Candy {
  constructor(type, weight, calorieСontent, withNuts, withCream) {
    super(type, weight, calorieСontent);
    this.withNuts = false;
    this.withCream = false;
  }

  addNutsToPraline() {
    this.withNuts = true;
    return this;
  }

  addCreamToPraline() {
    this.withCream = true;
    return this;
  }
}
module.exports = Praline;
