import { useSession } from "next-auth/react";
import React, { useContext, useState, useEffect, useRef } from "react";
import { LangContext } from "@/components/LangProvider";
import { Case } from "@/types/cases";
import Link from "next/link";

type Props = {
  selectedCase: Case;
};
export default function CaseManagementButtons({ selectedCase }: Props) {
  const session = useSession();
  const isAuthenticated = session.status === "authenticated";
  const lang = useContext(LangContext);
  return (
    <>
      {isAuthenticated && (
        <>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm tracking-wide font-bold p-2 rounded"
            href={"/admin/case-manager?id=" + selectedCase.id}
          >
            Edit
          </Link>
          <Link
            className="bg-blue-500 hover:bg-blue-700 text-white text-sm tracking-wide font-bold p-2 rounded"
            target="_blank"
            href={"/admin/case-manager?id=" + selectedCase.id}
          >
            Edit in new tab
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white text-sm tracking-wide font-bold p-2 rounded"
            onClick={() => {
              fetch(`/api/cases/${selectedCase.id}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  window.location.href = "/data";

                  //console.log("FROM SERVER", data);
                });
            }}
          >
            Delete case
          </button>
        </>
      )}
    </>
  );
}
