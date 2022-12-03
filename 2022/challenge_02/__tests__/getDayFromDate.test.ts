import { getDayIndexFromDate } from "../helpers";

describe("getDayIndexFromDate", () => {
  describe("given a date", () => {
    const DATE_AS_STRING = "05/05/2020";

    const SpyOnGetDay: jest.SpyInstance<number, []> = jest.spyOn(
      Date.prototype,
      "getDay"
    );

    test("when function is invoked then getDay method should be called once", () => {
      getDayIndexFromDate({ date: DATE_AS_STRING });
      expect(SpyOnGetDay).toHaveBeenCalledTimes(1);
    });

    test("when function is invoked then one value of type number should be returned", () => {
      const output = getDayIndexFromDate({ date: DATE_AS_STRING });
      expect(typeof output === "number").toBeTruthy();
    });
  });
});
