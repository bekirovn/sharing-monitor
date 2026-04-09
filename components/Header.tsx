import { useContext } from "react";
import { LangContext } from "./LangProvider";
import Navbar from "./navbar/Navbar";
import Link from "next/link";

const t: any = {
  HEADER_BLURB_1: {
    en: "Keeping track of digital rights violations",
    sr: "Praćenje povreda digitalnih prava i sloboda ",
  },
  HEADER_BLURB_2: {
    en: "", //"and online violations in Serbia.",
    sr: "" //"i onlajn povreda u Srbiji.",
  },
};

export default function Header() {
  const lang = useContext(LangContext);

  return (
    <div className="full-w bg-primary sm:px-16 py-6 text-white flex flex-row sm:gap-4">
      <Link href="/">
        <img
          className="mx-4 sm:mx-0 h-[68px] sm:h-[86px]"
          src="/img/nav-logo.png"
        />
      </Link>
      <div className="flex-grow">
        <Navbar />
        <div className="hidden sm:block leading-5 mt-2">
          {t["HEADER_BLURB_1"][lang]}
          <br />
          {t["HEADER_BLURB_2"][lang]}
        </div>
      </div>
    </div>
  );
}
