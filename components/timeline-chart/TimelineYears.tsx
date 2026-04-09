import { Case } from "@/types/cases";
import {
  dateTypeToISOString,
  getDateString,
  getMonthAndYear,
  getMonthYearRange,
  getNumberOfDaysInMonth,
  getYearRange,
} from "@/util/dateTimeHelpers";
import TimelineYear from "./TimelineYear";
import {
  DateRangeType,
  DateValueType,
} from "react-tailwindcss-datepicker/dist/types";

type Props = {
  cases: Case[];
  dateRangeValue: DateValueType;
};

export default function TimelineYears({ cases, dateRangeValue }: Props) {
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
  const years = getYearRange(startYear, endYear);
  return (
    <div
      style={{
        scrollbarColor: "#0B8FC3 #92D8F4",
        scrollbarWidth: "thin",
      }}
      className="flex flex-row overflow-x-scroll gap-12 items-end min-h-[240px] py-3"
    >
      {years.map((year, i) => (
        <TimelineYear
          key={year}
          year={year}
          cases={cases.filter(
            (c) =>
              (c.start || "") >= getDateString(1, 0, year) &&
              (c.start || "") <= getDateString(31, 11, year)
          )}
          scrollIntoView={years.length === i + 1}
        />
      ))}
    </div>
  );
}
