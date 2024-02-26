const Candy = require("./candy");

class Pomade extends Candy {
  constructor(type, weight, calorieСontent, withCream) {
    super(type, weight, calorieСontent);
    this.withCream = false;
  }
  addCreamToPomade() {
    this.withCream = true;
    return this;
  }
}
module.exports = Pomade;
