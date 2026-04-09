import { Case } from "@/types/cases";
import {
  convertDateToISODate,
  getDateFromExcelSerial,
} from "./dateTimeHelpers";
import type {
  cases,
  categories,
  subcategories,
  attackMethods,
  attackSources,
  attackTargets,
  gbovCategories,
  gbovAttackMethods,
  CaseImages,
} from "@prisma/client";

export function generateCasesFromDbRecords(
  casesFromDb: any[],
  categories: categories[],
  subcategories: subcategories[],
  attackMethods: attackMethods[],
  attackSources: attackSources[],
  attackTargets: attackTargets[],
  gbovCategories: gbovCategories[],
  gbovAttackMethods: gbovAttackMethods[]
): Case[] {

  const cases: Case[] = casesFromDb.map((c) => ({
    id: c.Id + "",
    start: convertDateToISODate(c.StartDate),
    end: convertDateToISODate(c.EndDate),
    title: c.Title || "",
    titleEn: c.TitleEn || "",
    description: c.Description || "",
    descriptionEn: c.DescriptionEn || "",
    category: categories.find((r) => r.Id == c.CategoryId)?.Name || "",
    categoryId: c.CategoryId || 0,
    attackSource:
      attackSources.find((r) => r.Id == c.AttackSourceId)?.Name || "",
    attackSourceId: c.AttackSourceId || 0,
    attackTarget:
      attackTargets.find((r) => r.Id == c.AttackTargetId)?.Name || "",
    attackTargetId: c.AttackTargetId || 0,
    SubcategoryId1: c.SubcategoryId1,
    SubcategoryId2: c.SubcategoryId2,
    SubcategoryId3: c.SubcategoryId3,
    AttackMethodId1: c.AttackMethodId1,
    AttackMethodId2: c.AttackMethodId2,
    AttackMethodId3: c.AttackMethodId3,
    GbovCategoryId1: c.GbovCategoryId1,
    GbovCategoryId2: c.GbovCategoryId2,
    GbovAttackMethodId1: c.GbovAttackMethodId1,
    GbovAttackMethodId2: c.GbovAttackMethodId2,
    subcategories: [
      {
        subcategory:
          subcategories.find((s) => s.Id == c.SubcategoryId1)?.Name || "",
        attackMethod:
          attackMethods.find((s) => s.Id == c.AttackMethodId1)?.Name || "",
      },
      {
        subcategory:
          subcategories.find((s) => s.Id == c.SubcategoryId2)?.Name || "",
        attackMethod:
          attackMethods.find((s) => s.Id == c.AttackMethodId2)?.Name || "",
      },
      {
        subcategory:
          subcategories.find((s) => s.Id == c.SubcategoryId3)?.Name || "",
        attackMethod:
          attackMethods.find((s) => s.Id == c.AttackMethodId3)?.Name || "",
      },
    ].filter((cs) => cs.subcategory != ""),
    gbovCategories: [
      {
        category:
          gbovCategories.find((s) => s.Id == c.GbovCategoryId1)?.Name || "",
        attackMethod:
          gbovAttackMethods.find((s) => s.Id == c.GbovAttackMethodId1)?.Name ||
          "",
      },
      {
        category:
          gbovCategories.find((s) => s.Id == c.GbovCategoryId2)?.Name || "",
        attackMethod:
          gbovAttackMethods.find((s) => s.Id == c.GbovAttackMethodId2)?.Name ||
          "",
      },
    ].filter((cs) => cs.category != ""),
    link1: c.Link1,
    link2: c.Link2,
    link3: c.Link3,
    archivedLink1: c.ArchivedLink1,
    archivedLink2: c.ArchivedLink2,
    archivedLink3: c.ArchivedLink3,
    outcome: c.Outcome,
    comment: c.Comment,
    imageUrl: c.imageUrl,
    imageUrls: c.CaseImages?.map((r:CaseImages) => r.ImageUrl)
  }));
  return cases;
}

export function mapCaseFromDbRecord(
  c: any,
  categories: categories[],
  subcategories: subcategories[],
  attackMethods: attackMethods[],
  attackSources: attackSources[],
  attackTargets: attackTargets[],
  gbovCategories: gbovCategories[],
  gbovAttackMethods: gbovAttackMethods[]
): Case {
  const mappedCase: Case = {
    id: c.Id + "",
    start: convertDateToISODate(c.StartDate),
    end: convertDateToISODate(c.EndDate),
    title: c.Title || "",
    titleEn: c.TitleEn || "",
    description: c.Description || "",
    descriptionEn: c.DescriptionEn || "",
    category: categories.find((r) => r.Id == c.CategoryId)?.Name || "",
    categoryId: c.CategoryId || 0,
    attackSource:
      attackSources.find((r) => r.Id == c.AttackSourceId)?.Name || "",
    attackSourceId: c.AttackSourceId || 0,
    attackTarget:
      attackTargets.find((r) => r.Id == c.AttackTargetId)?.Name || "",
    attackTargetId: c.AttackTargetId || 0,
    SubcategoryId1: c.SubcategoryId1,
    SubcategoryId2: c.SubcategoryId2,
    SubcategoryId3: c.SubcategoryId3,
    AttackMethodId1: c.AttackMethodId1,
    AttackMethodId2: c.AttackMethodId2,
    AttackMethodId3: c.AttackMethodId3,
    GbovCategoryId1: c.GbovCategoryId1,
    GbovCategoryId2: c.GbovCategoryId2,
    GbovAttackMethodId1: c.GbovAttackMethodId1,
    GbovAttackMethodId2: c.GbovAttackMethodId2,
    subcategories: [
      {
        subcategory:
          subcategories.find((s) => s.Id == c.SubcategoryId1)?.Name || "",
        attackMethod:
          attackMethods.find((s) => s.Id == c.AttackMethodId1)?.Name || "",
      },
      {
        subcategory:
          subcategories.find((s) => s.Id == c.SubcategoryId2)?.Name || "",
        attackMethod:
          attackMethods.find((s) => s.Id == c.AttackMethodId2)?.Name || "",
      },
      {
        subcategory:
          subcategories.find((s) => s.Id == c.SubcategoryId3)?.Name || "",
        attackMethod:
          attackMethods.find((s) => s.Id == c.AttackMethodId3)?.Name || "",
      },
    ].filter((cs) => cs.subcategory != ""),
    gbovCategories: [
      {
        category:
          gbovCategories.find((s) => s.Id == c.GbovCategoryId1)?.Name || "",
        attackMethod:
          gbovAttackMethods.find((s) => s.Id == c.GbovAttackMethodId1)?.Name ||
          "",
      },
      {
        category:
          gbovCategories.find((s) => s.Id == c.GbovCategoryId2)?.Name || "",
        attackMethod:
          gbovAttackMethods.find((s) => s.Id == c.GbovAttackMethodId2)?.Name ||
          "",
      },
    ].filter((cs) => cs.category != ""),
    link1: c.Link1,
    link2: c.Link2,
    link3: c.Link3,
    archivedLink1: c.ArchivedLink1,
    archivedLink2: c.ArchivedLink2,
    archivedLink3: c.ArchivedLink3,
    outcome: c.Outcome,
    comment: c.Comment,
    imageUrl: c.imageUrl,
    imageUrls: c.CaseImages?.map((r:CaseImages) => r.ImageUrl)
  };
  return mappedCase;
}
