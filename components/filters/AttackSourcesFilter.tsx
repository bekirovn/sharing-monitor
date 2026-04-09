import { useContext, useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { translateAttackSources } from "@/util/translations";
import { LangContext } from "@/components/LangProvider";

type Props = {
  attackSources: string[];
  selectAttackSources: string[];
  setSelectAttackSources: (val: string[]) => void;
};

export default function AttackSourcesFilter({
    attackSources,
    selectAttackSources,
    setSelectAttackSources,
}: Props) {
  const lang = useContext(LangContext);
  return (
    <MultiSelectFilter
      label={lang === "sr" ? "Izvršioci" : "perpetrators"}
      options={attackSources.sort((a,b) => {
        const ta = translateAttackSources(a, lang);
        const tb = translateAttackSources(b, lang)
        if (ta < tb) return -1;
        if (tb < ta) return 1;
        return 0;
      }).map(c => ({
        text: translateAttackSources(c, lang),
        value: c,
        isSelected: selectAttackSources.indexOf(c) !== -1,
      }))}
      onChange={(val) => setSelectAttackSources(val)}
    />
  );
}
