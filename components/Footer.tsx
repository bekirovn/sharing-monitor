import { useSession, signOut, signIn } from "next-auth/react";

export default function Footer() {
  const { data, status } = useSession();
  return (
    <div
        className="w-full bg-[#0B8FC3] p-6 flex flex-row justify-between items-center">
      <img src="/img/share-logo.png" />
      <div>
        {status === "authenticated" ? (
          <button className="px-1 lg:px-[15px]" onClick={() => signOut()}>
            LOG OUT
          </button>
        ) : (
          <button
            className="px-1 lg:px-[15px]"
            onClick={() => signIn("google")}
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
}
