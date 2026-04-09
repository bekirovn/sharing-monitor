import { ReportDoc } from "@/types/reports";
import ReportCard from "./ReportCard";
import { LangContext } from "@/components/LangProvider";
import { useContext } from "react";

type Props = {
  reports: ReportDoc[];
};

export default function ReportList({ reports }: Props) {
  const lang = useContext(LangContext);

  return (
    <div className="my-6">
      {reports.map((report) => (
        <ReportCard key={report.name} lang={lang} report={report} />
      ))}
    </div>
  );
}