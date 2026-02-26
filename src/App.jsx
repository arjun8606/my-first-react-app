import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User List</h1>

      {loading && <p>Loading...</p>}

      {!loading &&
        users.map((user) => (
          <div key={user.id} style={{ marginBottom: "10px" }}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;