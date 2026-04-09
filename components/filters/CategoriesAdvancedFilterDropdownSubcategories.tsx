import { useContext, useState } from "react";
import { LangContext } from "../LangProvider";
import { categories, subcategories } from "@prisma/client";
import { translateCategory, translateSubcategory } from "@/util/translations";
import { getCategoryColorMap } from "@/util/categories";

const colorMap = getCategoryColorMap();

type Props = {
  searchText: string;
  categories: categories[];
  selectedCategoryNames: string[];
  setSelectedCategoryNames: (arr: string[]) => void;

  subcategories: subcategories[];
  selectedSubcategoryNames: string[];
  setSelectedSubcategoryNames: (arr: string[]) => void;


  

  gbovCategories: any[]; // special categories
};

export default function CategoriesAdvancedFilterDropdownSubcategories({
  searchText,
  categories,
  selectedCategoryNames,
  setSelectedCategoryNames,
  subcategories,
  selectedSubcategoryNames,
  setSelectedSubcategoryNames,
  gbovCategories,

}: Props) {
  const lang = useContext(LangContext);
  // Map main categories for dropdown
  const cOptions = categories
    .sort((a, b) => translateCategory(a.Name, lang).localeCompare(translateCategory(b.Name, lang)))
    .map((c) => ({
      id: c.Id,
      text: translateCategory(c.Name, lang),
      value: c.Name,
      isSelected: selectedCategoryNames.includes(c.Name),
    }));

  // Map normal subcategories
  const scOptions = subcategories
    .sort((a, b) => translateSubcategory(a.Name || "", lang).localeCompare(translateSubcategory(b.Name || "", lang)))
    .map((r) => ({
      id: r.Id,
      categoryId: r.CategoryId,
      text: translateSubcategory(r.Name || "", lang),
      value: r.Name,
      isSelected: selectedSubcategoryNames.includes(r.Name || ""),
    }));

  // Map gbovCategories ONLY under "Rodno zasnovano onlajn nasilje"
  const gbovScOptions = gbovCategories
    .map((g) => ({
      id: g.Id,
      categoryId: cOptions.find(c => c.value === "Rodno zasnovano onlajn nasilje")?.id || null,
      text: translateSubcategory(g.Name, lang),
      value: g.Name,
      isSelected: selectedSubcategoryNames.includes(g.Name),
    }))
    .filter(g => g.categoryId !== null); // only if the main category exists

  // Combine normal subcategories + gbov special under Rodno category
  const allSubcategoryOptions = [...scOptions, ...gbovScOptions];

  return (
    <ul className="col-span-1 text-sm tracking-wide font-bold py-2 px-5 rounded-[20px] w-full">
      {cOptions.map((option) => (
        <li key={option.value} className="flex flex-col uppercase pt-1 px-4 mb-2">
          <h3
            onClick={() => {
              const restOfSelected = cOptions
                .filter(o => o.value !== option.value && o.isSelected)
                .map(o => o.value);

              setSelectedCategoryNames(
                option.isSelected
                  ? restOfSelected
                  : [...restOfSelected, option.value]
              );
            }}
            className="relative my-2 cursor-pointer text-[16px] font-[FoundryBold] font-[400]"
          >
            <div
              className="absolute rounded-full top-[3.5px] -left-6 w-[14px] h-[14px] border-[2px]"
              style={{
                backgroundColor:
                  selectedCategoryNames.length === 0 || option.isSelected
                    ? colorMap[option.value]
                    : "white",
                borderColor: colorMap[option.value],
              }}
            ></div>
            {option.text}
          </h3>

          <ul>
            {allSubcategoryOptions
              .filter(r => r.categoryId === option.id) // only subcategories of this main category
              .filter(r => r.text.toLowerCase().includes(searchText.toLowerCase()))
              .map(r => (
                <li
                  key={r.id}
                  onClick={() => {
                    const restOfSelected = allSubcategoryOptions
                      .filter(o => o.value !== r.value && o.isSelected)
                      .map(o => o.value || "");

                    setSelectedSubcategoryNames(
                      r.isSelected
                        ? restOfSelected
                        : [...restOfSelected, r.value || ""]
                    );
                  }}
                  className={
                    "leading-5 cursor-pointer mb-1 px-3 py-1 rounded-[20px] " +
                    (r.isSelected ? "bg-primary-light" : "")
                  }
                >
                  {r.text}
                </li>
              ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}