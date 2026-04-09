import Link from "next/link";
import { useContext } from "react";
import { LangContext } from "../LangProvider";
import { Case } from "@/types/cases";
import { getCategoryColorMap } from "@/util/categories";
import { translateCategory, translateSubcategory } from "@/util/translations";

type Props = {
  c: Case;
};
const colorMap = getCategoryColorMap();

export default function CaseCardMobile ({c}:Props) {
    const lang = useContext(LangContext);
    return <div className="flex flex-col gap-4 justify-between py-1">
    <Link
      href={"/data?caseId=" + c.id}
      className="text-lg uppercase font-[FoundryBold] leading-tight"
    >
      {lang === "sr" ? c.title : c.titleEn || c.title}
    </Link>
    <div className="flex flex-row">
      <div
        className="w-2 border-[4px] rounded"
        style={{ borderColor: colorMap[c.category] }}
      ></div>
      <div className="pl-1.5">
        <p className="">{translateCategory(c.category, lang)}</p>
        <p className="text-sm tracking-wide">
          {translateSubcategory(
            c.subcategories[0]?.subcategory || "",
            lang
          )}
        </p>
      </div>
    </div>

    <div className="flex flex-row gap-4 justify-start font-bold uppercase ">
      <span>{c.start}</span>
      <div className="flex flex-row">
        <img src="/img/pin.svg" />
        {lang === "sr" ? "Srbija" : "Serbia"}
      </div>
    </div>
  </div>
}