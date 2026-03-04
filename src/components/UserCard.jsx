function UserCard({ user }) {
  return (
    <div style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.company.name}</p>
    </div>
  );
}

export default UserCard;