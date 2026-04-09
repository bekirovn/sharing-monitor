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
import CaseModalBody from "./CaseModalBody";
import CaseManagementButtons from "./CaseManagementButtons";
import useOutsideClick from "@/util/useOutsideClick";

type Props = {
  selectedCase?: Case;
  closeModal: () => void;
};

export default function DataPageCaseModal({ selectedCase, closeModal }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => {
    closeModal();
  });

  const session = useSession();
  return (
    <div>
      {selectedCase != null && (
        <>
          <div className="fixed inset-0 backdrop-blur-[2px] bg-white bg-opacity-70 z-40"></div>
          <div className="fixed inset-0 flex items-center px-2 md:px-0 justify-center z-50">
            <div
              ref={wrapperRef}
              className="border-[1px] m-2 border-black bg-white shadow-2xl rounded-lg p-7 md:p-8 w-full md:w-max"
              // width: max-content
            >
              <div
                style={{
                  scrollbarColor: "#0B8FC3 #92D8F4",
                  scrollbarWidth: "thin",
                }}
                className="max-w-3xl flex flex-row gap-2 max-h-[75vh] overflow-y-scroll"
              >
                <CaseModalBody selectedCase={selectedCase} />
              </div>
              <div className="mt-4 flex flex-row flex-wrap gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-sm tracking-wide font-bold p-2 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
                <CaseManagementButtons selectedCase={selectedCase} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
