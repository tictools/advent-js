import countHours from "../countHours";

describe("countHours", () => {
  describe("given one year and an array of dates with format MM/DD", () => {
    const EXPECTED_HOURS = {
      ZERO: 0,
      TWO: 2,
      FOUR: 4,
    };

    const YEAR: number = 2022;
    const WEEKEND_HOLIDAYS: string[] = ["12/03", "12/04", "12/25"];

    test("when all days belong to weekend then 0 should be returned", () => {
      const hours: number = countHours({
        holidays: WEEKEND_HOLIDAYS,
        year: YEAR,
      });

      expect(hours).toEqual(EXPECTED_HOURS.ZERO);
    });

    test("when one day does not belong to weekend then 2 should be returned", () => {
      const ONE_DAY_OUT_OF_WEEKEND_HOLIDAYS: string[] = [
        "12/02",
        ...WEEKEND_HOLIDAYS,
      ];

      const hours: number = countHours({
        holidays: ONE_DAY_OUT_OF_WEEKEND_HOLIDAYS,
        year: YEAR,
      });

      expect(hours).toEqual(EXPECTED_HOURS.TWO);
    });

    test("when two day do not belong to weekend then 4 should be returned", () => {
      const TWO_DAYS_OUT_OF_WEEKEND_HOLIDAYS: string[] = [
        "12/01",
        "12/02",
        ...WEEKEND_HOLIDAYS,
      ];

      const hours: number = countHours({
        holidays: TWO_DAYS_OUT_OF_WEEKEND_HOLIDAYS,
        year: YEAR,
      });

      expect(hours).toEqual(EXPECTED_HOURS.FOUR);
    });
  });
});
