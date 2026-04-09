// pages/api/cases/index.ts
import { NextApiRequest, NextApiResponse } from "next";
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

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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

    res.status(200).json({
      casesSerialized: JSON.stringify(casesFromDb),
      categories,
      subcategories,
      attackMethods,
      attackSources,
      attackTargets,
      gbovCategories,
      gbovAttackMethods,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching cases." });
  }
}
