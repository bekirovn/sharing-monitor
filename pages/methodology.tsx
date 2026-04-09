import Layout from "@/components/Layout";
import MethodologyEn from "@/components/methodology/MethodologyEn";
import MethodologySr from "@/components/methodology/MethodologySr";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";
import { LangContext } from "@/components/LangProvider";

export default function MethodologyPage() {
  const router = useRouter()
  const lang = router.locale;

  return (
      <Layout title="METHODOLOGY - MONITORING">
        <div className="mx-auto max-w-3xl">
          {lang === "sr" ? <MethodologySr /> : <MethodologyEn />}
        </div>
      </Layout>
  );
}
