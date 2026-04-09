import { ReactNode } from "react";
import Footer from "./Footer";
import Head from "next/head";
import Header from "./Header";
import LangProvider from "./LangProvider";

type Props = {
  children: ReactNode[] | ReactNode;
  title?: string;
};

export default function Layout({
  children,
  title = "SHARE MONITORING",
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta property="og:title" content="SHARE MONITORING" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="twitter:image" content="" />
        <meta property="twitter:url" content="" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <LangProvider>
        <main className="flex flex-col items-stretch min-h-[100vh]">
          <Header />
          <div className="flex-grow container px-3 mx-auto bg-white">
            {children}
          </div>
          <Footer />
        </main>
      </LangProvider>
    </>
  );
}
