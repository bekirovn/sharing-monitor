import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import FilterSelect from "../timeline-chart/FilterSelect";
import CategoriesFilter from "../filters/CategoriesFilter";
import DateRangeFilter from "../filters/DateRangeFilter";
import AttackSourcesFilter from "../filters/AttackSourcesFilter";
import AttackTargetsFilter from "../filters/AttackTargetsFilter";
import SubcategoriesFilter from "../filters/SubcategoriesFilter";
import { useContext, useEffect, useRef } from "react";
import { LangContext } from "@/components/LangProvider";
import CategoriesAdvancedFilter from "../filters/CategoriesAdvancedFilter";
import { attackMethods, categories, subcategories } from "@prisma/client";
import AppliedFilters from "../filters/AppliedFilters";

type Props = {
  searchTerm: string;
  setSearchTerm: (s: string) => void;

  categories: categories[];
  categoryNames: string[];
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;

  subcategories: subcategories[]
  subcategoryNames: string[];
  selectedSubcategories: string[];
  setSelectedSubcategories: (val: string[]) => void;

  attackMethods: attackMethods[];
  selectedAttackMethods: string[];
  setSelectedAttackMethods: (val: string[]) => void;

  attackSources: string[];
  selectedAttackSources: string[];
  setSelectedAttackSources: (val: string[]) => void;

  attackTargets: string[];
  selectedAttackTargets: string[];
  setSelectedAttackTargets: (val: string[]) => void;

  dateRangeValue: DateValueType;
  setDateRangeValue: (newValue: DateValueType) => void;
  gbovCategories: any[]; // 👈 ADD THIS

  gbovAttackMethods: any[];
};

export default function DataPageFilters({
  searchTerm,
  setSearchTerm,

  categories,
  categoryNames,
  selectedCategories,
  setSelectedCategories,

  subcategories,
  subcategoryNames,
  selectedSubcategories,
  setSelectedSubcategories,

  attackMethods,
  selectedAttackMethods,
  setSelectedAttackMethods,

  attackSources,
  selectedAttackSources,
  setSelectedAttackSources,

  attackTargets,
  selectedAttackTargets,
  setSelectedAttackTargets,

  dateRangeValue,
  setDateRangeValue,
  gbovCategories,
  gbovAttackMethods
}: Props) {
  const lang = useContext(LangContext);
  const searchInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (searchInputRef.current != null) {
      searchInputRef.current.value = searchTerm;
    }
  }, [searchTerm]);
  return (
    <div className="mx-auto">
      <h1 className="font-bold text-3xl my-6">
        {lang === "sr" ? "FILTERI" : "FILTERS"}
      </h1>
      <input
          className="mb-4 w-full relative pl-4 pr-8 py-2 rounded-full border-[1px] border-[#92D8F4] font-bold"
          type="text"
          placeholder={lang === "sr" ? "PRETRAGA" : "SEARCH"}
          ref={searchInputRef}
          onKeyUp={(s) => setSearchTerm((s.target as HTMLInputElement).value)}
        />
      <CategoriesAdvancedFilter
          categories={categories}
          selectedCategoryNames={selectedCategories}
          setSelectedCategoryNames={setSelectedCategories}

          subcategories={subcategories}
          selectedSubcategoryNames={selectedSubcategories}
          setSelectedSubcategoryNames={setSelectedSubcategories}

          attackMethods={attackMethods}
          selectedAttackMethods={selectedAttackMethods}
          setSelectedAttackMethods={setSelectedAttackMethods}
          gbovCategories={gbovCategories} // 👈 ADD THIS
          gbovAttackMethods={gbovAttackMethods} // 👈 ADD THIS
        />
      <div className="my-4 flex flex-row flex-wrap gap-4">
        <AttackSourcesFilter
          attackSources={attackSources}
          selectAttackSources={selectedAttackSources}
          setSelectAttackSources={setSelectedAttackSources}
        />
        <AttackTargetsFilter
          attackTargets={attackTargets}
          selectAttackTargets={selectedAttackTargets}
          setSelectAttackTargets={setSelectedAttackTargets}
        />
        <DateRangeFilter
          value={dateRangeValue}
          onChange={setDateRangeValue}
        />
      </div>
      <AppliedFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}

        categories={categories}
        categoryNames={categoryNames}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}

        subcategories={subcategories}
        subcategoryNames={subcategoryNames}
        selectedSubcategories={selectedSubcategories}
        setSelectedSubcategories={setSelectedSubcategories}

        attackMethods={attackMethods}
        selectedAttackMethods={selectedAttackMethods}
        setSelectedAttackMethods={setSelectedAttackMethods}

        attackSources={attackSources}
        selectedAttackSources={selectedAttackSources}
        setSelectedAttackSources={setSelectedAttackSources}
        attackTargets={attackTargets}
        selectedAttackTargets={selectedAttackTargets}
        setSelectedAttackTargets={setSelectedAttackTargets}
        dateRangeValue={dateRangeValue}
        setDateRangeValue={setDateRangeValue}
      />
    </div>
  );
}
