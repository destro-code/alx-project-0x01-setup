import { useState } from "react";
import { UserData } from "@/interfaces";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import UserModal from "@/components/common/UserModal";

const UsersPage: React.FC<{ users: UserData[] }> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6 space-y-4 flex-grow container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-green-700 text-white px-4 py-2 rounded-full">Add User</button>
        </div>
        <div className="space-y-2">
          {newUser && <div className="p-4 bg-white rounded shadow">{newUser.name} ({newUser.email})</div>}
          {users.map(u => <div key={u.id} className="p-4 bg-white rounded shadow">{u.name} ({u.email})</div>)}
        </div>
      </main>
      <Footer />
      {isModalOpen && <UserModal onClose={() => setModalOpen(false)} onSubmit={(u) => setNewUser(u)} />}
    </div>
  );
};

export async function getStaticProps() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
  return { props: { users } };
}

export default UsersPage;
