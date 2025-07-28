import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex space-x-6 text-blue-600 font-medium">
        <Link href="/home" className="hover:underline">Home</Link>
        <Link href="/listings" className="hover:underline">Listings</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/posts" className="hover:underline">Posts</Link>
        <Link href="/users" className="hover:underline">Users</Link>
      </nav>
    </header>
  );
}