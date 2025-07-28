import { type CardProps } from "@/interfaces";

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold text-blue-700">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
    </div>
  );
}
