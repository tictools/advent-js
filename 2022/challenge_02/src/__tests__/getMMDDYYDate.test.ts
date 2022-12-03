import getMMDDYYDate from "../helpers/getMMDDYYDate";

describe("getMMDDYYDate", () => {
  describe("given as string as MM/DD and one year as number", () => {
    test("when method is executed then a string with format MM/DD/YY is returned", () => {
      const monthDayString = "02/21";
      const year = 2020;
      const EXPECTED_OUTPUT = "02/21/2020";

      const output = getMMDDYYDate({ monthDayString, year });
      expect(output).toEqual(EXPECTED_OUTPUT);
    });
  });
});
