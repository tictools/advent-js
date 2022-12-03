import { getDayIndexFromDate, getMMDDYYDate, isWeekendDay } from "./helpers";

type countHoursType = {
  year: number;
  holidays: string[];
};
function countHours({ year, holidays }: countHoursType) {
  let hours: number = 0;

  holidays.forEach((monthDayString) => {
    const fullDateAsString = getMMDDYYDate({ monthDayString, year });
    const dayIndex = getDayIndexFromDate({ date: fullDateAsString });
    const weekendDay = isWeekendDay({ dayIndex });
    !weekendDay && (hours += 2);
  });

  return hours;
}

export default countHours;
