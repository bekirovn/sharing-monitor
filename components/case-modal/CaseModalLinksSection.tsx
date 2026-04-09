import { Case } from "@/types/cases";
import { useContext } from "react";
import { LangContext } from "../LangProvider";
import Link from "next/link";
import React from "react";

type Props = {
  selectedCase?: Case;
};

type FormattedLinkProps = {
  url: string;
};

const FormattedLink: React.FC<FormattedLinkProps> = ({ url }) => {
  const formattedUrl = url.split(/([/~.,\-_?#%=&])/giu);
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {formattedUrl.map((segment, index) => (
        <React.Fragment key={index}>
          {segment}
          <wbr />
        </React.Fragment>
      ))}
    </a>
  );
};

export default function CaseModalLinksSection({ selectedCase }: Props) {
  const lang = useContext(LangContext);
  return (
    <>
      {(selectedCase?.link1?.length || 0) > 0 ? (
        <>
          <div>
            <strong className="uppercase">
              {lang === "sr" ? "Linkovi" : "Links"}
            </strong>
            <ul className="">
              {
                <li key={selectedCase?.link1}>
                  <Link target="_blank" href={selectedCase?.link1 || ""}>
                    <FormattedLink url={selectedCase?.link1 || ""} />
                  </Link>
                </li>
              }
              {(selectedCase?.link2?.length || 0) > 0 &&
                <li key={selectedCase?.link2}>
                  <Link target="_blank" href={selectedCase?.link2 || ""}>
                    <FormattedLink url={selectedCase?.link2 || ""} />
                  </Link>
                </li>
              }
              {(selectedCase?.link3?.length || 0) > 0 &&
                <li key={selectedCase?.link3}>
                  <Link target="_blank" href={selectedCase?.link3 || ""}>
                    <FormattedLink url={selectedCase?.link3 || ""} />
                  </Link>
                </li>
              }
            </ul>
          </div>
          <hr />
        </>
      ) : (
        <></>
      )}
      {(selectedCase?.archivedLink1?.length || 0) > 0 ? (
        <>
          <div>
            <strong className="uppercase">
              {lang === "sr" ? "Arhivirani Linkovi" : "Archived Links"}
            </strong>
            <ul className="">
              {
                <li key={selectedCase?.archivedLink1}>
                  <Link target="_blank" href={selectedCase?.archivedLink1 || ""}>
                    {selectedCase?.archivedLink1}
                  </Link>
                </li>
              }
              {(selectedCase?.archivedLink2?.length || 0) > 0 &&
                <li key={selectedCase?.archivedLink2}>
                  <Link target="_blank" href={selectedCase?.archivedLink2 || ""}>
                    {selectedCase?.archivedLink2}
                  </Link>
                </li>
              }
              {(selectedCase?.archivedLink3?.length || 0) > 0 &&
                <li key={selectedCase?.archivedLink3}>
                  <Link target="_blank" href={selectedCase?.archivedLink3 || ""}>
                    {selectedCase?.archivedLink3}
                  </Link>
                </li>
              }
            </ul>
          </div>
          <hr />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
