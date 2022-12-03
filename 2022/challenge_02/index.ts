import { DAYS_OF_THE_WEEK_INDEX } from "./constants";
import getMMDDYYDate from "./helpers/getMMDDYYDate";
import { countHoursType } from "./types";

const year: number = 2022;

const holidays: string[] = [
  "01/06",
  "01/07",
  "01/08",
  "05/06",
  "04/01",
  "12/25",
];

const getDayFromDate = (date) => {
  const currentDate = new Date(date);
  return currentDate.getDay();
};

const isWeekendDay = (day) =>
  day === DAYS_OF_THE_WEEK_INDEX.Saturday ||
  day === DAYS_OF_THE_WEEK_INDEX.Sunday;

function countHours({ year, holidays }: countHoursType) {
  holidays.forEach((currentDate) => {
    const fullDateAsString = getMMDDYYDate(currentDate, year);
    const dayOfTheWeek = getDayFromDate(fullDateAsString);
    const weekendDay = isWeekendDay(dayOfTheWeek);

    console.log({ fullDateAsString, dayOfTheWeek, weekendDay });
  });
  return 0;
}

countHours({ holidays, year });
