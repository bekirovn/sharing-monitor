import { Case } from "@/types/cases";
import {
  dateTypeToISOString,
  getDateString,
  getMonthAndYear,
  getMonthYearRange,
  getNumberOfDaysInMonth,
} from "@/util/dateTimeHelpers";
import TimelineMonth from "./TimelineMonth";
import {
  DateRangeType,
  DateValueType,
} from "react-tailwindcss-datepicker/dist/types";

type Props = {
  cases: Case[];
  dateRangeValue: DateValueType;
};

export default function TimelineMonths({
  cases,
  dateRangeValue,
}: Props) {
  const filterStart = dateRangeValue?.startDate
    ? dateTypeToISOString(dateRangeValue?.startDate)
    : null;
  const [startMonth, startYear] = getMonthAndYear(
    filterStart || cases.map((c) => c.start).sort()[0] || ""
  );

  const filterEnd = dateRangeValue?.startDate
    ? dateTypeToISOString(dateRangeValue?.startDate)
    : null;
  const [endMonth, endYear] = getMonthAndYear(
    filterEnd || cases.map((c) => c.start).sort()[cases.length - 1] || ""
  );
  const monthYearPairs = getMonthYearRange(
    startMonth,
    startYear,
    endMonth,
    endYear
  );
  return (
    <div
      style={{
        scrollbarColor: "#0B8FC3 #92D8F4",
        scrollbarWidth: "thin"
      }}
      className="flex flex-row overflow-x-scroll gap-12 items-end min-h-[240px] py-3">
      {monthYearPairs.map(([month, year], i) => (
        <TimelineMonth
          key={i + "-" + year + "-" + month}
          monthZeroIndexed={month}
          year={year}
          cases={cases.filter(
            (c) =>
              (c.start || "") >= getDateString(1, month, year) &&
              (c.start || "") <=
                getDateString(getNumberOfDaysInMonth(month, year), month, year)
          )}
          scrollIntoView={monthYearPairs.length === i + 1}
        />
      ))}
    </div>
  );
}
