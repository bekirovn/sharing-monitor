import DataPageCaseModal from "../case-modal/DataPageCaseModal";
import { useContext, useEffect, useState } from "react";
import { Case } from "@/types/cases";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { translateCategory, translateSubcategory } from "@/util/translations";
import { LangContext } from "@/components/LangProvider";
import Link from "next/link";
import { useRouter } from "next/router";
import DataExport from "./DataExport";
import MostRecentCaseCard from "../most-recent-cases/MostRecentCaseCard";
import React from "react";
import CaseCardMobile from "./CaseCardMobile";

type Props = {
  isAuthenticated: boolean;
  cases: Case[];
};

export default function DataPageResults({ isAuthenticated, cases }: Props) {
  const router = useRouter();
  const lang = useContext(LangContext);
  const [perPage, setPerPage] = useState(20);
  const [page, setPage] = useState(0);
  const [prevItems, setPrevItems] = useState(cases);
  if (cases.length !== prevItems.length) {
    setPrevItems(cases);
    setPage(0);
  }
  if (
    router.query.caseId != null &&
    cases.find((c) => c.id == router.query.caseId) == null
  ) {
    router.replace(
      {
        pathname: "/data",
        query: {},
      },
      undefined,
      {
        shallow: true,
        locale: router.locale,
      }
    );
  }
  return (
    <div className="mx-auto">
      <DataPageCaseModal
        selectedCase={cases.find((c) => c.id == router.query.caseId)}
        closeModal={() => {
          router.replace(
            {
              pathname: "/data",
              query: {},
            },
            undefined,
            {
              shallow: true,
              locale: router.locale,
            }
          );
        }}
      />
      <h1 className="font-bold text-3xl my-6 flex flex-row flex-wrap justify-between">
        <span>
          {lang === "sr" ? "SLUČAJEVI" : "CASES"}&nbsp;({cases.length})
        </span>

        <div className="flex flex-row items-center">
          <DataExport cases={cases} />
          {isAuthenticated && (
            <Link
              className={"ml-2 flex flex-row items-center border-[1px] border-[#888888] " +
                " py-[3.5px] pb-[6px] px-[10px] rounded-full text-sm tracking-wide " +
                " bg-white border-[2px] border-primary-light"}
              href="/admin/case-manager"
              target="_blank"
            >+</Link>
          )}
        </div>
      </h1>
      <div
        key={"header"}
        className={
          "hidden md:grid " + 
          "p-[15px] font-bolder " +
          "bg-[rgba(146,216,244,0.2)] mx-auto justify-start gap-4 " +
          " grid-cols-[minmax(250px,1fr)_minmax(100px,1fr)_minmax(0,95px)_minmax(0,65px)] " +
          " md:grid-cols-[minmax(250px,1fr)_minmax(100px,1fr)_minmax(150px,1fr)_minmax(0,95px)_minmax(0,65px)] " +
          " lg:grid-cols-[minmax(350px,1fr)_minmax(150px,1fr)_minmax(150px,1fr)_minmax(0,95px)_minmax(0,65px)] "
        }
      >
        <div className="md:w-[250px] lg:w-[350px]">
          {lang === "sr" ? "NASLOV" : "TITLE"}
        </div>
        <div>{lang === "sr" ? "KATEGORIJA" : "CATEGORY"}</div>
        <div className="hidden md:inline-block">
          {lang === "sr" ? "POTKATEGORIJA" : "SUBCATEGORY"}
        </div>
        <div>{lang === "sr" ? "DATUM" : "DATE"}</div>
        <div>
          <span className="hidden md:inline">
            {lang === "sr" ? "DETALJI" : "DETAILS"}
          </span>
          <span className="inline md:hidden"> </span>
        </div>
      </div>
      {cases.slice(page * perPage, (page + 1) * perPage).map((c, i) => (
        <React.Fragment key={i + "-" + c.title}>
          <div
            className={
              " hidden md:grid " +
              " border-b-[1px] border-[#0B8FC3] p-[10px] px-[15px] mx-auto gap-4 " +
              " grid-cols-[minmax(250px,1fr)_minmax(100px,1fr)_minmax(0,95px)_minmax(0,65px)] " +
              " md:grid-cols-[minmax(250px,1fr)_minmax(100px,1fr)_minmax(150px,1fr)_minmax(0,95px)_minmax(0,65px)] " +
              " lg:grid-cols-[minmax(350px,1fr)_minmax(150px,1fr)_minmax(150px,1fr)_minmax(0,95px)_minmax(0,65px)] "
            }
          >
            <div className="md-[250px] lg:w-[350px]">
              {lang === "sr" ? c.title : c.titleEn}
            </div>
            <div>{translateCategory(c.category, lang)}</div>
            <div className="hidden md:flex flex-row gap-2 flex-wrap">
              {Array.from(
                new Set(c.subcategories.map((cs) => cs.subcategory))
              ).map((s, i, arr) => (
                <div key={i}>
                  {translateSubcategory(s, lang) +
                    (i < arr.length - 1 ? ", " : "")}
                </div>
              ))}
            </div>
            <div>{c.start}</div>
            <div
              className="justify-self-center cursor-pointer"
              onClick={() => {
                router.replace(
                  {
                    pathname: "/data",
                    query: {
                      ...router.query, // list all the queries here
                      caseId: c.id, // override the color property
                    },
                  },
                  undefined,
                  {
                    shallow: true,
                    locale: router.locale,
                  }
                );
              }}
            >
              <img src="/img/icon_expand.svg" />
            </div>
          </div>
          <div
            className="block md:hidden mt-8">
              <CaseCardMobile c={c} /> 
          </div>
        </React.Fragment>
      ))}
      <div className="flex flex-row justify-between font-bold bg-[rgba(146,216,244,0.2)] mx-auto p-[10px] px-[15px] mb-12">
        <span>
          {cases.length}&nbsp;{lang === "sr" ? "UKUPNO" : "TOTAL"}
        </span>
        <div className="flex flex-row justify-end gap-2">
          {page > 0 && (
            <img
              className="cursor-pointer"
              src="/img/go-to-first-page.svg"
              onClick={() => {
                if (page > 0) setPage(1);
              }}
            />
          )}
          {page > 0 && (
            <img
              className="cursor-pointer"
              src="/img/go-to-prev-page.svg"
              onClick={() => {
                if (page > 0) setPage(page - 1);
              }}
            />
          )}
          {page > 1 && (
            <div
              className="cursor-pointer bg-[#92D8F4] px-2"
              onClick={() => {
                if (page > 1) setPage(page - 2);
              }}
            >
              {page - 1}
            </div>
          )}
          {page > 0 && (
            <div
              className="cursor-pointer bg-[#92D8F4] px-2"
              onClick={() => {
                if (page > 0) setPage(page - 1);
              }}
            >
              {page}
            </div>
          )}
          {page < Math.floor(cases.length / perPage) && (
            <div className="text-gray-400 bg-gray-200 px-2">{page + 1}</div>
          )}
          {page < Math.floor(cases.length / perPage) && (
            <div
              className="cursor-pointer bg-[#92D8F4] px-2"
              onClick={() => {
                if (page < Math.floor(cases.length / perPage))
                  setPage(page + 1);
              }}
            >
              {page + 2}
            </div>
          )}
          {page + 1 < Math.floor(cases.length / perPage) && (
            <div
              className="cursor-pointer bg-[#92D8F4] px-2"
              onClick={() => {
                if (page + 1 < Math.floor(cases.length / perPage))
                  setPage(page + 2);
              }}
            >
              {page + 3}
            </div>
          )}
          {page < Math.floor(cases.length / perPage) && (
            <img
              className="cursor-pointer"
              src="/img/go-to-next-page.svg"
              onClick={() => {
                if (page < Math.floor(cases.length / perPage))
                  setPage(page + 1);
              }}
            />
          )}
          {page < Math.floor(cases.length / perPage) && (
            <img
              className="cursor-pointer"
              src="/img/go-to-last-page.svg"
              onClick={() => {
                if (page < Math.floor(cases.length / perPage))
                  setPage(Math.floor(cases.length / perPage));
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
