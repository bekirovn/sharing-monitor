import Layout from "@/components/Layout";
import ReportList from "@/components/report/ReportList";
import ReportPageFilters from "@/components/report/ReportPageFilters";
import { getReports } from "@/util/reports";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { LangContext } from "@/components/LangProvider";

const reports = getReports();

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const filteredReports = reports.filter(
    (r) =>
      (searchTerm == null ||
        searchTerm === "" ||
        r.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) &&
      (selectedYears.length === 0 ||
        selectedYears.some(
          (selectedYear) => r.yearTags.indexOf(selectedYear) !== -1
        ))
  );
  return (
      <Layout title="REPORTS - MONITORING">
        <div className="max-w-3xl mx-auto">
          <ReportPageFilters
            setSearchTerm={setSearchTerm}
            selectedYears={selectedYears}
            setSelectedYears={setSelectedYears}
          />
          <ReportList reports={filteredReports} />
        </div>
      </Layout>
  );
}
