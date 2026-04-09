import { categories, subcategories, attackMethods } from "@prisma/client";
import { useContext, useEffect, useRef, useState } from "react";
import CategoriesAdvancedFilterDropdownMeans from "./CategoriesAdvancedFilterDropdownMeans";
import CategoriesAdvancedFilterDropdownSubcategories from "./CategoriesAdvancedFilterDropdownSubcategories";

type Props = {
  categories: categories[];
  selectedCategoryNames: string[];
  setSelectedCategoryNames: (arr:string[]) => void;

  subcategories: subcategories[];
  selectedSubcategoryNames: string[];
  setSelectedSubcategoryNames: (val: string[]) => void;

  
  selectedGbovCategories: string[];
  setSelectedGbovCategories: (val: string[]) => void;


  attackMethods: attackMethods[];
  selectedAttackMethods: string[];
  setSelectedAttackMethods: (val: string[]) => void;
  gbovCategories: any[]; // 👈 ADD THIS
  gbovAttackMethods: any[];
};

export default function CategoriesAdvancedFilterDropdown({
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
  gbovAttackMethods,
   selectedGbovCategories,
  setSelectedGbovCategories,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");

  useEffect (() => {
    inputRef.current?.focus();
  });

  return (
    <div
      className={
        "absolute top-12 left-0 z-30" +
        " bg-white border-[2px] border-primary-light max-w-[92vw] "
      }
    >
      <input
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        ref={inputRef}
        className="w-full p-2 border-b-[2px] border-primary-light"
        type="text"
      />
      <div className="flex flex-row max-h-[300px]">
        <div style={{
                scrollbarColor: "#0B8FC3 #92D8F4",
                scrollbarWidth: "thin",
              }}
            className="basis-1/2 overflow-y-scroll" >
            <CategoriesAdvancedFilterDropdownSubcategories
                searchText={searchText}
                categories={categories}
                selectedCategoryNames={selectedCategoryNames}
                setSelectedCategoryNames={setSelectedCategoryNames}
                subcategories={subcategories}
                selectedSubcategoryNames={selectedSubcategoryNames}
                setSelectedSubcategoryNames={setSelectedSubcategoryNames}
                gbovCategories={gbovCategories} // 👈 ADD THIS
                
            />
        </div>
        <div style={{
                scrollbarColor: "#0B8FC3 #92D8F4",
                scrollbarWidth: "thin",
              }}
            className={"basis-1/2 overflow-y-scroll " +
                " border-l-[1px] border-primary-light p-4 pt-2 "}>
            <CategoriesAdvancedFilterDropdownMeans
                searchText={searchText}
                subcategories={subcategories}
                selectedCategoryNames={selectedCategoryNames}
                selectedSubcategoryNames={selectedSubcategoryNames}
                attackMethods={attackMethods}
                selectedAttackMethods={selectedAttackMethods}
                setSelectedAttackMethods={setSelectedAttackMethods}
                gbovAttackMethods={gbovAttackMethods} // 👈 ADD THIS
                gbovCategories={gbovCategories} // 👈 ADD THIS
                categories={categories}
                 selectedGbovCategories={selectedGbovCategories} 
                 setSelectedGbovCategories={setSelectedGbovCategories} 
            />
        </div>
      </div>
    </div>
  );
}
