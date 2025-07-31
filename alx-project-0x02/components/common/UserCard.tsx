import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white shadow rounded-md p-4 mb-4">
      <h2 className="text-xl font-semibold text-blue-700">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        Lives at {address.street}, {address.city}
      </p>
    </div>
  );
}