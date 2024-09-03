import moment from "moment-jalaali";

export default function jalaliDate(date: string) {
  const jalaliDate = moment(date, "YYYY-MM-DD").format("jYYYY/jMM/jDD");

  return jalaliDate;
}
