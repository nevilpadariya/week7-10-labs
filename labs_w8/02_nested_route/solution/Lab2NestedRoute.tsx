import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="">Overview</Link>
        <Link to="edit">Edit</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function ProfileOverview(){ return <p>Overview content</p>; }
function ProfileEdit(){ return <p>Edit form goes here</p>; }

export default function Lab2NestedRoute() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/profile" element={<ProfileLayout />}>
          <Route index element={<ProfileOverview />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}