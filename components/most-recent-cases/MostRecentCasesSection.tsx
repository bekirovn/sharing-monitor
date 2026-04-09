import { useContext } from "react";
import HomePageSection from "../HomePageSection";
import MostRecentCaseCard from "./MostRecentCaseCard";
import { Case } from "@/types/cases";
import { LangContext } from "@/components/LangProvider";

type Props = {
    cases: Case[]
}

export default function MostRecentCasesSection({cases}: Props) {
    const lang = useContext(LangContext);
    const top4Cases:Case[] = cases.sort((a,b) => {
        if ((a.start || 0) > (b.start || 0)) return -1;
        if ((b.start || 0) > (a.start || 0)) return 1;
        return 0;
    });

    return <HomePageSection title={lang ==="sr" ? "POSLEDNJI SLUČAJEVI" : "MOST RECENT CASES"}
            width="max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-6">
            <MostRecentCaseCard c={top4Cases[0]}/>
            <MostRecentCaseCard c={top4Cases[1]}/>
            <MostRecentCaseCard c={top4Cases[2]}/>
            <MostRecentCaseCard c={top4Cases[3]}/>
        </div>
    </HomePageSection>;
};