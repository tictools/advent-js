import { WEIGHT_FACTOR } from "../constants";
import { ItemOperations } from "../types";

export default class Reindeer implements ItemOperations {
  #reindeer: string;

  constructor(reindeer: string) {
    this.#reindeer = reindeer;
  }

  calculateWeight(): number {
    return this.#reindeer.length * WEIGHT_FACTOR;
  }
}
