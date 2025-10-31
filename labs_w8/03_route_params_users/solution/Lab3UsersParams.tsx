import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

const USERS = [
  { id: "alice", name: "Alice" },
  { id: "bob", name: "Bob" },
  { id: "carol", name: "Carol" },
];

function Users() {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {USERS.map(u => (
          <li key={u.id}><Link to={`/user/${u.id}`}>{u.name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

function User() {
  const { id } = useParams();
  const user = USERS.find(u => u.id === id);
  if (!user) return <p>User not found.</p>;
  return <h3>{user.name} (id: {user.id})</h3>;
}

export default function Lab3UsersParams() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}