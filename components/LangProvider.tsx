"use client";

import { useRouter } from "next/router";
import { ReactNode, createContext } from "react";

type Props = {
  children: ReactNode[] | ReactNode;
};
const langDefault = "sr";
export const LangContext = createContext(langDefault);

export default function LangProvider({ children }: Props) {
  const router = useRouter();
  return (
    <LangContext.Provider value={router.locale || langDefault}>
      {children}
    </LangContext.Provider>
  );
}
