import { SelectOption } from "@/types/filters";
import { translateCategory } from "@/util/translations";
import { useContext, useEffect, useRef, useState } from "react";
import { LangContext } from "../LangProvider";
import CategoriesAdvancedFilterDropdown from "./CategoriesAdvancedFilterDropdown";
import { attackMethods, categories, subcategories } from "@prisma/client";
import useOutsideClick from "@/util/useOutsideClick";

type Props = {
  categories: categories[];
  selectedCategoryNames: string[];
  setSelectedCategoryNames: (val: string[]) => void;

  subcategories: subcategories[];
  selectedSubcategoryNames: string[];
  setSelectedSubcategoryNames: (val: string[]) => void;

  attackMethods: attackMethods[];
  selectedAttackMethods: string[];
  setSelectedAttackMethods: (val: string[]) => void;

  gbovCategories: any[]; // 👈 ADD THIS
  gbovAttackMethods: any[];
};
//work in progress...
export default function CategoriesAdvancedFilter({
  categories,
  selectedCategoryNames,
  setSelectedCategoryNames,
  subcategories,
  selectedSubcategoryNames,
  setSelectedSubcategoryNames,
  attackMethods,
  selectedAttackMethods,
  setSelectedAttackMethods,
gbovCategories,
gbovAttackMethods
}: Props) {
  const lang = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const label = `${lang === "sr" ? "KATEGORIJE" : "CATEGORIES"} ${
    selectedCategoryNames.length > 0
      ? "(" + selectedCategoryNames.length + ")"
      : ""
  } | ${lang === "sr" ? "POTKATEGORIJE" : "SUBCATEGORIES"} ${
    selectedSubcategoryNames.length > 0
      ? "(" + selectedSubcategoryNames.length + ")"
      : ""
  } | ${lang === "sr" ? "SREDSTVA" : "MEANS"} ${
    selectedAttackMethods.length > 0
      ? "(" + selectedAttackMethods.length + ")"
      : ""
  } `;

  useOutsideClick(wrapperRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });
  

  return (
    <div className="relative " ref={wrapperRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={
          "relative " +
          (isOpen ? " z-30" : "") +
          " cursor-pointer flex flex-row justify-between text-sm tracking-wide font-bold " +
          " py-2 px-5 rounded-[20px] inline-block max-w-auto " +
          (isOpen
            ? " bg-white border-[2px] border-primary-light"
            : " bg-primary-light border-[2px] border-transparent")
        }
      >
        <span className="uppercase break-keep">{label}</span>
        <img src="/img/triangle-down.svg" />
      </div>
      {isOpen && (
        <CategoriesAdvancedFilterDropdown
          categories={categories}
          selectedCategoryNames={selectedCategoryNames}
          setSelectedCategoryNames={setSelectedCategoryNames}
          subcategories={subcategories}
          selectedSubcategoryNames={selectedSubcategoryNames}
          setSelectedSubcategoryNames={setSelectedSubcategoryNames}
          attackMethods={attackMethods}
          selectedAttackMethods={selectedAttackMethods}
          setSelectedAttackMethods={setSelectedAttackMethods}
          gbovCategories={gbovCategories} // 👈 ADD THIS
          gbovAttackMethods={gbovAttackMethods} // 👈 ADD THIS
        />
      )}
    </div>
  );
}
