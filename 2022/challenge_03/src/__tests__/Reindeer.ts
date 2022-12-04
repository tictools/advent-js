import { Reindeer } from "../domain";
import { WEIGHT_FACTOR } from "../domain/contants";

describe("given Gist class", () => {
  const REINDEER = "dancer";

  test("when an instance is created then method calculateWeight should be defined", () => {
    const reindeer = new Reindeer(REINDEER);
    expect(reindeer.calculateWeight).toBeDefined();
  });

  test("when calculateWeight method is invoked then returned value should be equal to string length multiplied by weight factor", () => {
    const reindeer = new Reindeer(REINDEER);
    const weightLimit = reindeer.calculateWeight();
    expect(weightLimit).toEqual(REINDEER.length * WEIGHT_FACTOR);
  });
});
