import { LangContext } from "@/components/LangProvider";
import Layout from "@/components/Layout";
import DataPageFilters from "@/components/data-page/DataPageFilters";
import DataPageResults from "@/components/data-page/DataPageResults";
import { Case } from "@/types/cases";
import {
  convertDateToISODate,
  dateTypeToISOString,
} from "@/util/dateTimeHelpers";
import { hasIntersection } from "@/util/helpers";
import { generateCasesFromDbRecords } from "@/util/cases";
import { PrismaClient } from "@prisma/client";
import type {
  cases,
  categories,
  subcategories,
  attackMethods,
  attackSources,
  attackTargets,
  gbovCategories,
  gbovAttackMethods,
} from "@prisma/client";
  import { useEffect } from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";
import { DateValueType } from "react-tailwindcss-datepicker/dist/types";
import { useSession } from "next-auth/react";
import Link from "next/link";
import DataExport from "@/components/data-page/DataExport";

type Props = {
  casesSerialized: string;
  categories: categories[];
  subcategories: subcategories[];
  attackMethods: attackMethods[];
  attackSources: attackSources[];
  attackTargets: attackTargets[];
  gbovCategories: gbovCategories[];
  gbovAttackMethods: gbovAttackMethods[];
};

export default function DataPage({
  casesSerialized,
  categories,
  subcategories,
  attackMethods,
  attackSources,
  attackTargets,
  gbovCategories,
  gbovAttackMethods,
}: Props) {
  const router = useRouter();
  const selectedCaseId = router.query.caseId;
  const session = useSession();

  const categoryNames = categories
    .map((c) => c.Name)
    .filter((c) => c != null) as string[];
  const subcategoryNames = subcategories
    .map((c) => c.Name)
    .filter((c) => c != null) as string[];
  const attackSourceNames = attackSources
    .map((c) => c.Name)
    .filter((c) => c != null) as string[];
  const attackTargetNames = attackTargets
    .map((c) => c.Name)
    .filter((c) => c != null) as string[];
  const cases = generateCasesFromDbRecords(
    JSON.parse(casesSerialized) as cases[],
    categories,
    subcategories,
    attackMethods,
    attackSources,
    attackTargets,
    gbovCategories,
    gbovAttackMethods
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  


useEffect(() => {
}, [selectedCategories]);

  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [selectedAttackMethods, setSelectedAttackMethods] = useState<string[]>(
    []
  );
  const [selectedAttackSources, setSelectedAttackSources] = useState<string[]>(
    []
  );
  const [selectedAttackTargets, setSelectedAttackTargets] = useState<string[]>(
    []
  );

  const [selectedGbovCategories, setSelectedGbovCategories] = useState<string[]>([]);

  const [dateRangeValue, setDateRangeValue] = useState<DateValueType>({
    startDate: null, //new Date(earliest),
    endDate: null, //new Date(latest),
  });
  const handleDateRangeValueChange = (newValue: DateValueType) => {
    setDateRangeValue(newValue);
  };
  // const filteredCases = cases
  //   .filter(
  //     (c) =>
  //       (searchTerm == null ||
  //         searchTerm === "" ||
  //         c.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
  //         c.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !==
  //           -1) &&
  //       (selectedCategories.length === 0 ||
  //         selectedCategories.indexOf(c.category) !== -1) &&
  //       (selectedSubcategories.length === 0 ||
  //         hasIntersection(
  //           selectedSubcategories,
  //           c.subcategories.map((s) => s.subcategory)
  //         )) &&
  //       (selectedAttackMethods.length === 0 ||
  //         hasIntersection(
  //           selectedAttackMethods,
  //           c.subcategories.map((s) => s.attackMethod)
  //         )) &&
  //       (selectedAttackSources.length === 0 ||
  //         selectedAttackSources.indexOf(c.attackSource || "") !== -1) &&
  //       (selectedAttackTargets.length === 0 ||
  //         selectedAttackTargets.indexOf(c.attackTarget || "") !== -1) &&
  //       (dateRangeValue == null ||
  //         dateRangeValue.startDate == null ||
  //         ((dateTypeToISOString(dateRangeValue.startDate) as string) <=
  //           (c.start || "") &&
  //           (dateTypeToISOString(dateRangeValue.endDate) as string) >=
  //             (c.start || "")))
  //   )
  //   .sort((a, b) => {
  //     if ((a.start || 0) > (b.start || 0)) return -1;
  //     if ((b.start || 0) > (a.start || 0)) return 1;
  //     return 0;
  //   });

const filteredCases = cases.filter((c) => {
  const isRodnoFilter =
    selectedCategories.includes("Rodno zasnovano onlajn nasilje") &&
    c.GbovCategoryId1 != null &&
    c.GbovAttackMethodId1 != null;

  return (
    (searchTerm == null ||
      searchTerm === "" ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.description.toLowerCase().includes(searchTerm.toLowerCase())) &&

    // CATEGORY FILTER: bypass normal check if Rodno filter is active
    (
      isRodnoFilter ||
      selectedCategories.length === 0 ||
      selectedCategories.indexOf(c.category) !== -1
    ) &&

    // RODNO filter explicitly applied
    (!selectedCategories.includes("Rodno zasnovano onlajn nasilje") || isRodnoFilter) &&

    // (selectedSubcategories.length === 0 ||
    //   hasIntersection(
    //     selectedSubcategories,
    //     c.subcategories.map((s) => s.subcategory)
    //   )) &&
   (selectedSubcategories.length === 0 ||
  selectedSubcategories.some((selected) => {

    // ✅ NORMAL match
    const normalMatch = c.subcategories
      .map((s) => s.subcategory)
      .includes(selected);

    // ✅ find GBOV category by NAME
    const gbovCat = gbovCategories.find(g => g.Name === selected);

    // ✅ find GBOV attack method by NAME (if needed)
    //const gbovMethod = gbovAttackMethods.find(g => g.Name === selected);

    // ✅ GBOV match by ID
    const gbovMatch =
      selectedCategories.includes("Rodno zasnovano onlajn nasilje") &&
      (
        (gbovCat && c.GbovCategoryId1 === gbovCat.Id) 
        //(gbovMethod && c.GbovAttackMethodId1 === gbovMethod.Id)
      );

    return normalMatch || gbovMatch;
  })
) &&

    (selectedAttackMethods.length === 0 ||
      hasIntersection(
        selectedAttackMethods,
        c.subcategories.map((s) => s.attackMethod)
      )) &&

    (selectedAttackSources.length === 0 ||
      selectedAttackSources.indexOf(c.attackSource || "") !== -1) &&

    (selectedAttackTargets.length === 0 ||
      selectedAttackTargets.indexOf(c.attackTarget || "") !== -1) &&

    (dateRangeValue == null ||
      dateRangeValue.startDate == null ||
      dateRangeValue.endDate == null ||
      ((dateTypeToISOString(dateRangeValue.startDate) as string) <=
        (c.start || "") &&
        (dateTypeToISOString(dateRangeValue.endDate) as string) >= (c.start || "")))
  );
}).sort((a, b) => {
  if ((a.start || 0) > (b.start || 0)) return -1;
  if ((b.start || 0) > (a.start || 0)) return 1;
  return 0;
});
  
  //console.log(filteredCases.slice(0,3));
  return (
    <Layout title="DATA - MONITORING">
      <div className="max-w-5xl mx-auto">
        <DataPageFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          categories={categories}
          categoryNames={categoryNames}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          subcategories={subcategories}
          subcategoryNames={subcategoryNames}
          selectedSubcategories={selectedSubcategories}
          setSelectedSubcategories={setSelectedSubcategories}
          attackMethods={attackMethods}
          selectedAttackMethods={selectedAttackMethods}
          setSelectedAttackMethods={setSelectedAttackMethods}
          attackSources={attackSourceNames}
          selectedAttackSources={selectedAttackSources}
          setSelectedAttackSources={setSelectedAttackSources}
          attackTargets={attackTargetNames}
          selectedAttackTargets={selectedAttackTargets}
          setSelectedAttackTargets={setSelectedAttackTargets}
          dateRangeValue={dateRangeValue}
          setDateRangeValue={handleDateRangeValueChange}
          gbovCategories={gbovCategories}
          gbovAttackMethods={gbovAttackMethods} 
          selectedGbovCategories={selectedGbovCategories} 
          setSelectedGbovCategories={setSelectedGbovCategories} 

        />

        <DataPageResults
          isAuthenticated={session.status === "authenticated"}
          cases={filteredCases}
        />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient();
  const casesFromDb: cases[] = await prisma.cases.findMany({
    include: {
      categories: true,
      attackSources: true,
      attackTargets: true,
      CaseImages: true,
    },
  });

  const categories = (await prisma.categories.findMany()) as categories[];
  const attackSources =
    (await prisma.attackSources.findMany()) as attackSources[];
  const attackTargets =
    (await prisma.attackTargets.findMany()) as attackTargets[];
  const subcategories =
    (await prisma.subcategories.findMany()) as subcategories[];
  const attackMethods =
    (await prisma.attackMethods.findMany()) as attackMethods[];
  const gbovCategories =
    (await prisma.gbovCategories.findMany()) as gbovCategories[];
  const gbovAttackMethods =
    (await prisma.gbovAttackMethods.findMany()) as gbovAttackMethods[];

  return {
    props: {
      casesSerialized: JSON.stringify(casesFromDb),
      categories,
      subcategories,
      attackMethods,
      attackSources,
      attackTargets,
      gbovCategories,
      gbovAttackMethods,
    },
  };
};
