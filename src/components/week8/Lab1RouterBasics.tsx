import { MemoryRouter, Routes, Route, Link } from "react-router-dom";
import { Box, Button, Typography, Paper } from "@mui/material";

const Home = () => <Typography variant="h6">Home Page</Typography>;
const About = () => <Typography variant="h6">About Page</Typography>;
const Contact = () => <Typography variant="h6">Contact Page</Typography>;

const Lab1RouterBasics = () => {
  return (
    <MemoryRouter>
      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
        <Button component={Link} to="/" variant="contained" size="small">
          Home
        </Button>
        <Button component={Link} to="/about" variant="contained" size="small">
          About
        </Button>
        <Button component={Link} to="/contact" variant="contained" size="small">
          Contact
        </Button>
      </Box>
      
      <Paper variant="outlined" sx={{ p: 2, minHeight: 100 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Paper>
    </MemoryRouter>
  );
};

export default Lab1RouterBasics;
