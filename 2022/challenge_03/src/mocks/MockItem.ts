import { ItemOperations } from "../domain/types";

export default class MockItem implements ItemOperations {
  calculateWeight() {
    return 1;
  }
}
