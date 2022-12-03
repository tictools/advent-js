type MMDDYYDate = {
  monthDayString: string;
  year: number;
};
const getMMDDYYDate = ({ monthDayString, year }: MMDDYYDate): string =>
  `${monthDayString}/${year}`;

export default getMMDDYYDate;
