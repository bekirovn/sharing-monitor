import Datepicker from "react-tailwindcss-datepicker";
import { DateRangeType, DateValueType } from "react-tailwindcss-datepicker/dist/types";

type Props = {
    value: DateValueType,
    onChange: (newValue:DateValueType) => void
}

export default function DateRangeFilter ({value, onChange}: Props) {
    return (
        <Datepicker
        containerClassName=" "
        toggleClassName={(value && value.startDate) ? "bg-transparent" : "hidden"}
        inputClassName={"text-sm tracking-wide font-bold bg-primary-light py-2 px-5 rounded-full border-0 min-w-[235px] "}
        separator={"|"}
        value={value}
        onChange={onChange}
      />
    );
}