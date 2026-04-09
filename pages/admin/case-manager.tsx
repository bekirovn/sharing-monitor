import { GetServerSideProps, GetServerSidePropsContext } from "next";
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
import { getSession } from "next-auth/react";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Layout from "@/components/Layout";
import AddEditCaseForm from "@/components/admin/AddEditCaseForm";
import { useContext, useState } from "react";
import { Case, CaseEntity } from "@/types/cases";
import { convertDateToISODate } from "@/util/dateTimeHelpers";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { DefaultAdapter } from "next-auth/adapters";
import { LangContext } from "@/components/LangProvider";
import { useRouter } from "next/router";

type Props = {
  caseStringified: string;
  categories: categories[];
  subcategories: subcategories[];
  attackSources: attackSources[];
  attackTargets: attackTargets[];
  attackMethods: attackMethods[];
  gbovCategories: gbovCategories[];
  gbovAttackMethods: gbovAttackMethods[];
};

export default function CaseManagerPage({
  caseStringified,
  categories,
  subcategories,
  attackSources,
  attackTargets,
  attackMethods,
  gbovCategories,
  gbovAttackMethods
}: Props) {
  const router = useRouter()
  const lang = router.locale;
  const title = lang === "sr" ? "DODAJ / PROMENI SLUČAJ" : "ADD / EDIT CASE";

  const initialFormData: cases = {
    Id: 0,
    Title: "",
    Description: "",
    TitleEn: "",
    DescriptionEn: "",
    StartDate: new Date(),
    EndDate: null,
    AttackTargetId: 1,
    AttackSourceId: 1,
    SubcategoryId1: null,
    SubcategoryId2: null,
    SubcategoryId3: null,
    AttackMethodId1: null,
    AttackMethodId2: null,
    AttackMethodId3: null,
    GbovCategoryId1: null,
    GbovCategoryId2: null,
    GbovAttackMethodId1: null,
    GbovAttackMethodId2: null,
    CategoryId: 1,
    Outcome: "",
    Link1: "",
    Link2: "",
    Link3: "",
    ArchivedLink1: "",
    ArchivedLink2: "",
    ArchivedLink3: "",
    Comment: "",
    Period: "",
    imageId: "",
    imageUrl: ""
  };
  //const caseData = (JSON.parse(caseStringified) || initialFormData) as cases;
  const parsed = JSON.parse(caseStringified);

const caseData: cases = parsed
  ? {
      ...parsed,
      StartDate: parsed.StartDate ? new Date(parsed.StartDate) : null,
      EndDate: parsed.EndDate ? new Date(parsed.EndDate) : null,
    }
  : initialFormData;
  return (
    <Layout title={title}>
      <div className="max-w-3xl mx-auto py-10 mx-auto bg-white text-black">
        <h1 className="max-w-3xl mx-auto text-3xl mb-7">{title}</h1>
        <AddEditCaseForm
          caseData={caseData}
          categories={categories}
          subcategories={subcategories}
          attackSources={attackSources}
          attackTargets={attackTargets}
          attackMethods={attackMethods}
          gbovCategories={gbovCategories}
          gbovAttackMethods={gbovAttackMethods}
        />
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // const token = req.headers.authorization;
  const req = context.req;
  const res = context.res;

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const caseId = Number(context.query.id) || undefined;
  const prisma = new PrismaClient();

  const c = caseId
    ? ((await prisma.cases.findFirst({
        where: {
          Id: caseId,
        },
      })) as cases)
    : null;

  const categories = (await prisma.categories.findMany()) as categories[];
  const subcategories =
    (await prisma.subcategories.findMany()) as subcategories[];
  const attackSources =
    (await prisma.attackSources.findMany()) as attackSources[];
  const attackTargets =
    (await prisma.attackTargets.findMany()) as attackTargets[];
  const attackMethods =
    (await prisma.attackMethods.findMany()) as attackMethods[];
  const gbovCategories =
    (await prisma.gbovCategories.findMany()) as gbovCategories[];
  const gbovAttackMethods =
    (await prisma.gbovAttackMethods.findMany()) as gbovAttackMethods[];

  return {
    props: {
      caseStringified: JSON.stringify(c),
      categories,
      subcategories,
      attackSources,
      attackTargets,
      attackMethods,
      gbovCategories,
      gbovAttackMethods,
    },
  };
};
