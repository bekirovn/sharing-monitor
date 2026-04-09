import HomePageSection from "../HomePageSection";
import { getReports } from "@/util/reports";
import { useContext } from "react";
import { LangContext } from "@/components/LangProvider";

const reports = getReports().slice(0, 3);

export default function ReportSection() {
  const lang = useContext(LangContext);

  return (
    <HomePageSection
      title={lang === "sr" ? "IZVEŠTAJI" : "REPORTS (IN SERBIAN)"}
      width="max-w-5xl"
    >
      <div className="grid grid-cols-1 auto-rows-fr md:grid-cols-3 gap-6 xl:gap-12 mt-2">
        {reports.map((report) => {
          const pdfLink = report.url || `/doc/reports/${report.name}`;

          return (
            <div
              key={report.name}
              className="col-span-1 flex flex-col justify-start gap-4"
            >
              <div
                style={{
                  backgroundImage: `url(${
                    report.coverImg || "/img/reports_default.png"
                  })`,
                }}
                className="h-48 rounded-[5px] bg-cover"
              ></div>

              {/* PDF link using <a> */}
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg uppercase font-[FoundryBold] leading-tight"
              >
                {report.name}
              </a>

              <div className="flex flex-row justify-between font-bold uppercase ">
                <div className="flex flex-row gap-1">
                  {report.yearTags.map((year) => (
                    <span
                      key={year}
                      className="bg-[#0B8FC3] text-white border-[1px] p-1 px-3 rounded-full w-auto self-start text-sm tracking-wide font-bold"
                    >
                      {year}
                    </span>
                  ))}
                </div>
                <span>{lang === "sr" ? "Srbija" : "Serbia"}</span>
              </div>
            </div>
          );
        })}
      </div>
    </HomePageSection>
  );
}