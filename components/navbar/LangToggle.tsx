import { useContext, useEffect, useRef, useState } from "react";
import SingleSelectFilter from "../filters/SingleSelectFilter";
import { useRouter } from 'next/router';
import { LangContext } from "@/components/LangProvider";
import useOutsideClick from "@/util/useOutsideClick";

type Props = {};

export default function LangToggle({}: Props) {
  const router = useRouter();
  const lang = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const { pathname, asPath, query } = router;
  function changeLang (lang:string) {
    router.push(router.asPath, undefined, { locale: lang })  }
  const options = [
    {
      text: "en",
      value: "en",
      isSelected: lang === "en",
    },
    {
      text: "sr",
      value: "sr",
      isSelected: lang == null || lang === "sr",
    },
  ];
  return (
    <div className="relative bg-[#0b8fc3] px-1 pb-1 lg:pl-[15px]" ref={wrapperRef}>
      <div onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer flex flex-row justify-between z-20 ">
        <span className="uppercase">
          {options.find((o) => o.isSelected)?.text}
        </span>
        &nbsp;
        <img src="/img/triangle-down-white.svg" />
      </div>
      {isOpen && (
      <ul className="-mx-6 p-1 pl-9 lg:pl-1 pt-[24px] lg:mx-0 z-10 absolute top-0 left-0 right-0 bg-[#0b8fc3] ">
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => {
              changeLang(option.value);
            }}
            className="flex flex-row uppercase cursor-pointer"
          >
            <img
              className="h-[16px] mt-0.5"
              src={
                option.isSelected
                  ? "/img/checked-circle-white.svg"
                  : "/img/unchecked-circle-white.svg"
              }
            />
            &nbsp;{option.text}
          </li>
        ))}
      </ul>)}
    </div>
  );
}
