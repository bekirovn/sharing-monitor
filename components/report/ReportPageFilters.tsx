import { ReportDoc } from "@/types/reports";
import FilterSelect from "../timeline-chart/FilterSelect";
import MultiYearFilter from "../filters/MultiYearFilter";
import { useContext } from "react";
import { LangContext } from "@/components/LangProvider";

const categoryOptions = [
  { value: "DEC 2023", label: "DEC 2023" },
  { value: "DEC 2023", label: "SEP 2023" },
];

type Props = {
  setSearchTerm: (s: string) => void;
  selectedYears: number[];
  setSelectedYears: (val: number[]) => void;
};

export default function ReportPageFilters({
  setSearchTerm,
  selectedYears,
  setSelectedYears,
}: Props) {
  const lang = useContext(LangContext);
  return (
    <div className="my-12 mx-auto">
      <div className="flex flex-row flex-wrap gap-4">
        <input
          className="relative pl-4 pr-8 rounded-full border-[1px] border-[#92D8F4] font-bold"
          type="text"
          placeholder={lang === "sr" ? "PRETRAGA" : "SEARCH"}
          onKeyUp={(s) => setSearchTerm((s.target as HTMLInputElement).value)}
        />
        <MultiYearFilter
          lang={lang}
          selectedYears={selectedYears}
          setSelectedYears={setSelectedYears}
        />
      </div>
    </div>
  );
}
