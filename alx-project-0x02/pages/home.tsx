import Head from "next/head";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);
const [posts, setPosts] = useState<CardProps[]>([]);

const handleAddPost = (newPost: CardProps) => {
  setPosts((prevPosts) => [newPost, ...prevPosts]);
};
  return (
    <>
     <Head>
        <title>Home - SoloForge</title>
      </Head>
    <Header />
    <main className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>

      <p className="mt-2 text-gray-600">
          This is the home page of your SoloForge project.
        </p>
        <Card title="Featured Listing" content="Check out our latest listings and offers available for you!" />
        <Card title="Latest News" content="Stay updated with the latest news and updates from SoloForge." />
        <Card title="Community Highlights" content="Join our community discussions and share your thoughts!" />

      <button
        onClick={() => setShowModal(true)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        + New Post
      </button>

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}

      {showModal && (
        <PostModal
          onAddPost={handleAddPost}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  </>
);