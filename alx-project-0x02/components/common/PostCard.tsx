import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white rounded-md shadow p-4 mb-4">
      <h2 className="text-xl font-bold text-blue-700">{title}</h2>
      <p className="text-gray-600 mt-2">{content}</p>
      <p className="text-sm text-gray-400 mt-2">User ID: {userId}</p>
    </div>
  );
}
