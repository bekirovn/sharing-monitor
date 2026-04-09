import { SelectOption } from "@/types/filters";

import useOutsideClick from "@/util/useOutsideClick";
import { useState, useRef } from "react";

type Props = {
  options: SelectOption[];
  onChange: (val: string) => void;
};
//work in progress...
export default function SingleSelectFilter({ options, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div className="relative" ref={wrapperRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer flex flex-row justify-between z-20 text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0"
      >
        <span className="uppercase">
          {options.find((o) => o.isSelected)?.text}
          &nbsp;&nbsp;
        </span>
        <img src="/img/triangle-down.svg" />
      </div>
      {isOpen && (
        <ul className="z-10 absolute top-0 pt-[35px] text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-[20px] border-0">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="flex flex-row uppercase cursor-pointer"
            >
              <img
                className="h-[16px] mt-0.5"
                src={
                  option.isSelected
                    ? "/img/checked-circle.svg"
                    : "/img/unchecked-circle.svg"
                }
              />
              &nbsp;{option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
