import { useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { getYearsArray } from "@/util/dateTimeHelpers";

type Props = {
  lang?: string
  selectedYears: number[];
  setSelectedYears: (val: number[]) => void;
};

const startYear = 2014;

export default function MultiYearFilter({
    lang = "sr",
    selectedYears,
    setSelectedYears,
}: Props) {
  return (
    <MultiSelectFilter
      label={lang === "sr" ? "godina" : "year"}
      options={getYearsArray(startYear).map(y => ({
        text: y + "",
        value: y + "",
        isSelected: selectedYears.indexOf(y) !== -1,
      }))}
      onChange={(val) => setSelectedYears(val.map(v => Number(v)))}
    />
  );
}
