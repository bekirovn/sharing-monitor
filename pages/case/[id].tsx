import Layout from "@/components/Layout";
import DataPageCaseModal from "@/components/case-modal/DataPageCaseModal";
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
import { GetServerSideProps } from "next";
import { mapCaseFromDbRecord } from "@/util/cases";
import CaseModalBody from "@/components/case-modal/CaseModalBody";
import CaseManagementButtons from "@/components/case-modal/CaseManagementButtons";
type Props = {
  caseSerialized: string;
  categories: categories[];
  subcategories: subcategories[];
  attackMethods: attackMethods[];
  attackSources: attackSources[];
  attackTargets: attackTargets[];
  gbovCategories: gbovCategories[];
  gbovAttackMethods: gbovAttackMethods[];
};

export default function SingleCasePage({
  caseSerialized,
  categories,
  subcategories,
  attackMethods,
  attackSources,
  attackTargets,
  gbovCategories,
  gbovAttackMethods,
}: Props) {
  const selectedCase = mapCaseFromDbRecord(
    JSON.parse(caseSerialized) as cases,
    categories,
    subcategories,
    attackMethods,
    attackSources,
    attackTargets,
    gbovCategories,
    gbovAttackMethods
  );
  return (
    <Layout title="DATA - MONITORING">
      <div className="py-16 mx-auto max-w-3xl">
        <CaseModalBody selectedCase={selectedCase} />
        <div className="mt-4 flex flex-row flex-wrap gap-2">
            <CaseManagementButtons selectedCase={selectedCase} />
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = Number(params?.id) || 0;
  const prisma = new PrismaClient();
  const caseFromDb: cases = await prisma.cases.findUniqueOrThrow({
    include: {
      categories: true,
      attackSources: true,
      attackTargets: true,
    },
    where: {
      Id: id,
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
      caseSerialized: JSON.stringify(caseFromDb),
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
