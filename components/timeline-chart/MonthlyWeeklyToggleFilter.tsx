import { useContext } from "react";
import SingleSelectFilter from "../filters/SingleSelectFilter";
import { LangContext } from "@/components/LangProvider";

type Props = {
  isPerWeek: boolean;
  setIsPerWeek: (x: boolean) => void;
};

export default function MonthlyWeeklyToggleFilter({
  isPerWeek,
  setIsPerWeek,
}: Props) {
  const lang = useContext(LangContext);

  return (
    <SingleSelectFilter
      options={[
        {
          text: lang === "sr" ? "po nedeljama" : "weekly view",
          value: "weekly view",
          isSelected: isPerWeek,
        },
        {
          text: lang === "sr" ? "po mesecima" : "monthly view",
          value: "monthly view",
          isSelected: !isPerWeek,
        },
      ]}
      onChange={(val: string) => {
        setIsPerWeek(val === "weekly view");
      }}
    />
  );
}
