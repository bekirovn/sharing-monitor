import FilterSelect from "./FilterSelect";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import {
  DateValueType,
} from "react-tailwindcss-datepicker/dist/types";
import DateRangeFilter from "../filters/DateRangeFilter";
import MonthlyWeeklyToggleFilter from "./MonthlyWeeklyToggleFilter";
import CategoriesFilter from "../filters/CategoriesFilter";

type Props = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
  isPerWeek: boolean;
  setIsPerWeek: (x: boolean) => void;
  dateRangeValue: DateValueType;
  handleDateRangeValueChange: (newValue: DateValueType) => void;
};

export default function TimeLineFilters({
  categories,
  selectedCategories,
  setSelectedCategories,
  isPerWeek,
  setIsPerWeek,
  dateRangeValue,
  handleDateRangeValueChange,
}: Props) {
  return (
    <div className="max-w-5xl flex flex-row gap-5 flex-wrap mb-4 justify-between">
      <div className="flex flex-row gap-5 flex-wrap">
        <CategoriesFilter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <DateRangeFilter
          value={dateRangeValue}
          onChange={handleDateRangeValueChange}
        />
      </div>

      <MonthlyWeeklyToggleFilter
        isPerWeek={isPerWeek}
        setIsPerWeek={setIsPerWeek}
      />
    </div>
  );
}
