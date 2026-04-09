import { categories, subcategories, attackMethods } from "@prisma/client";
import { useContext, useMemo } from "react";
import { LangContext } from "../LangProvider";
import { translateAttackMethods } from "@/util/translations";

type Props = {
  searchText: string;
  categories: categories[];
  subcategories: subcategories[];
  selectedSubcategoryNames: string[];
  selectedCategoryNames: string[];
  //setSelectedCategoryNames: (arr: string[]) => void;
  attackMethods: attackMethods[];
  selectedAttackMethods: string[];
  setSelectedAttackMethods: (val: string[]) => void;
  gbovCategories: any[];
  gbovAttackMethods: any[];
  selectedGbovCategories: string[];
  setSelectedGbovCategories: (val: string[]) => void;
};

export default function CategoriesAdvancedFilterDropdownMeans({
  searchText,
  categories,
  subcategories,
  selectedSubcategoryNames,
  selectedCategoryNames,
  attackMethods,
  selectedAttackMethods,
  setSelectedAttackMethods,
  gbovCategories,
  gbovAttackMethods,
       selectedGbovCategories,
    setSelectedGbovCategories,
}: Props) {
  const lang = useContext(LangContext);

  // Check if "Rodno zasnovano onlajn nasilje" category is selected
  const rodnoCategory = categories.find(
    (c) => selectedCategoryNames.includes(c.Name || "") &&
           c.Name === "Rodno zasnovano onlajn nasilje"
  );

  const options = useMemo(() => {
    let methods = attackMethods;
    if (rodnoCategory) {
     const selectedSubcategoryIds = gbovCategories
  .filter((c) => selectedSubcategoryNames.includes(c.Name || ""))
  .map((c) => c.Id);

methods = gbovAttackMethods.filter((m) =>
  selectedSubcategoryIds.includes(m.GbovCategoryId)
);
      
    } else {
      // Normal behavior → filter by selected subcategories
      const selectedSubcategoryIds = subcategories
        .filter((s) => selectedSubcategoryNames.includes(s.Name || ""))
        .map((s) => s.Id);
      if (selectedSubcategoryIds.length > 0) {
        methods = attackMethods.filter((a) =>
          selectedSubcategoryIds.includes(a.SubcategoryId || 0)
        );
      }
    }

    // Remove duplicates, sort, and map for rendering
    return methods
      .sort((a, b) =>
        translateAttackMethods(a.Name || "", lang).localeCompare(
          translateAttackMethods(b.Name || "", lang)
        )
      )
      .filter((r, i, arr) => i === 0 || r.Name !== arr[i - 1].Name)
      .map((r) => ({
        id: r.Id,
        subcategoryId: r.SubcategoryId,
        text: translateAttackMethods(r.Name || "", lang),
        value: r.Name,
        isSelected: selectedAttackMethods.includes(r.Name),
      }));
  }, [
    attackMethods,
    gbovAttackMethods,
    gbovCategories,
    subcategories,
    selectedSubcategoryNames,
    selectedAttackMethods,
    rodnoCategory,
    lang,
  ]);

  return (
    <>
      <h3 className="p-2 font-[FoundryBold] uppercase">
        {lang === "sr" ? "SREDSTVA NAPADA" : "MEANS OF ATTACK"}
      </h3>

      {/* Selected items */}
      {selectedAttackMethods.filter(
        (name) =>
          searchText === "" ||
          translateAttackMethods(name, lang)
            .toLowerCase()
            .includes(searchText.toLowerCase())
      ).length > 0 && (
        <ul className="p-2 border-y-[1px] flex flex-col gap-1">
          <li key="label" className="text-xs ">
            {lang === "sr" ? "IZABRANO:" : "SELECTED:"}
          </li>
          {options
            .filter((r) => r.isSelected)
            .filter(
              (r) =>
                searchText === "" ||
                r.text.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((r) => (
              <div
                key={r.id}
                className={
                  "flex flex-row items-center gap-1 justify-between leading-5 cursor-pointer px-3 py-1 rounded-[20px] bg-primary-light "
                }
                onClick={() => {
                  const restOfSelected = options
                    .filter((o) => o.value !== r.value && o.isSelected)
                    .map((o) => o.value || "");
                  setSelectedAttackMethods(restOfSelected);
                }}
              >
                {r.text}
                <img src="/img/x.png" className="h-4" />
              </div>
            ))}
        </ul>
      )}

      {/* Available items */}
      <ul className="p-2 flex flex-col gap-1">
        {options
          .filter((r) => !r.isSelected)
          .filter(
            (r) =>
              searchText === "" ||
              r.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((r) => (
            <div
              key={r.id}
              className="leading-5 cursor-pointer"
              onClick={() => {
                setSelectedAttackMethods([...selectedAttackMethods, r.value]);
              }}
            >
              {r.text}
            </div>
          ))}
      </ul>
    </>
  );
}