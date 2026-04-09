import ReportCard from "./ReportCard";

type Props = {
  year: number;
};

export default function YearlyReport({ year }: Props) {
  return (
    <div className="">
      <h2 className="text-xl font-bold my-6">{year}</h2>
      <div className="flex flex-col gap-4">
        {/* {[4, 3, 2, 1].map((quarter) => (
          <ReportCard
            key={year + "-" + quarter}
            quarter={quarter}
            year={year}
          />
        ))} */}
      </div>
    </div>
  );
}
