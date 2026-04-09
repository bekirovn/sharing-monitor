import { DateType } from "react-tailwindcss-datepicker/dist/types";

export function getDayOfMonth(dateString: string): number {
  const date = new Date(dateString);
  const dayOfMonth = date.getDate();
  return dayOfMonth;
}

export function getMonthAndYear(dateString: string): number[] {
  const date = new Date(dateString);
  const monthZeroIndexed = date.getMonth();
  const year = date.getFullYear();
  return [monthZeroIndexed, year];
}

export function getYearRange(startYear: number, endYear: number): number[] {
  const years: number[] = [];
  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }
  return years;
}

export function getMonthYearRange(
  startMonth: number,
  startYear: number,
  endMonth: number,
  endYear: number
): Array<[number, number]> {
  const range: Array<[number, number]> = [];

  let currentYear = startYear;
  let currentMonth = startMonth;

  while (
    currentYear < endYear ||
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    range.push([currentMonth, currentYear]);

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return range;
}

export function getNumberOfDaysInMonth(
  monthZeroIndexed: number,
  year: number
): number {
  const date = new Date(year, monthZeroIndexed + 1, 0);
  const numberOfDays = date.getDate();
  return numberOfDays;
}

export function getNumberOfWeeksInMonth(
  monthZeroIndexed: number,
  year: number
): number {
  const firstDayOfMonth = new Date(year, monthZeroIndexed, 1);
  const lastDayOfMonth = new Date(year, monthZeroIndexed + 1, 0);

  const numberOfDays = lastDayOfMonth.getDate();
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfWeek = lastDayOfMonth.getDay();

  const daysInFirstWeek = 7 - firstDayOfWeek;
  const daysInLastWeek = lastDayOfWeek + 1;

  const completeWeeks = Math.floor(
    (numberOfDays - daysInFirstWeek - daysInLastWeek) / 7
  );
  const remainingDays = (numberOfDays - daysInFirstWeek - daysInLastWeek) % 7;

  let totalWeeks = completeWeeks;
  if (daysInFirstWeek > 0 || daysInLastWeek > 0 || remainingDays > 0) {
    totalWeeks++;
  }

  return totalWeeks;
}

export function getDatesForWeekOfMonth(weekOfMonth: number, monthZeroIndexed: number, year: number): string[] {
  const firstDayOfMonth = new Date(year, monthZeroIndexed, 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const startDate = new Date(year, monthZeroIndexed, 1 + (weekOfMonth - 1) * 7 - firstDayOfWeek);

  const dates: string[] = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }

  return dates;
}

export function getDateString(
  day: number,
  monthZeroIndexed: number,
  year: number
): string {
  // Create a new Date object
  const date = new Date(year, monthZeroIndexed, day);
  // Convert the date to an ISO string
  const isoString = date.toISOString();
  // Extract the desired date portion from the ISO string
  const dateString = isoString.substring(0, 10);
  return dateString;
}

export function getMonthName(monthZeroIndexed: number): string {
  const date = new Date();
  date.setMonth(monthZeroIndexed);
  const monthName = date.toLocaleString("default", { month: "long" });
  return monthName;
}

export function getMonth3LetterAbbr(monthZeroIndexed: number): string {
  const monthName = getMonthName(monthZeroIndexed);
  return monthName.slice(0, 3).toUpperCase();
}

export function getDateFromExcelSerial(serialNumber: number): string {
  const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
  const excelEpoch = new Date("1900-01-01").getTime(); // Excel epoch (January 1, 1900) in milliseconds

  const dateInMilliseconds =
    excelEpoch + (serialNumber - 1) * millisecondsPerDay;
  const dateObj = new Date(dateInMilliseconds);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// export function dateTypeToISOString(date: DateType): string | null {
//   if (date instanceof Date) {
//     return date.toISOString().split('T')[0];
//   } else if ((typeof date) === "string") {
//     return (date as string).split('T')[0];
//   }
//   return date;
// }

export function dateTypeToISOString(date: DateType): string | null {
  if (!date) return null;

  if (date instanceof Date) {
    if (isNaN(date.getTime())) return null;
    return date.toISOString().split("T")[0];
  }

  if (typeof date === "string") {
    const d = new Date(date);
    if (isNaN(d.getTime())) return null; 
    return d.toISOString().split("T")[0];
  }

  return null;
}

export function convertDateToISODate(date: Date | string | null): string | null {
  try {
    if (date === null) {
      return null;
    }
    if ((typeof date) === "string") {
      return (date as string).split('T')[0];;
    }
    const isoDate = (date as Date).toISOString();
    return isoDate.split('T')[0];
  } catch (error) {
    return null;
  }
}

export function getYearsArray(startYear: number): number[] {
  const currentYear = new Date().getFullYear();
  
  const yearsArray: number[] = [];
  for (let year = startYear; year <= currentYear; year++) {
    yearsArray.push(year);
  }

  return yearsArray;
}
