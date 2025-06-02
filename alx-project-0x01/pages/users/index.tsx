import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState<UserData | null>(null);

  const handleAddUser = (userData: UserData) => {
    setNewUser({ ...userData, id: users.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {users.map((usr) => (
            <UserCard
              key={usr.id}
              id={usr.id}
              name={usr.name}
              username={usr.username}
              email={usr.email}
              address={usr.address}
              phone={usr.phone}
              website={usr.website}
              company={usr.company}
            />
          ))}
          {newUser && (
            <UserCard
              key={newUser.id}
              id={newUser.id!}
              name={newUser.name}
              username={newUser.username}
              email={newUser.email}
              address={newUser.address}
              phone={newUser.phone}
              website={newUser.website}
              company={newUser.company}
            />
          )}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
