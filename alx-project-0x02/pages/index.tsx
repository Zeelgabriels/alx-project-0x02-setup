import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
      <title>Welcome to Soloforge</title>
      <meta name="description" content="Next.js setup Project" />
    </Head>
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome to Soloforge Project!
      </h1>
    </main>
    </>
  );
}