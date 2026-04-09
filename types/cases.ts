export type Subcategory = {
  subcategory: string;
  attackMethod: string;
};
export type Gbov = {
  category: string;
  attackMethod: string;
};

export type Case = {
  id: string;
  start: string | null;
  end: string | null;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  category: string;
  categoryId: number;
  attackSource?: string | null;
  attackSourceId: number;
  attackTargetId: number;
  attackTarget?: string | null;
  SubcategoryId1: number | null;
  SubcategoryId2: number | null;
  SubcategoryId3: number | null;
  AttackMethodId1: number | null;
  AttackMethodId2: number | null;
  AttackMethodId3: number | null;
  GbovCategoryId1: number | null;
  GbovCategoryId2: number | null;
  GbovAttackMethodId1: number | null;
  GbovAttackMethodId2: number | null;
  subcategories: Subcategory[];
  gbovCategories: Gbov[];
  link1: string | null;
  link2: string | null;
  link3: string | null;
  archivedLink1: string | null;
  archivedLink2: string | null;
  archivedLink3: string | null;
  outcome: string | null;
  comment: string | null;
  imageUrl: string;
  imageUrls?: string[];
};

export type CaseEntity = {
  Id: number;
  Title?: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  AttackTargetId?: number;
  AttackSourceId?: number;
  CategoryId?: number;
  Outcome?: string;
  Comment?: string;
  Period?: string;
  TitleEn: string;
  DescriptionEn: string;
};
