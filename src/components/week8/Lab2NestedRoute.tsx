import { MemoryRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Profile = () => (
  <Box>
    <Typography variant="h6">User Profile</Typography>
    <Typography variant="body2" sx={{ mb: 2 }}>This is the main profile page.</Typography>
    <Button component={Link} to="edit" variant="outlined" size="small" sx={{ mb: 2 }}>
      Edit Profile
    </Button>
    <Box sx={{ border: '1px dashed grey', p: 2 }}>
        <Typography variant="caption" display="block" gutterBottom>Nested Content (Outlet):</Typography>
        <Outlet />
    </Box>
  </Box>
);

const EditProfile = () => <Typography variant="body1" color="primary">Edit Profile Form goes here...</Typography>;

const Lab2NestedRoute = () => {
  return (
    <MemoryRouter initialEntries={["/profile"]}>
      <Routes>
        <Route path="/profile" element={<Profile />}>
          <Route path="edit" element={<EditProfile />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
};

export default Lab2NestedRoute;
