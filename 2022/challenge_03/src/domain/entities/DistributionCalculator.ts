import { CalculatorOperations } from "../types";

export default class DistributionCalculator implements CalculatorOperations {
  #giftsWeigth: number;
  #reindeersWeightLimit: number;

  constructor(giftsWeigth: number, reindeersWeightLimit: number) {
    this.#giftsWeigth = giftsWeigth;
    this.#reindeersWeightLimit = reindeersWeightLimit;
  }

  private checkRateIsValid() {
    return this.#giftsWeigth < this.#reindeersWeightLimit;
  }

  calculate() {
    if (this.checkRateIsValid() === false) return 0;

    const floatingWeight = this.#reindeersWeightLimit / this.#giftsWeigth;
    return Math.floor(floatingWeight);
  }
}
