import { Case } from "@/types/cases";
import { TimelineMonthData } from "@/types/timeline";
import { getMonth3LetterAbbr } from "@/util/dateTimeHelpers";
import { useContext, useEffect, useRef, useState } from "react";
import DataPageCaseModal from "../case-modal/DataPageCaseModal";
import { getCategoryColorMap } from "@/util/categories";
import { LangContext } from "@/components/LangProvider";

type Props = {
  year: number;
  cases: Case[];
  scrollIntoView?: boolean;
};

export default function TimelineYear({ year, cases, scrollIntoView }: Props) {
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

  let monthlyCases: TimelineMonthData[] = [];
  for (let month = 0; month < 12; month++) {
    monthlyCases.push({
      monthZeroIndexed: month,
      cases: cases.filter((c) => Number((c.start || "").split("-")[1]) - 1 === month),
    });
  }
  const colorMap = getCategoryColorMap();
  return (
    <div className="">
      <DataPageCaseModal
        selectedCase={cases.find((c) => c.id == selectedCaseId)}
        closeModal={() => setSelectedCaseId(undefined)}
      />
      <div
        ref={myRef}
        className=" flex flex-row gap-[3.12px] border-b-[1px] pb-2 border-blue-400 items-end"
      >
        {monthlyCases.map((mc) => (
          <div key={year + "-" + mc.monthZeroIndexed}
            className="flex flex-col gap-[3.12px]">
            <div className="h-[152px] flex flex-col flex-wrap gap-[3.12px] justify-end content-center items-center">
              {mc.cases.map((c, i) => (
                <div
                  key={i + "-" + c.title}
                  className={
                    "cursor-pointer w-[9.36px] h-[9.36px] rounded-[1px] "
                  }
                  style={{ backgroundColor: colorMap[c.category] }}
                  onClick={() => setSelectedCaseId(c.id)}
                ></div>
              ))}
            </div>
            <div className="text-xs w-[25.08px] h-[11px] tracking-tighter flex justify-center items-center">
                {getMonth3LetterAbbr(mc.monthZeroIndexed)}
              </div>
          </div>
        ))}
      </div>
      <div>
        {year}:{cases.length}
      </div>
    </div>
  );
}
