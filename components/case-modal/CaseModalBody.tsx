import { Case } from "@/types/cases";
import {
  translateAttackMethods,
  translateAttackSources,
  translateAttackTargets,
  translateCategory,
  translateSubcategory,
  translateGbovCategory,
  translateGbovMeans,
} from "@/util/translations";
import Link from "next/link";
import React, { useContext, useState, useEffect, useRef } from "react";
import { LangContext } from "@/components/LangProvider";
import CaseModalLinksSection from "./CaseModalLinksSection";
import { useSession } from "next-auth/react";
import ImageSection from "../Cloudinary/ImageSection";
import CaseModalOutcomeSection from "./CaseModalOutcomeSection";

const colorMap: Record<string, string> = {
  "Prevare, pretnje i manipulacije": "#0B8FC3",
  "Sajber incidenti": "#27264E",
  "Privatnost i zaštita podataka": "#E81E25",
  "Rodno zasnovano onlajn nasilje": "#33ee46"
};

type Props = {
  selectedCase: Case;
};

export default function CaseModalBody({ selectedCase }: Props) {
  const lang = useContext(LangContext);

  return (
    <div className="flex flex-col gap-6 justify-between">
      <h3 className="text-2xl uppercase font-[foundryBold] leading-6">
        {lang === "sr"
          ? selectedCase.title
          : selectedCase.titleEn || selectedCase.title}
      </h3>
      <div className="flex flex-row justify-start font-bold uppercase ">
        <span>
          {selectedCase.start +
            (selectedCase.end != null && selectedCase.end != ""
              ? " - " + selectedCase.end
              : "")}
        </span>
        {/* <span>Serbia</span> */}
      </div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:flex-wrap">
        <div className="basis-1 md:basis-1/2 pl-1.5 flex flex-col gap-4">
          <div className=" flex flex-row ">
            <div
              className="w-2 border-[4px] rounded"
              style={{ borderColor: colorMap[selectedCase.category] }}
            ></div>
            <div className="pl-1.5">
              <p className="tracking-wide font-[foundryBold] uppercase">
                {translateCategory(selectedCase.category, lang)}
              </p>
              <p className="text-sm tracking-wide tracking-wide">
                {Array.from(
                  new Set(
                    selectedCase.subcategories.map((cs) => cs.subcategory)
                  )
                ).map(
                  (s, i, arr) =>
                    translateSubcategory(s, lang) +
                    (i < arr.length - 1 ? ", " : "")
                )}
              </p>
            </div>
          </div>
          <div>
            <div className="leading-5">
              <strong className="uppercase">
                {lang === "sr" ? "Sredstva" : "Means"}
              </strong>
              <br />
              {Array.from(
                new Set(selectedCase.subcategories.map((cs) => cs.attackMethod))
              ).map(
                (s, i, arr) =>
                  translateAttackMethods(s, lang) +
                  (i < arr.length - 1 ? ", " : "")
              )}
            </div>
          </div>
        </div>
        {selectedCase.gbovCategories.length > 0 && (
          <div className="basis-1 md:basis-1/2 pl-1.5 flex flex-col gap-4">
            <div className="flex flex-row">
              <div className="w-[8px] rounded bg-gradient-to-br from-fuchsia-500 via-indigo-400 to-sky-500"></div>
              <div className="pl-1.5">
                <p className="font-[foundryBold] uppercase">
                  {lang === "sr"
                    ? "Rodno zasnovano onlajn nasilje"
                    : "Gender based online violence"}
                </p>
                <p className="text-sm tracking-wide tracking-wide">
                  {Array.from(
                    new Set(
                      selectedCase.gbovCategories.map((gbov) => gbov.category)
                    )
                  ).map(
                    (s, i, arr) =>
                      translateGbovCategory(s, lang) +
                      (i < arr.length - 1 ? ", " : "")
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="leading-5">
                <strong className="uppercase">
                  {lang === "sr" ? "Sredstva" : "Means"}
                </strong>
                <br />
                {Array.from(
                  new Set(
                    selectedCase.gbovCategories.map((gbov) => gbov.attackMethod)
                  )
                ).map(
                  (s, i, arr) =>
                    translateGbovMeans(s, lang) +
                    (i < arr.length - 1 ? ", " : "")
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          scrollbarColor: "#0B8FC3 #92D8F4",
          scrollbarWidth: "thin",
        }}
        className="flex-grow "
      >
        {lang === "sr"
          ? selectedCase.description
          : selectedCase.descriptionEn || selectedCase.description}
      </div>
      <hr />
      <div className=" flex flex-row gap-5">
        <div className="leading-5">
          <strong className="uppercase">
            {lang === "sr" ? "Izvršioci" : "Perpetrators"}
          </strong>
          <br />
          {translateAttackSources(selectedCase.attackSource || "", lang)}
        </div>
        <div className="leading-5">
          <strong className="uppercase">
            {lang === "sr" ? "Oštećeni" : "Injured parties"}
          </strong>
          <br />
          {translateAttackTargets(selectedCase.attackTarget || "", lang)}
        </div>

        {/* <div>
                <strong>
                    {lang === "sr" ? "SREDSTVO" : "MEANS"}
                </strong>
                <br />
                {translateAttackTargets(
                    selectedCase.attackTarget || "",
                    lang
                )}
                </div> */}
      </div>
      <hr />
      <CaseModalOutcomeSection selectedCase={selectedCase} />
      <CaseModalLinksSection selectedCase={selectedCase} />
      {selectedCase.imageUrl != null && selectedCase.imageUrl != "" && (
        <ImageSection imageUrl={selectedCase.imageUrl}
        />
         
      )}
    </div>
  );
}
