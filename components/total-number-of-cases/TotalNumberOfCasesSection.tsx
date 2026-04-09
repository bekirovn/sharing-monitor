import HomePageSection from "../HomePageSection";
import ExamplePieChart from "../PieChart";
import ActorsSection from "../ActorsSection";
import { Case } from "@/types/cases";
import ExamplePieChartEn from "../PieChartEn";
import { useContext, useState } from "react";
import { LangContext } from "@/components/LangProvider";
import CategoryCountAndSelector from "./CategoryCountAndSelector";
import { getCategoryColorMap } from "@/util/categories";

type Props = {
  cases: Case[];
};

export default function TotalNumberOfCases({ cases }: Props) {
  const lang = useContext(LangContext);

  const [selectedCategory, setSelectedCategory] = useState("Prevare, pretnje i manipulacije");
  const colorMap = getCategoryColorMap();
  const title = `${
    lang === "sr" ? "UKUPAN BROJ SLUČAJEVA" : "TOTAL NUMBER OF CASES"
  }: ${cases.length}`;
  const categoryData = [
    {
      name: "Sajber incidenti",
      value: getTotalCasesPerCategory(cases, "Sajber incidenti"),
      color: colorMap["Sajber incidenti"],
      isSelected: selectedCategory === "Sajber incidenti",
    },
    {
      name: "Privatnost i zaštita podataka",
      value: getTotalCasesPerCategory(cases, "Privatnost i zaštita podataka"),
      color: colorMap["Privatnost i zaštita podataka"],
      isSelected: selectedCategory === "Privatnost i zaštita podataka",
    },
    {
      name: "Prevare, pretnje i manipulacije",
      value: getTotalCasesPerCategory(cases, "Prevare, pretnje i manipulacije"),
      color: colorMap["Prevare, pretnje i manipulacije"],
      isSelected: selectedCategory === "Prevare, pretnje i manipulacije",
    },
    //  {
    //   name: "Rodno zasnovano onlajn nasilje",
    //   value: getCasesWithGbov1Set(cases),
    //   color: colorMap["Rodno zasnovano onlajn nasilje"],
    //   isSelected: selectedCategory === "Rodno zasnovano onlajn nasilje",
    // },
  ];
  return (
    <div className="max-w-5xl mx-auto flex flex-row gap-4 flex-wrap md:flex-nowrap">
      <HomePageSection title={title} width="basis-full">
        <div>
          <div className="overflow-hidden w-full bg-primary-light rounded-full h-3 flex flex-row">
            {categoryData.map((c) => (
              <div
                key={c.name}
                className="h-3"
                style={{
                  width: (100 * c.value) / cases.length + "%",
                  backgroundColor: c.color,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 flex-wrap md:flex-nowrap">
          <HomePageSection
            title={lang === "sr" ? "KATEGORIJE" : "CATEGORIES"}
            width="basis-full md:basis-1/2"
          >
            <CategoryCountAndSelector
              setSelectedCategory={setSelectedCategory}
              categoryData={categoryData}
            />
          </HomePageSection>
          <HomePageSection
            title={lang === "sr" ? "AKTERI" : "ACTORS"}
            width="basis-full md:basis-1/2"
          >
            <ActorsSection
              cases={cases}
              selectedCategory={selectedCategory}
              categoryData={categoryData}
            />
          </HomePageSection>
        </div>
      </HomePageSection>
    </div>
  );
}

function getTotalCasesPerCategory(cases: Case[], category: string): number {
  return cases.filter((c) => c.category === category).length;
}

function getCasesWithGbov1Set(cases: Case[]): number {
  return cases.filter(
    (c) => c.GbovCategoryId1 != null && c.GbovAttackMethodId1 != null
  ).length;
}
