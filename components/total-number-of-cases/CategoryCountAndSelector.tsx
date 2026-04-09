import { Case } from "@/types/cases";
import { useContext } from "react";
import { LangContext } from "../LangProvider";
import { translateCategory } from "@/util/translations";

type Props = {
  setSelectedCategory: (s: string) => void;
  categoryData: any[];
};

export default function CategoryCountAndSelector({
  categoryData,
  setSelectedCategory,
}: Props) {
  const lang = useContext(LangContext);

  return (
    <div className="flex flex-col gap-6 mt-8">
      {categoryData.map((c) => (
        <div
          onClick={() => setSelectedCategory(c.name)}
          key={c.name}
          className={
            "max-w-[400px] text-xl font-[FoundryBold] flex flex-row gap-3 items-center p-2 px-4 rounded-full " +
            " border-[2px] cursor-pointer " +
            (c.isSelected ? " border-[#92d8f4]" : "border-transparent")
          }
        >
          <div
            className="min-w-[90px] rounded-full p-2 py-1 text-white text-center"
            style={{ backgroundColor: c.color }}
          >
            {c.value}
          </div>
          <div className="text-lg uppercase leading-6">
            {translateCategory(c.name, lang)}
          </div>
        </div>
      ))}
    </div>
  );
}
