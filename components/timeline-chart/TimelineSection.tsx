import { Case } from "@/types/cases";
import HomePageSection from "../HomePageSection";
import TimeLineFilters from "./TimelineFilters";
import TimelineMonths from "./TimelineMonths";
import { useContext, useState } from "react";
import TimelineYears from "./TimelineYears";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { LangContext } from "@/components/LangProvider";

type Props = {
  cases: Case[];
  categories: string[];
};

export default function TimelineSection({ cases, categories }: Props) {
  const lang = useContext(LangContext);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const earliest = cases.map((c) => c.start).sort()[0];
  const latest = cases.map((c) => c.start).sort()[cases.length - 1];
  const [isPerWeek, setIsPerWeek] = useState(false);
  const [dateRangeValue, setDateRangeValue] = useState<DateValueType>({
    startDate: null, //new Date(earliest),
    endDate: null, //new Date(latest),
  });

  const handleDateRangeValueChange = (newValue: DateValueType) => {
    setDateRangeValue(newValue);
  };

  const filteredCases = cases.filter(
    (c) =>
      selectedCategories.length === 0 ||
      selectedCategories.indexOf(c.category) !== -1
  );

  return (
    <HomePageSection
      title={lang === "sr" ? "VREMEPLOV" : "TIMELINE"}
      width="max-w-5xl"
    >
      <TimeLineFilters
        categories={categories}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        isPerWeek={isPerWeek}
        setIsPerWeek={setIsPerWeek}
        dateRangeValue={dateRangeValue}
        handleDateRangeValueChange={handleDateRangeValueChange}
      />
      {isPerWeek ? (
        <TimelineMonths
          dateRangeValue={dateRangeValue}
          cases={filteredCases}
        />
      ) : (
        <TimelineYears
          dateRangeValue={dateRangeValue}
          cases={filteredCases}
        />
      )}
    </HomePageSection>
  );
}
