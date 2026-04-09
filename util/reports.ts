import reportsJson from "@/data/reports.json";
import { ReportDoc } from "@/types/reports";

export function getReports(): ReportDoc[] {
  const reports: ReportDoc[] = reportsJson.sort((a, b) => {
    if (a.end > b.end) return -1;
    if (a.end < b.end) return 1;
    if (a.start < b.start) return -1;
    if (a.start > b.start) return 1;
    return 0;
  });

  return reports;
}
