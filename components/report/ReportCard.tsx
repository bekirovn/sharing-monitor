import { ReportDoc } from "@/types/reports";
import Link from "next/link";

type Props = {
  lang: string;
  report: ReportDoc;
};

const quarterToMonthMapping: Record<number, string> = {
  1: "MAR",
  2: "JUN",
  3: "SEP",
  4: "DEC",
};

export default function ReportCard({ lang, report }: Props) {
  const pdfLink = report.url || `/doc/reports/${report.name}`;

  return (
    <div className="flex flex-row flex-wrap sm:flex-nowrap gap-6 mb-12">
      <div
        style={{
          backgroundImage: `url(${report.coverImg || "/img/reports_default.png"})`,
        }}
        className="min-w-[194.26px] h-[194.26px] rounded-[5px] bg-cover"
      ></div>
      <div className="flex flex-col justify-between gap-3">
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

        {/* PDF link using <a> instead of Link */}
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl uppercase font-bold"
        >
          {report.name}
        </a>

        <div className="flex flex-row gap-4 font-bold uppercase "></div>
      </div>
    </div>
  );
}