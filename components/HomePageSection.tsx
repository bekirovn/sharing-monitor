import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  title?: string;
  width?: string;
};

export default function HomePageSection({ children, title = "", width="w-full" }: Props) {
    return  <div className={`min-h-[200px] py-10 mx-auto bg-white text-black ${width}`}>
      <h1 className="max-w-2xl text-2xl mb-7 font-[FoundryBold]">{title}</h1>
        {children}
    </div>
}
