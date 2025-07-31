import Head from "next/head";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  // Clean up & type the data
  const users: UserProps[] = data.map((user: any) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
    },
  }));

  return {
    props: {
      users,
    },
  };
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Head>
        <title>Users - SoloForge</title>
      </Head>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Users</h1>

        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </>
  );
}
