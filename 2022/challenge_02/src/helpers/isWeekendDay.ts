import { DAYS_OF_THE_WEEK_INDEX } from "../constants";

type dayIndex = {
  dayIndex: number;
};

const isWeekendDay = ({ dayIndex }: dayIndex): boolean =>
  dayIndex === DAYS_OF_THE_WEEK_INDEX.Saturday ||
  dayIndex === DAYS_OF_THE_WEEK_INDEX.Sunday;

export default isWeekendDay;
