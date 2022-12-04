import { DistributionCalculator, Gift, ItemsList, Reindeer } from "./domain";

export default function distributeGifts(
  packOfGifts: string[],
  reindeersGroup: string[]
): number {
  const mappedGiftsAsInstance = packOfGifts.map((gift) => new Gift(gift));
  const giftsList = new ItemsList(mappedGiftsAsInstance);
  const giftsWeight = giftsList.calculateWeight();

  const mappedReindeersAsInstance = reindeersGroup.map(
    (reindeer) => new Reindeer(reindeer)
  );
  const reindeersList = new ItemsList(mappedReindeersAsInstance);
  const reindeersLimitWeight = reindeersList.calculateWeight();

  const distribution = new DistributionCalculator(
    giftsWeight,
    reindeersLimitWeight
  );

  return distribution.calculate();
}
