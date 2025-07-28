import { useState } from "react";
import { type CardProps } from "@/interfaces";

interface PostModalProps {
  onAddPost: (newPost: CardProps) => void;
  onClose: () => void;
}

export default function PostModal({ onAddPost, onClose }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onAddPost({ title, content });
      setTitle("");
      setContent("");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Create New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Post title"
            className="w-full p-2 border border-gray-300 rounded mb-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Post content"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}