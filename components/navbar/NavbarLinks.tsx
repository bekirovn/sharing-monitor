import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import LangToggle from "./LangToggle";
import { useContext } from "react";
import { LangContext } from "@/components/LangProvider";
import NavbarLink from "./NavbarLink";

const t: any = {
  "/": {
    en: "Home",
    sr: "Početna",
  },
  "/data": {
    en: "Data",
    sr: "Podaci",
  },
  "/methodology": {
    en: "Methodology",
    sr: "Metodologija",
  },
  "/reports": {
    en: "REPORTS",
    sr: "IZVEŠTAJI",
  },
};

export default function NavbarLinks() {
  const lang = useContext(LangContext);
  const { data, status } = useSession();
  return (
    <>
    <li>
      <NavbarLink pathname={"/"} text={t["/"][lang]} />
    </li>
      <li>
        <NavbarLink pathname={"/data"} text={t["/data"][lang]} />
      </li>
      <li>
        <NavbarLink pathname={"/methodology"} text={t["/methodology"][lang]} />
      </li>
      <li>
        <NavbarLink pathname={"/reports"} text={t["/reports"][lang]} />
      </li>
      <li>
        <LangToggle />
      </li>
    </>
  );
}
