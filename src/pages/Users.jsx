import { Link } from "react-router-dom";

function Users() {
  const users = [
    { id: 1, name: "Arjun" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Neha" }
  ];

  return (
    <div>
      <h2>Users Page</h2>

      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Users;