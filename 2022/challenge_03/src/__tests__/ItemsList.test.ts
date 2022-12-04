import { ItemsList } from "../domain";
import MockItem from "../mocks/MockItem";

describe("given ItemsList class", () => {
  const item1 = new MockItem();
  const item2 = new MockItem();
  const item3 = new MockItem();

  const ITEMS_LIST = [item1, item2, item3];
  const EXPECTED_WEIGHT = 3;

  test("when an instance is created then method calculateWeight should be defined", () => {
    const itemsList = new ItemsList(ITEMS_LIST);
    expect(itemsList.calculateWeight).toBeDefined();
  });

  test("when function is invoked then expected number (as item weight) should be equal to string length", () => {
    const itemsList = new ItemsList(ITEMS_LIST);
    const weight = itemsList.calculateWeight();
    expect(weight).toEqual(EXPECTED_WEIGHT);
  });
});
