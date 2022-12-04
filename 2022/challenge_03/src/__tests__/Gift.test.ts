import { Gift } from "../domain/index";

describe("given Gift class", () => {
  const GIFT = "book";

  test("when an instance is created then method calculateWeight should be defined", () => {
    const gift = new Gift(GIFT);
    expect(gift.calculateWeight).toBeDefined();
  });

  test("when calculateWeight method is invoked then returned value should be equal to string length", () => {
    const gift = new Gift(GIFT);
    const weight = gift.calculateWeight();
    expect(weight).toEqual(GIFT.length);
  });
});
