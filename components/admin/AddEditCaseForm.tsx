// components/CaseForm.tsx

import { useState } from "react";
import { CaseEntity } from "@/types/cases";
import { dateTypeToISOString } from "@/util/dateTimeHelpers";
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
import { useRouter } from "next/router";
import ImageUploadForm from "../Cloudinary/ImageUploadForm";
import ImageSection from "../Cloudinary/ImageSection";

type Props = {
  caseData: cases;
  categories: categories[];
  subcategories: subcategories[];
  attackSources: attackSources[];
  attackTargets: attackTargets[];
  attackMethods: attackMethods[];
  gbovCategories: gbovCategories[];
  gbovAttackMethods: gbovAttackMethods[];
};

export default function AddEditCaseForm({
  caseData,
  categories,
  subcategories,
  attackSources,
  attackTargets,
  attackMethods,
  gbovCategories,
  gbovAttackMethods,
}: Props) {
  const router = useRouter();
  const [formData, setFormData] = useState<cases>(caseData);
  const [imageUrl, setImageUrl] = useState(caseData.imageUrl);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    const isIntField =
      [
        "AttackTargetId",
        "AttackSourceId",
        "SubcategoryId1",
        "SubcategoryId2",
        "SubcategoryId3",
        "AttackMethodId1",
        "AttackMethodId2",
        "AttackMethodId3",
        "GbovCategoryId1",
        "GbovCategoryId2",
        "GbovAttackMethodId1",
        "GbovAttackMethodId2",
        "CategoryId",
      ].indexOf(name) !== -1;
    const isDateField = ["StartDate", "EndDate"].indexOf(name) !== -1;
    if (isDateField) {
      console.log("DATE VAL", value);
    }
    const convertedValue = isIntField
      ? +value || null
      : isDateField
  ? (() => {
      if (!value) return null;
      const d = new Date(value);
      return isNaN(d.getTime()) ? null : d;
    })()
  : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: convertedValue,
    }));
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   // Handle form submission, e.g., saving to the database using Prisma
  //   //console.log(formData);
  //   fetch(`/api/cases/${formData.Id}`, {
  //     method: "POST",
  //     body: JSON.stringify({ ...formData, imageUrl: imageUrl }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const id = data.Id;
  //       router.replace(
  //         {
  //           pathname: "/case/" + id,
  //           query: {},
  //         },
  //         undefined,
  //         {
  //           shallow: true,
  //           locale: router.locale,
  //         }
  //       );
  //     });
  // };


  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (isSubmitting) return; 
  setIsSubmitting(true);

  try {
    const response = await fetch(`/api/cases/${formData.Id || 0}`, {
      method: "POST",
      body: JSON.stringify({ ...formData, imageUrl }),
    });

    const data = await response.json();
    const id = data.Id;

    
    setFormData(prev => ({ ...prev, Id: id }));

   
    router.replace(
      { pathname: "/case/" + id, query: {} },
      undefined,
      { shallow: true, locale: router.locale }
    );
  } catch (error) {
    console.error("Error saving case:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 mx-auto max-w-3xl"
    >
      <div className="flex flex-col">
        <label>Title Sr:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="Title"
          value={formData?.Title || ""}
          onChange={handleChange}
          placeholder="Title"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Title En:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="TitleEn"
          value={formData?.TitleEn || ""}
          onChange={handleChange}
          placeholder="Title (English)"
          required
        />
      </div>
      <div className="flex flex-col">
        <label>Description Sr:</label>
        <textarea
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          name="Description"
          value={formData?.Description || ""}
          onChange={handleChange}
          placeholder="Description"
          rows={4}
        />
      </div>
      <div className="flex flex-col">
        <label>Description En:</label>
        <textarea
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          name="DescriptionEn"
          value={formData?.DescriptionEn || ""}
          onChange={handleChange}
          placeholder="Description (English)"
          rows={4}
        />
      </div>
      <div className="flex flex-col">
        <label>Start Date:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="date"
          name="StartDate"
          value={dateTypeToISOString(formData?.StartDate || null) || ""}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>End Date:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="date"
          name="EndDate"
          value={dateTypeToISOString(formData?.EndDate || null) || ""}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label>Attack Target:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="AttackTargetId"
          value={formData?.AttackTargetId || ""}
          onChange={handleChange}
        >
          {attackTargets.map((r) => (
            <option key={r.Id} value={r.Id}>
              {r.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Attack Source:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="AttackSourceId"
          value={formData?.AttackSourceId || ""}
          onChange={handleChange}
        >
          {attackSources.map((r) => (
            <option key={r.Id} value={r.Id}>
              {r.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Category:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="CategoryId"
          value={formData?.CategoryId || ""}
          onChange={handleChange}
        >
          {categories.map((r) => (
            <option key={r.Id} value={r.Id}>
              {r.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Subcategory 1:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="SubcategoryId1"
          value={formData.SubcategoryId1 || ""}
          onChange={handleChange}
        >
          {subcategories
            .filter((r) => r.CategoryId == formData.CategoryId)
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Means 1:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="AttackMethodId1"
          value={formData.AttackMethodId1 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {attackMethods
            .filter(
              (r) =>
                formData.SubcategoryId1 != null &&
                r.SubcategoryId == formData.SubcategoryId1
            )
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Subcategory 2:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="SubcategoryId2"
          value={formData.SubcategoryId2 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {subcategories
            .filter((r) => r.CategoryId == formData.CategoryId)
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Means 2:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="AttackMethodId2"
          value={formData.AttackMethodId2 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {attackMethods
            .filter(
              (r) =>
                formData.SubcategoryId2 != null &&
                r.SubcategoryId == formData.SubcategoryId2
            )
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Subcategory 3:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="SubcategoryId3"
          value={formData.SubcategoryId3 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {subcategories
            .filter((r) => r.CategoryId == formData.CategoryId)
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Means 3:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="AttackMethodId3"
          value={formData.AttackMethodId3 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {attackMethods
            .filter(
              (r) =>
                formData.SubcategoryId3 != null &&
                r.SubcategoryId == formData.SubcategoryId3
            )
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label>GBOV Category 1:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="GbovCategoryId1"
          value={formData.GbovCategoryId1 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {gbovCategories.map((r) => (
            <option key={r.Id} value={r.Id}>
              {r.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>GBOV Means 1:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="GbovAttackMethodId1"
          value={formData.GbovAttackMethodId1 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {gbovAttackMethods
            .filter(
              (r) =>
                formData.GbovCategoryId1 != null &&
                r.GbovCategoryId == formData.GbovCategoryId1
            )
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>GBOV Category 2:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="GbovCategoryId2"
          value={formData.GbovCategoryId2 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {gbovCategories.map((r) => (
            <option key={r.Id} value={r.Id}>
              {r.Name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Means 2:</label>
        <select
          className="cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0 min-w-auto min-w-[150px]"
          name="GbovAttackMethodId2"
          value={formData.GbovAttackMethodId2 || ""}
          onChange={handleChange}
        >
          <option key={"N/A"} value={""}>
            {""}
          </option>
          {gbovAttackMethods
            .filter(
              (r) =>
                formData.GbovCategoryId2 != null &&
                r.GbovCategoryId == formData.GbovCategoryId2
            )
            .map((r) => (
              <option key={r.Id} value={r.Id}>
                {r.Name}
              </option>
            ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label>Link 1:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="Link1"
          value={formData?.Link1 || ""}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>
      <div className="flex flex-col">
        <label>Link 2:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="Link2"
          value={formData?.Link2 || ""}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>
      <div className="flex flex-col">
        <label>Link 3:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="Link3"
          value={formData?.Link3 || ""}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>

      <div className="flex flex-col">
        <label>Archived Link 1:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="ArchivedLink1"
          value={formData?.ArchivedLink1 || ""}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>
      <div className="flex flex-col">
        <label>Archived Link 2:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="ArchivedLink2"
          value={formData?.ArchivedLink2 || ""}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>
      <div className="flex flex-col">
        <label>Archived Link 3:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="ArchivedLink3"
          value={formData?.ArchivedLink3 || ""}
          onChange={handleChange}
          placeholder="Link"
        />
      </div>
      <div className="flex flex-col">
        <label>Outcome:</label>
        <input
          type="text"
          name="Outcome"
          value={formData?.Outcome || ""}
          onChange={handleChange}
          placeholder="Outcome"
        />
      </div>
      <div className="flex flex-col">
        <label>Comment:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="Comment"
          value={formData?.Comment || ""}
          onChange={handleChange}
          placeholder="Comment"
        />
      </div>
      <div className="flex flex-col">
        <label>Period:</label>
        <input
          className="mt-1 p-1 px-2 border-[1px] border-blue-400"
          type="text"
          name="Period"
          value={formData?.Period || ""}
          onChange={handleChange}
          placeholder="Period"
        />
      </div>
      {(imageUrl == "" || imageUrl == null) ? (
        <ImageUploadForm setImageUrl={setImageUrl} />
      ) : (
        <div className="flex flex-row">
          <ImageSection imageUrl={imageUrl} />
          <img
            onClick={() => setImageUrl("")}
            src="/img/x.png"
            className="h-5 cursor-pointer"
          />
        </div>
      )}

      {/* <button
        type="submit"
        className="mt-1 self-center w-[200px] bg-primary-light p-2 font-bold uppercase"
      >
        Submit
      </button> */}

      <button
  type="submit"
  disabled={isSubmitting}
  className="mt-1 self-center w-[200px] bg-primary-light p-2 font-bold uppercase opacity-80 disabled:cursor-not-allowed"
>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>
    </form>
  );
}
