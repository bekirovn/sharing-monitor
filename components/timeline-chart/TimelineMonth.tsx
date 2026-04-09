import { Case } from "@/types/cases";
import { TimelineDay, TimelineWeek } from "@/types/timeline";
import {
  getDateString,
  getDatesForWeekOfMonth,
  getMonth3LetterAbbr,
  getNumberOfDaysInMonth,
  getNumberOfWeeksInMonth,
} from "@/util/dateTimeHelpers";
import { useContext, useEffect, useRef, useState } from "react";
import DataPageCaseModal from "../case-modal/DataPageCaseModal";
import { getCategoryColorMap } from "@/util/categories";
import { LangContext } from "@/components/LangProvider";

type Props = {
  monthZeroIndexed: number;
  year: number;
  cases: Case[];
  scrollIntoView?: boolean;
};

export default function TimelineMonth({
  monthZeroIndexed,
  year,
  cases,
  scrollIntoView,
}: Props) {
  const lang = useContext(LangContext);
  const [selectedCaseId, setSelectedCaseId] = useState<string | undefined>(
    undefined
  );
  const myRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollIntoView) {
      setTimeout(() => {
        if (myRef.current) {
          myRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      }, 300);
    }
  }, [scrollIntoView, myRef]);

  const daysInMonth = getNumberOfDaysInMonth(monthZeroIndexed, year);
  const weeksInMonth = getNumberOfWeeksInMonth(monthZeroIndexed, year);

  let dailyCases: TimelineDay[] = [];
  let weeklyCases: TimelineWeek[] = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const dateString = getDateString(day, monthZeroIndexed, year);
    dailyCases.push({
      dayOfMonth: day,
      cases: cases.filter((c) => c.start === dateString),
    });
  }
  for (let week = 1; week <= weeksInMonth; week++) {
    const dateStrings = getDatesForWeekOfMonth(week, monthZeroIndexed, year);
    weeklyCases.push({
      weekOfMonth: week,
      cases: cases.filter((c) => dateStrings.indexOf(c.start || "") !== -1),
    });
  }
  const colorMap = getCategoryColorMap();
  return (
    <div>
      <DataPageCaseModal
        selectedCase={cases.find((c) => c.id == selectedCaseId)}
        closeModal={() => setSelectedCaseId(undefined)}
      />
      <div
        ref={myRef}
        className="flex flex-row gap-[3.12px] border-b-[1px] pb-2 border-blue-400 items-end"
      >
        {weeklyCases.map((wc) => (
          <div
            key={year + monthZeroIndexed + "-" + wc.weekOfMonth}
            className="flex flex-col gap-[3.12px] justify-end content-center items-center"
          >
            {wc.cases.map((c, i) => (
              <div
                key={i + "-" + c.title}
                className={
                  "cursor-pointer w-[9.36px] h-[9.36px] rounded-[1px] "
                }
                style={{ backgroundColor: colorMap[c.category] }}
                onClick={() => setSelectedCaseId(c.id)}
              ></div>
            ))}
            <div className="text-xs w-[18.72px] h-[11px] tracking-[-1.5px] flex justify-center items-center">
              {"W" + wc.weekOfMonth}
            </div>
          </div>
        ))}
      </div>
      <div>
        {getMonth3LetterAbbr(monthZeroIndexed)}{year}:{cases.length}
      </div>
    </div>
  );
}
