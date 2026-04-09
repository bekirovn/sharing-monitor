import { useContext, useState } from "react";
import MultiSelectFilter from "./MultiSelectFilter";
import { translateAttackTargets } from "@/util/translations";
import { LangContext } from "../LangProvider";

type Props = {
  attackTargets: string[];
  selectAttackTargets: string[];
  setSelectAttackTargets: (val: string[]) => void;
};

export default function AttackTargetsFilter({
    attackTargets,
    selectAttackTargets,
    setSelectAttackTargets,
}: Props) {
  const lang = useContext(LangContext);
  return (
    <MultiSelectFilter
      label={lang === "sr" ? "Oštećeni" : "injured parties"}
      options={attackTargets.sort((a,b) => {
        const ta = translateAttackTargets(a, lang);
        const tb = translateAttackTargets(b, lang)
        if (ta < tb) return -1;
        if (tb < ta) return 1;
        return 0;
      }).map(c => ({
        text: translateAttackTargets(c, lang),
        value: c,
        isSelected: selectAttackTargets.indexOf(c) !== -1,
      }))}
      onChange={(val) => setSelectAttackTargets(val)}
    />
  );
}
