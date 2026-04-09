import { Case } from "@/types/cases";
import { useContext } from "react";
import { LangContext } from "../LangProvider";

type Props = {
  selectedCase?: Case;
};

export default function CaseModalOutcomeSection({ selectedCase }: Props) {
  const lang = useContext(LangContext);
  return (
    <>
      {selectedCase?.outcome != null && selectedCase.outcome != "" ? (
        <div>
          <div className="leading-5">
            <strong className="uppercase">
              {lang === "sr" ? "Ishod" : "Outcome"}
            </strong>
            <br />
            {selectedCase.outcome}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
