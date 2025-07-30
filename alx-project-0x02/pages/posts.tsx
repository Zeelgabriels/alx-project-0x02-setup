import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // Map API data into PostProps shape
      const formattedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(formattedPosts.slice(0, 10)); // Get first 10 posts
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts - SoloForge</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Recent Posts</h1>
        {posts.length === 0 ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  );
}