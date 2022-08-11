import moment from "moment";

type DayType = {
  day: number;
  month: number;
  year: number;
};

export const combineDayAndTime = (day: DayType, time: moment.Moment) => {
  if (day === undefined) return null;

  let temp = `${day.year}-${day.month}-${day.day} `;

  if (time !== undefined) {
    temp += moment(time).format("HH:mm:ss");
  }

  const timeFormat = moment(temp).format();
  return new Date(timeFormat);
};
