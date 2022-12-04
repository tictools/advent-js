import { ItemOperations } from "../types";

export default class ItemsList implements ItemOperations {
  #items: ItemOperations[];

  constructor(itemsList: ItemOperations[]) {
    this.#items = itemsList;
  }

  calculateWeight() {
    let packWeight = 0;

    this.#items.forEach((item) => {
      const giftWeight = item.calculateWeight();
      packWeight += giftWeight;
    });

    return packWeight;
  }
}
