import { Case } from "@/types/cases";
import { TimelineDay } from "@/types/timeline";
import { getCategoryColorMap } from "@/util/categories";
import {
  getDateString,
  getMonth3LetterAbbr,
  getNumberOfDaysInMonth,
} from "@/util/dateTimeHelpers";

type Props = {
  monthZeroIndexed: number;
  year: number;
  cases: Case[];
};

export default function TimelineMonthPerDay({
  monthZeroIndexed,
  year,
  cases,
}: Props) {
  const daysInMonth = getNumberOfDaysInMonth(monthZeroIndexed, year);
  let dailyCases: TimelineDay[] = [];
  for (let day = daysInMonth; day >= 1; day--) {
    const dateString = getDateString(day, monthZeroIndexed, year);
    dailyCases.push({
      dayOfMonth: day,
      cases: cases.filter((c) => c.start === dateString),
    });
  }
  const colorMap = getCategoryColorMap();
  return (
    <div>
      <div className="flex flex-row gap-[3.12px] border-b-[1px] pb-2 border-blue-400 items-end">
        {dailyCases.map((dc) => (
          <div
            key={year + monthZeroIndexed + "-" + dc.dayOfMonth}
            className="flex flex-col gap-[3.12px] items-end"
          >
            {dc.cases.map((c, i) => (
              <div
                key={i + "-" + c.title}
                className={
                  "cursor-pointer w-[9.36px] h-[9.36px] rounded-[1px] "
                }
                style={{ backgroundColor: colorMap[c.category] }}
                onClick={() => alert(c.category + ":\n" + c.title)}
              ></div>
            ))}
            <div className="text-xs w-[9.36px] h-[11px] tracking-[-2.5px] flex justify-center items-center relative">
              <div className="absolute rotate-90 top-[30px]">
                {getDateString(dc.dayOfMonth, monthZeroIndexed, year)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
