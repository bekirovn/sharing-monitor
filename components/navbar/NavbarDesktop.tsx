import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import NavbarLinks from "./NavbarLinks";

export default function NavbarDesktop() {
  const { data, status } = useSession();
  return (
    <div className="hidden lg:flex w-full flex flex-row justify-between">
      <h1 className="text-3xl">
        <Link href="/">
          SHARE<span className="font-[FoundryBold]">/MONITORING</span>
        </Link>
      </h1>
      <ul className="flex flex-row xl:gap-4 text-sm tracking-wide font-bold">
        <NavbarLinks />
      </ul>
    </div>
  );
}
