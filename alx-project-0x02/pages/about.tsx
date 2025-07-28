import Head from "next/head";
import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - SoloForge</title>
      </Head>
      <main className="p-6">
        <h1 className="text-3xl font-semibold text-gray-800">About SoloForge</h1>
        <p className="mt-2 text-gray-600">
          This page tells you more about the project and its purpose.
        </p>
      </main>
    </>
  );
}
