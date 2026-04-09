import { Case } from "@/types/cases";
import {
  translateAttackSources,
  translateAttackTargets,
  translateCategory,
} from "@/util/translations";
import Link from "next/link";
import { useContext } from "react";
import { LangContext } from "./LangProvider";

type Props = {
  cases: Case[];
  selectedCategory: string;
  categoryData: any;
};

const t: any = {
  MOST_COMMON_ACTORS_DESCRIPTION: {
    en: "Most common actors involved in the cases across all categories.",
    sr: "Most common actors involved in the cases across all categories.",
  },
  METHODOLOGY_LINK: {
    en: "See the full methodology",
    sr: "Pogledajte celokupnu metodologiju",
  },
  REPORTS_LINK: {
    en: "REPORTS",
    sr: "IZVEŠTAJI",
  },
};

export default function TimeLineFilters({
  cases,
  selectedCategory,
  categoryData,
}: Props) {
  const lang = useContext(LangContext);
  const categoryColor = categoryData.find(
    (c: any) => c.name === selectedCategory
  ).color;
  const perpetratorCount: Record<string, number> = {};
  const injuredPartyCount: Record<string, number> = {};
  const categoryCases = cases.filter((c) => c.category === selectedCategory);
  categoryCases.forEach((c) => {
    if (perpetratorCount[c?.attackSource || "N/A"] == null) {
      perpetratorCount[c?.attackSource || "N/A"] = 1;
    } else {
      perpetratorCount[c?.attackSource || "N/A"]++;
    }
    if (injuredPartyCount[c?.attackTarget || "N/A"] == null) {
      injuredPartyCount[c?.attackTarget || "N/A"] = 1;
    } else {
      injuredPartyCount[c?.attackTarget || "N/A"]++;
    }
  });

  const top3Perpetrators = Object.entries(perpetratorCount)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (b[1] > a[1]) return 1;
      return 0;
    })
    .slice(0, 3)
    .map((p) => p[0]);
  const top3InjuredParties = Object.entries(injuredPartyCount)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (b[1] > a[1]) return 1;
      return 0;
    })
    .slice(0, 3)
    .map((p) => p[0]);

  return (
    <div className="text-sm tracking-wide">
      <p className="text-base">
        {lang === "sr"
          ? "Najčešći akteri za kategoriju: "
          : "Most common actors for category: "}
        <span
          className="uppercase font-[FoundryBold]"
 
        >
          {translateCategory(selectedCategory, lang)}
        </span>
      </p>
      <Link className="text-primary" href="/methodology">
        {lang === "sr" ? "Vidi metodologiju" : "See the full methodology"}
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="col-span-1 flex flex-col justify-start gap-4">
          <h3 className="font-base font-bold uppercase">
            {lang === "sr" ? "Izvršioci" : "Perpetrators"}
          </h3>
          {top3Perpetrators.map((p) => (
            <div key={"perpetrators:" + p}>
              <div className="w-full h-[14px] border-[1px] border-primary-light rounded-full h-3">
                <div
                  className="h-3 rounded-full"
                  style={{
                    backgroundColor: categoryColor,
                    width: (100 * perpetratorCount[p]) / categoryCases.length + "%",
                  }}
                ></div>
              </div>
              <p className="uppercase h-10">
                {translateAttackSources(p, lang)}&nbsp;({perpetratorCount[p]}/
                {categoryCases.length})
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col justify-start gap-4">
          <h3 className="font-base font-bold uppercase">
            {lang === "sr" ? "Oštećeni" : "Injured parties"}
          </h3>
          {top3InjuredParties.map((p) => (
            <div key={"injured:" + p}>
              <div className="w-full h-[14px] border-[1px] border-primary-light rounded-full h-3">
                <div
                  className="h-3 rounded-full"
                  style={{
                    backgroundColor: categoryColor,
                    width: (100 * injuredPartyCount[p]) / categoryCases.length + "%",
                  }}
                ></div>
              </div>
              <p className="uppercase h-10">
                {translateAttackTargets(p, lang)}&nbsp;({injuredPartyCount[p]}/
                {categoryCases.length})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
