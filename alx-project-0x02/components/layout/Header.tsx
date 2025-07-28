import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="flex space-x-6 text-blue-600 font-medium">
        <Link href="/">Home</Link>
        <Link href="/home">Listings</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/users">Users</Link>
      </nav>
    </header>
  );
}