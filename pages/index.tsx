import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import MostRecentCasesSection from "@/components/most-recent-cases/MostRecentCasesSection";
import ExamplePieChart from "@/components/PieChart";
import TimelineSection from "@/components/timeline-chart/TimelineSection";
import TotalNumberOfCases from "@/components/total-number-of-cases/TotalNumberOfCasesSection";
import ReportSection from "@/components/report/ReportSection";
const inter = Inter({ subsets: ["latin"] });
import {
  GetServerSideProps,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next";
import { getSession, useSession } from "next-auth/react";
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
import { PrismaClient } from "@prisma/client";
import { Case } from "@/types/cases";
import { useRouter } from "next/router";
import { convertDateToISODate } from "@/util/dateTimeHelpers";
import { createContext, useContext, useState } from "react";
import { generateCasesFromDbRecords } from "@/util/cases";
import { LangContext } from "@/components/LangProvider";
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

export default function Home({
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

  return (
    <Layout>
      <TimelineSection cases={cases} categories={categoryNames} />
      <div className="flex flex-row justify-center">
        <DataExport cases={cases} />
      </div>
      <TotalNumberOfCases cases={cases} />
      <MostRecentCasesSection cases={cases} />
      <ReportSection />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<Props>> => {
  // const token = req.headers.authorization;
  const prisma = new PrismaClient();
  const casesFromDb: cases[] = await prisma.cases.findMany({
    include: {
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
