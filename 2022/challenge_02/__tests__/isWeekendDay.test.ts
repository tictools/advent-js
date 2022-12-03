import { DAYS_OF_THE_WEEK_INDEX } from "../constants";
import { isWeekendDay } from "../helpers";

describe("isWeekendDay", () => {
  describe("given a day", () => {
    const EXPECTED_RESULT = {
      TRUE: true,
      FALSE: false,
    };
    test("when a day has an index different of 0 or 6 then FALSE should be returned", () => {
      const foo = isWeekendDay({ dayIndex: DAYS_OF_THE_WEEK_INDEX.Monday });
      expect(foo).toEqual(EXPECTED_RESULT.FALSE);
    });

    test("when a day has index 6 (meaning Saturday) then TRUE should be returned", () => {
      const foo = isWeekendDay({ dayIndex: DAYS_OF_THE_WEEK_INDEX.Saturday });
      expect(foo).toEqual(EXPECTED_RESULT.TRUE);
    });

    test("when a day has index 0 (meaning Sunday) then TRUE should be returned", () => {
      const foo = isWeekendDay({ dayIndex: DAYS_OF_THE_WEEK_INDEX.Sunday });
      expect(foo).toEqual(EXPECTED_RESULT.TRUE);
    });
  });
});
