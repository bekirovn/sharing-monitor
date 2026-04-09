import { categories, subcategories, attackMethods } from "@prisma/client";
import { useContext } from "react";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { LangContext } from "../LangProvider";
import { translateAttackMethods, translateAttackSources, translateAttackTargets, translateCategory, translateSubcategory } from "@/util/translations";
import AppliedFiltersSingleEntity from "./AppliedFiltersSingleEntity";

type Props = {
  searchTerm: string;
  setSearchTerm: (s: string) => void;

  categories: categories[];
  categoryNames: string[];
  selectedCategories: string[];
  setSelectedCategories: (val: string[]) => void;

  subcategories: subcategories[];
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
};

export default function AppliedFilters({
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
}: Props) {
  const lang = useContext(LangContext);
  return <>{(searchTerm.length > 0 ||
    selectedCategories.length > 0 ||
    selectedSubcategories.length > 0 ||
    selectedAttackMethods.length > 0 ||
    selectedAttackSources.length > 0 ||
    selectedAttackTargets.length > 0 //||
    // dateRangeValue?.startDate != null ||
    // dateRangeValue?.endDate != null
    ) && ( 
    <div className="my-8 flex flex-col gap-1">
      <h3 className="py-2 text-lg font-[FoundryBold] uppercase flex flex-col flex-wrap gap-2 justify-between items-start">
        {lang === "sr" ? "PRIMENJENI FILTERI" : "APPLIED FILTERS"}
        <span onClick={() => {
          setSearchTerm("");
          setSelectedCategories([]);
          setSelectedSubcategories([]);
          setSelectedAttackMethods([]);
          setSelectedAttackSources([]);
          setSelectedAttackTargets([]);
          setDateRangeValue({
            startDate: null, //new Date(earliest),
            endDate: null, //new Date(latest),
          });
        }}
         className={"cursor-pointer flex flex-row items-center p-1 pr-2" +
         " text-xs border-[2px] border-red-400 rounded-[15px]"}>
          <img src="/img/x.png" className="h-4" />
          {lang === "sr" ? "obriši sve filtere" : "remove all filter"}
        </span>
      </h3>
      <AppliedFiltersSingleEntity
        selected={searchTerm != "" ? [searchTerm] : []}
        setSelected={() => setSearchTerm("")}
        translate={(term: string) => term}
        label={lang === "sr" ? "PRETRAGA TEKSTA" : "FULL-TEXT SEARCH"}
      />
      <AppliedFiltersSingleEntity
        selected={selectedCategories}
        setSelected={setSelectedCategories}
        translate={(term: string) => translateCategory(term, lang)}
        label={lang === "sr" ? "KATEGORIJE" : "CATEGORIES"}
      />

      <AppliedFiltersSingleEntity
        selected={selectedSubcategories}
        setSelected={setSelectedSubcategories}
        translate={(term: string) => translateSubcategory(term, lang)}
        label={lang === "sr" ? "POTKATEGORIJE" : "SUBCATEGORIES"}
      />
      <AppliedFiltersSingleEntity
        selected={selectedAttackMethods}
        setSelected={setSelectedAttackMethods}
        translate={(term: string) => translateAttackMethods(term, lang)}
        label={lang === "sr" ? "SREDSTVA NAPADA" : "MEANS OF ATTACK"}
      />
      <AppliedFiltersSingleEntity
        selected={selectedAttackSources}
        setSelected={setSelectedAttackSources}
        translate={(term: string) => translateAttackSources(term, lang)}
        label={lang === "sr" ? "Izvršioci" : "Perpetrators"}
      />
      <AppliedFiltersSingleEntity
        selected={selectedAttackTargets}
        setSelected={setSelectedAttackTargets}
        translate={(term: string) => translateAttackTargets(term, lang)}
        label={lang === "sr" ? "Oštećeni" : "Injured parties"}
      />
      {/* <AppliedFiltersSingleEntity
        selected={
          dateRangeValue != null ?
            ([
              ...(dateRangeValue.startDate ?
                [(lang === "sr" ? "od" : "from") + " " + dateRangeValue.startDate] : []),
              ...(dateRangeValue.endDate ?
                [(lang === "sr" ? "do" : "to") + " "  + dateRangeValue.endDate] : []),
            ])
             :
            []
        }
        setSelected={(restOfSelected) => {
          if (restOfSelected.length === 0) {
            setDateRangeValue({
              startDate: null, //new Date(earliest),
              endDate: null, //new Date(latest),
            });
          } else if (restOfSelected[0].split(" ")[0] == "from" ||
                    restOfSelected[0].split(" ")[0] == "od") {
            setDateRangeValue({
              startDate: null,
              endDate: dateRangeValue?.endDate || null
            })
          } else {
            setDateRangeValue({
              startDate: dateRangeValue?.startDate || null,
              endDate: null
            })
          }
        }}
        translate={(term: string) => term}
        label={lang === "sr" ? "Datumi" : "Dates"}
      /> */}
      
    </div>
)}</>;
}
