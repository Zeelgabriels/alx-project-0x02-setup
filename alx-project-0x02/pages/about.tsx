import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - SoloForge</title>
      </Head>
      <Header />
      <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About SoloForge</h1>
        <p className="mb-6 text-gray-600">
          This page tells you more about the project and its purpose. SoloForge is designed to be a platform where users can create, share, and discover content easily. <br></br>
          Our mission is to foster a community of creators and enthusiasts who can connect and collaborate. <br></br>
          This page also demonstrates reusable components like Button.
        </p>
        <div className="space-x-4">
          <Button label="Small Rounded" size="small" shape="rounded-sm" />
          <Button label="Medium Pill" size="medium" shape="rounded-full" />
          <Button label="Large Default" size="large" shape="rounded-md" />
        </div>
      </main>
    </>
  );
}
