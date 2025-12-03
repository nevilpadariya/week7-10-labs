import { MemoryRouter, Routes, Route, Link, useParams } from "react-router-dom";
import { Box, Button, Typography, List, ListItem, ListItemText, Alert } from "@mui/material";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const UserList = () => (
  <Box>
    <Typography variant="h6">User Directory</Typography>
    <List>
      {users.map((user) => (
        <ListItem key={user.id} disablePadding>
            <Button component={Link} to={`/users/${user.id}`} sx={{ width: '100%', justifyContent: 'flex-start', textAlign: 'left' }}>
                <ListItemText primary={user.name} />
            </Button>
        </ListItem>
      ))}
    </List>
  </Box>
);

const UserProfile = () => {
  const { id } = useParams();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return <Alert severity="error">User not found!</Alert>;
  }

  return (
    <Box>
      <Typography variant="h6">User Details</Typography>
      <Typography>ID: {user.id}</Typography>
      <Typography>Name: {user.name}</Typography>
      <Button component={Link} to="/users" sx={{ mt: 2 }}>Back to List</Button>
    </Box>
  );
};

const Lab3UsersParams = () => {
  return (
    <MemoryRouter initialEntries={["/users"]}>
      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </MemoryRouter>
  );
};

export default Lab3UsersParams;
