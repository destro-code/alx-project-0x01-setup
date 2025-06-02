import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Username:</strong> {username}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Website:</strong>{" "}
        <a href={`http://${website}`} className="text-blue-500 hover:underline">
          {website}
        </a>
      </p>
      <div className="mt-4 text-sm text-gray-500">
        <p>
          <strong>Address:</strong> {address.suite}, {address.street},{" "}
          {address.city}, {address.zipcode}
        </p>
        <p>
          <strong>Geo:</strong> ({address.geo.lat}, {address.geo.lng})
        </p>
        <p>
          <strong>Company:</strong> {company.name} – "{company.catchPhrase}"
        </p>
      </div>
      <div className="mt-4 text-xs text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
