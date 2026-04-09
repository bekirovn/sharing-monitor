import { SelectOption } from "@/types/filters";
import { useEffect, useRef, useState } from "react";
import useOutsideClick from "@/util/useOutsideClick";

type Props = {
  label: string;
  options: SelectOption[];
  onChange: (val: string[]) => void;
};
//work in progress...
export default function MultiSelectFilter({ label, options, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  useOutsideClick(wrapperRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  })
  
  const numOfSelected = options.filter((o) => o.isSelected).length;
  return (
    <div className={"relative " + (isOpen ? " z-30" : "")} ref={wrapperRef}>
      <div onClick={() => setIsOpen(!isOpen)}
        className={"relative cursor-pointer flex flex-row justify-between " +
        " z-20 text-sm tracking-wide font-bold py-2 px-5 " +
        " rounded-[20px] min-w-auto min-w-[150px] " + 
        (isOpen ? " bg-white border-[2px] border-primary-light" : " bg-primary-light border-[2px] border-transparent")}>
        <span className="uppercase break-keep">
          {label}
          {numOfSelected > 0 ? (
            ` (${numOfSelected})`
          ) : (
            <>&nbsp;&nbsp;</>
          )}
          &nbsp;
        </span>
        <img src="/img/triangle-down.svg" />
      </div>
      {isOpen && (
      <ul className={"absolute top-12 l-0 inline-block pt-4 text-sm tracking-wide font-bold " +
      " py-2 px-5 rounded-[20px] bg-white border-[2px] border-primary-light w-auto min-w-[150px] "}>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => {
              const restOfSelected = options
                .filter((o) => o.value !== option.value && o.isSelected)
                .map((o) => o.value);

              onChange(
                option.isSelected
                  ? restOfSelected
                  : [...restOfSelected, option.value]
              );
            }}
            className="flex flex-row uppercase cursor-pointer leading-[16px] mb-2"
          >
            <img
              className="h-[16px] mt-0.5"
              src={
                option.isSelected
                  ? "/img/checked-square.svg"
                  : "/img/unchecked-square.svg"
              }
            />
            &nbsp;{option.text}
          </li>
        ))}
      </ul>)}
    </div>
  );
}
