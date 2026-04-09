import { useContext, useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { translateSubcategory } from "@/util/translations";
import { LangContext } from "@/components/LangProvider";

type Props = {
  subcategories: string[];
  selectedSubcategories: string[];
  setSelectedSubcategories: (val: string[]) => void;
};

export default function CategoriesFilter({
  subcategories,
  selectedSubcategories,
  setSelectedSubcategories,
}: Props) {
  const lang = useContext(LangContext);
  return (
    <MultiSelectFilter
      label={lang === "sr" ? "potkategorije" : "subcategories"}
      options={subcategories.sort((a,b) => {
        const ta = translateSubcategory(a, lang);
        const tb = translateSubcategory(b, lang)
        if (ta < tb) return -1;
        if (tb < ta) return 1;
        return 0;
      }).map(c => ({
        text: translateSubcategory(c, lang),
        value: c,
        isSelected: selectedSubcategories.indexOf(c) !== -1,
      }))}
      onChange={(val) => setSelectedSubcategories(val)}
    />
  );
}
