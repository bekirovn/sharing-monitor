import { Case } from "@/types/cases";
import {
  translateAttackTargets,
  translateCategory,
  translateSubcategory,
} from "./translations";

export function getCategoryColorMap() {
  const colorMap: Record<string, string> = {
    "Prevare, pretnje i manipulacije": "#0B8FC3",
    "Sajber incidenti": "#27264E",
    "Privatnost i zaštita podataka": "#E81E25",
    "Rodno zasnovano onlajn nasilje": "#33ee46"
  };
  return colorMap;
}

export function getCaseIllustration(c: Case) {
  const categoryNormalized = translateCategory(c.category, "en")
    .toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll(",", "");
  const subcategoryNormalized = translateSubcategory(
    c.subcategories[0]?.subcategory || "",
    "en"
  )
    .toLowerCase()
    .replaceAll(" ", "_")
    .replaceAll(",", "");
  const isGbov = c.gbovCategories.length > 0;
  return ("/img/categories/" +
    categoryNormalized +
    "_" +
    (isGbov ? "gbov_" : "") +
    subcategoryNormalized +
    ".png"
  );
}
