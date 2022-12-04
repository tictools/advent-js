import { ItemOperations } from "../types";

export default class Gift implements ItemOperations {
  #gift: string;
  constructor(gift: string) {
    this.#gift = gift;
  }

  calculateWeight(): number {
    return this.#gift.length;
  }
}
