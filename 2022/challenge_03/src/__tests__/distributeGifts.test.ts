import distributeGifts from "../distributeGifts";

describe("given distributeGifts function", () => {
  const packOfGifts = ["book", "doll", "ball"];
  const reindeers = ["dasher", "dancer"];

  const EXPECTED_OUTPUT = {
    TWO: 2,
  };

  test("when gifts and reindeers are provided as arguments then expected output should be returned", () => {
    const packsToDeliver = distributeGifts(packOfGifts, reindeers);
    expect(packsToDeliver).toEqual(EXPECTED_OUTPUT.TWO);
  });
});
