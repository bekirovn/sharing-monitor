import { useContext, useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { translateCategory } from "@/util/translations";
import { LangContext } from "@/components/LangProvider";

type Props = {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;
};

export default function CategoriesFilter({
  categories,
  selectedCategories,
  setSelectedCategories,
}: Props) {
  const lang = useContext(LangContext);
  return (
    <MultiSelectFilter
      label={lang === "sr" ? "kategorije" : "categories"}
      options={categories.sort((a,b) => {
        const ta = translateCategory(a, lang);
        const tb = translateCategory(b, lang)
        if (ta < tb) return -1;
        if (tb < ta) return 1;
        return 0;
      }).map(c => ({
        text: translateCategory(c, lang),
        value: c,
        isSelected: selectedCategories.indexOf(c) !== -1,
      }))}
      onChange={(val) => setSelectedCategories(val)}
    />
  );
}
