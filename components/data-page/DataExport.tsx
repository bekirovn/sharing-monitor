import { Case } from "@/types/cases";
import React, { useContext } from "react";
import { LangContext } from "../LangProvider";
import { translateAttackMethods, translateAttackSources, translateAttackTargets, translateCategory, translateGbovCategory, translateGbovMeans, translateSubcategory } from "@/util/translations";

type Props = {
  cases: Case[];
};

function DataExport({ cases }: Props) {
  const lang = useContext(LangContext);
  const headerRow = [
        lang == "sr" ? "OPIS" : "DESCRIPTION",
        lang == "sr" ? "NASLOV" : "TITLE",
        lang == "sr" ? "POČETAK" : "START",
        lang == "sr" ? "KRAJ" : "END",
        lang == "sr" ? "OŠTEĆENI" : "INJURED PARTY",
        lang == "sr" ? "IZVRŠIOCI" : "PERPETRAITOR",
        lang == "sr" ? "KATEGORIJA" : "CATEGORY",
        lang == "sr" ? "POTKATEGORIJA " : "SUBCATEGORY",
        lang == "sr" ? "SREDSTVO" :"MEANS",
        lang == "sr" ? "POTKATEGORIJA 2" : "SUBCATEGORY 2",
        lang == "sr" ? "SREDSTVO 2" : "MEANS 2",
        lang == "sr" ? "POTKATEGORIJA 3" : "SUBCATEGORY 3",
        lang == "sr" ? "SREDSTVO 3" : "MEANS 3",
        lang == "sr" ? "GBOV KATEGORIJA " : "GBOV CATEGORY",
        lang == "sr" ? "GBOV SREDSTVO" :"GBOV MEANS",
        lang == "sr" ? "GBOV KATEGORIJA 2" : "GBOV CATEGORY 2",
        lang == "sr" ? "GBOV SREDSTVO 2" :"GBOV MEANS 2",
        "LINK",
        "LINK 2",
        "LINK 3",
        lang == "sr" ? "ARHIVIRANI LINK" : "ARCHIVED LINK",
        lang == "sr" ? "ARHIVIRANI LINK 2" : "ARCHIVED LINK 2",
        lang == "sr" ? "ARHIVIRANI LINK 3" : "ARCHIVED LINK 3",
        lang == "sr" ? "ISHOD" :"OUTCOME"
    ];

  function createRow(c: Case) {
    return [
        lang == "sr" ? c.description : c.descriptionEn,
        lang == "sr" ? c.title : c.titleEn,
        c.start || "",
        c.end || "",
        translateAttackTargets(c.attackTarget || "", lang),
        translateAttackSources(c.attackSource || "", lang),
        translateCategory(c.category, lang),
        translateSubcategory(c.subcategories[0]?.subcategory || "", lang),
        translateAttackMethods(c.subcategories[0]?.attackMethod || "", lang),
        translateSubcategory(c.subcategories[1]?.subcategory || "", lang),
        translateAttackMethods(c.subcategories[1]?.attackMethod || "", lang),
        translateSubcategory(c.subcategories[2]?.subcategory || "", lang),
        translateAttackMethods(c.subcategories[2]?.attackMethod || "", lang),
        translateGbovCategory(c.gbovCategories[0]?.category || "", lang),
        translateGbovMeans(c.gbovCategories[0]?.attackMethod || "", lang),
        translateGbovCategory(c.gbovCategories[1]?.category || "", lang),
        translateGbovMeans(c.gbovCategories[1]?.attackMethod || "", lang),
        c.link1,
        c.link2,
        c.link3,
        c.archivedLink1,
        c.archivedLink2,
        c.archivedLink3,
        c.outcome,
    ].map(cell => '"' + (cell || "").replace(/"/g, '""') + '"');
  }

  function convertToCSV(data: Record<string, any>[]) {
    const csv = headerRow.join(",") + "\n" +
        data.map((row) => Object.values(row).join(",")).join("\n");
    //);
    return `data:text/csv;charset=utf-8,${encodeURIComponent(csv)}`;
  }

  function handleExportClick() {
    const data: Record<string, any>[] = cases.map(createRow); // Replace with your data
    // todo: translate headers
    const csvData = convertToCSV(data);
    const link = document.createElement("a");
    link.href = csvData;
    link.download = "data.csv";
    link.click();
  }

  return (
    <div className="text-center">
      <button className={"relative cursor-pointer flex flex-row justify-around " +
        " items-center text-sm tracking-wide font-bold py-2 px-5 " +
        " rounded-[20px] min-w-auto min-w-[150px] " + 
        " bg-white border-[2px] border-primary-light"}
        onClick={handleExportClick}>
        {lang == "sr" ? "PREUZMI" : "DOWNLOAD"}
        <img className="h-4" src="/img/fe_download.svg" />
      </button>
    </div>
  );
}

export default DataExport;
