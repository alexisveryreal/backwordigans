import { BackwordForm } from "@/components/forms/backword";
import { Header } from "@/components/header";
import Head from "next/head";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Backwordigans</title>
        <meta name="description" content="backword any word" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start bg-white dark:bg-slate-950">
        <div className=" px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-6xl">
              Backwordigans
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-500 dark:text-slate-400">
              yo
            </p>
          </div>
          <BackwordForm />
        </div>
      </main>
    </>
  );
}
