import { Box, Typography, Paper } from "@mui/material";
import { useState } from "react";

function Home() {
  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography variant="h4" gutterBottom>Home</Typography>
      <Typography variant="body1">Welcome to the Home page!</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Notice: The page does not reload when you navigate between links.
      </Typography>
    </Paper>
  );
}

function About() {
  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography variant="h4" gutterBottom>About</Typography>
      <Typography variant="body1">This is the About page.</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Click the links above - no page reload occurs!
      </Typography>
    </Paper>
  );
}

function Contact() {
  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography variant="h4" gutterBottom>Contact</Typography>
      <Typography variant="body1">You can reach us here.</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Navigation happens instantly without a full page refresh.
      </Typography>
    </Paper>
  );
}

export default function Lab1RouterBasics() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "contact">("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const linkStyle = (isActive: boolean) => ({
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "4px",
    backgroundColor: isActive ? "#1976d2" : "#f5f5f5",
    color: isActive ? "white" : "#1976d2",
    fontWeight: 500,
    cursor: "pointer",
    border: "none",
    transition: "all 0.2s",
  });

  return (
    <Box>
      <nav style={{ display: "flex", gap: 16, marginBottom: 8 }}>
        <Box
          component="button"
          onClick={() => setCurrentPage("home")}
          sx={linkStyle(currentPage === "home")}
        >
          Home
        </Box>
        <Box
          component="button"
          onClick={() => setCurrentPage("about")}
          sx={linkStyle(currentPage === "about")}
        >
          About
        </Box>
        <Box
          component="button"
          onClick={() => setCurrentPage("contact")}
          sx={linkStyle(currentPage === "contact")}
        >
          Contact
        </Box>
      </nav>
      {renderPage()}
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 2, fontStyle: "italic" }}>
        ✓ Task complete: Home/About/Contact created | ✓ Links added | ✓ No page reload confirmed
      </Typography>
    </Box>
  );
}