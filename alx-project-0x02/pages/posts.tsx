import Head from "next/head";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts - SoloForge</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Posts Page</h1>
        <p className="text-gray-600">This page will display a list of posts in the next task.</p>
      </main>
    </>
  );
}