type dateAsString = {
  date: string;
};

const getDayIndexFromDate = ({ date }: dateAsString): number => {
  const currentDate = new Date(date);
  return currentDate.getDay();
};

export default getDayIndexFromDate;
