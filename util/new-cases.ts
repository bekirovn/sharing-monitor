import { Case } from "@/types/cases";
import { newSrCases } from "@/util/new-cases-sr-temp";
import { newEnCases } from "@/util/new-cases-en-temp";

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

// export function getNewCases(): Case[] {
//   const newCases: Case[] = newSrCases.map((c, i) => ({
//     id: (750 + i).toString(),
//     title: c[1],
//     titleEn: newEnCases[i][1],
//     description: c[0],
//     descriptionEn: newEnCases[i][0],
//     start: c[2],
//     end: c[3] || null,
//     category: c[6],
//     attackSource: c[5],
//     attackTarget: c[4],
//     SubcategoryId1: null,
//     SubcategoryId2: null,
//     SubcategoryId3: null,
//     AttackMethodId1: null,
//     AttackMethodId2: null,
//     AttackMethodId3: null,
//     GbovCategoryId1: null,
//     GbovCategoryId2: null,
//     GbovAttackMethodId1: null,
//     GbovAttackMethodId2: null,
//     subcategories: [
//       {
//         subcategory: c[7],
//         attackMethod: c[8],
//       },
//       {
//         subcategory: c[9],
//         attackMethod: c[10],
//       },
//       {
//         subcategory: c[11],
//         attackMethod: c[12],
//       },
//     ].filter(cs => cs.subcategory != ""),
//     gbovCategories: [{
//         category: c[13],
//         attackMethod: c[14]
//     },{
//         category: c[15],
//         attackMethod: c[16]
//     }].filter(gbov => gbov.category != ""),
//     link1: c[17],
//     link2: c[18],
//     link3: c[18],
//     archivedLink1: c[19],
//     archivedLink2: c[20],
//     archivedLink3: c[21],
//     outcome: c[22],
//     comment: c[23],
//   }));
//   return newCases;
// }


export function getNewCasesImportScript(
  categories: categories[],
  subcategories: subcategories[],
  attackMethods: attackMethods[],
  attackSources: attackSources[],
  attackTargets: attackTargets[],
  gbovCategories: gbovCategories[],
  gbovAttackMethods: gbovAttackMethods[]): any {
  const newCases = newSrCases.map((c, i) => ({
    Title: c[1],
    TitleEn: newEnCases[i][1],
    Description: c[0],
    DescriptionEn: newEnCases[i][0],
    Start: c[2],
    End: c[3] || null,
    CategoryId: findRecordId(categories, c[6], i, "categories"),
    AttackSourceId: findRecordId(attackSources, c[5], i, "attack sources"),
    AttackTargetId: findRecordId(attackTargets, c[4], i, "attack targets"),
    SubcategoryId1: findRecordId(subcategories, c[7], i, "subcategories"),
    AttackMethodId1: findRecordId(attackMethods, c[8], i, "attack methods"),
    SubcategoryId2: findRecordId(subcategories, c[9], i, "subcategories"),
    AttackMethodId2: findRecordId(attackMethods, c[10], i, "attack methods"),
    SubcategoryId3: findRecordId(subcategories, c[11], i, "subcategories"),
    AttackMethodId3: findRecordId(attackMethods, c[12], i, "attack methods"),
    GbovCategoryId1: findRecordId(gbovCategories, c[13], i, "gbov categories"),
    GbovAttackMethodId1: findRecordId(gbovAttackMethods, c[14], i, "gbov attack methods"),
    GbovCategoryId2: findRecordId(gbovCategories, c[15], i, "gbov categories"),
    GbovAttackMethodId2: findRecordId(gbovAttackMethods, c[16], i, "gbov attack methods"),
    Link1: c[17],
    Link2: c[18],
    Link3: c[18],
    ArchivedLink1: c[19],
    ArchivedLink2: c[20],
    ArchivedLink3: c[21],
    Outcome: c[22],
    Comment: c[23],
  }));
  console.log(newCases);
}

function findRecordId(records: any[], name:string, i: number, entity: string):number {
  const res = records.find(r => r.Name.toLowerCase().trim() == name.toLowerCase().trim())?.Id || null;
  if (name != "" && res == null) {
    console.log("FAILING NAME", i, name, entity);
  }
  return res;
}

