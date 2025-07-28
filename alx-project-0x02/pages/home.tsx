import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

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
        <Card title="Featured Listing" content="Check out our latest listings and offers available for you!" />
        <Card title="Latest News" content="Stay updated with the latest news and updates from SoloForge." />
        <Card title="Community Highlights" content="Join our community discussions and share your thoughts!" />
      </main>
    </>
  );
}
