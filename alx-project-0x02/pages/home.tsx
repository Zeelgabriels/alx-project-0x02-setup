import Head from "next/head";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - SoloForge</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-semibold text-gray-800">Welcome to the Home Page</h1>
        <p className="mt-2 text-gray-600">
          This is the home page of your SoloForge project.
        </p>
      </main>
    </>
  );
}

