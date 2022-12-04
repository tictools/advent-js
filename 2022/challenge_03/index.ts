import distributeGifts from "./src/distributeGifts";

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

const packsToDeliver = distributeGifts(packOfGifts, reindeers);

console.log(`Santa Claus can deliver ${packsToDeliver} packs`);
