import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavbarLinks from "./NavbarLinks";
import useOutsideClick from "@/util/useOutsideClick";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick(wrapperRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  })

  return (
    <div className={"lg:hidden flex flex-row justify-between"} ref={wrapperRef}>
      <h1 className="text-3xl">
        <Link className="hidden sm:inline-block" href="/">
          SHARE<span className="font-[FoundryBold]">/MONITORING</span>
        </Link>
        <Link className="sm:hidden" href="/">
          SHARE<br />
          <span className="font-[FoundryBold]">MONITORING</span>
        </Link>
      </h1>
      <div
        className={
          "flex flex-col px-6 gap-4 " + " bg-[#0b8fc3] z-[50] absolute right-0"
        }
      >
        <img
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer self-end"
          src="/img/hamburger.svg"
        />
        {isOpen && (
          <ul className="list-none">
            <NavbarLinks />
          </ul>
        )}
      </div>
    </div>
  );
}
