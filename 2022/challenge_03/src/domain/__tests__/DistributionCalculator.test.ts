import { DistributionCalculator } from "../index";

describe("given DistributionCalculator class", () => {
  const EXPECTED_DISTRIBUION = {
    ZERO: 0,
    TWO: 2,
  };
  test("when an instance is created then method calculate should be defined", () => {
    const giftsWeigth = 4;
    const reindeersWeightLimit = 8;

    const distributionCalculator = new DistributionCalculator(
      giftsWeigth,
      reindeersWeightLimit
    );
    expect(distributionCalculator.calculate).toBeDefined();
  });

  test("when gifts weigth is greater than reindeers weight limit then 0 should be returned", () => {
    const giftsWeigth = 8;
    const reindeersWeightLimit = 4;

    const distributionCalculator = new DistributionCalculator(
      giftsWeigth,
      reindeersWeightLimit
    );

    const distribution = distributionCalculator.calculate();
    expect(distribution).toEqual(EXPECTED_DISTRIBUION.ZERO);
  });

  test("when reindeers weight limit is greater than gifts weight limit then rounded value should be returned", () => {
    const giftsWeigth = 4;
    const reindeersWeightLimit = 9;

    const distributionCalculator = new DistributionCalculator(
      giftsWeigth,
      reindeersWeightLimit
    );

    const distribution = distributionCalculator.calculate();
    expect(distribution).toEqual(EXPECTED_DISTRIBUION.TWO);
  });
});
