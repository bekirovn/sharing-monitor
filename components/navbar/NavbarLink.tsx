import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    pathname: string;
  text: string;
};

export default function NavbarLink({ pathname, text }: Props) {
  const router = useRouter();
  return (
    <Link
      href={pathname}
      className={
        router.pathname == pathname
          ? "lg:rounded-[46px] bg-[#92D8F4] p-1 lg:py-[8px] lg:px-[20px] text-black"
          : "p-1 lg:px-[15px]"
      }
    >
      {text}
    </Link>
  );
}
