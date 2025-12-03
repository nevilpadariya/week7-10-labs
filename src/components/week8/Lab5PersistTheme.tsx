import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Typography, Paper } from "@mui/material";

const Lab5PersistTheme = () => {
  // Initialize state from localStorage or default to 'light'
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedMode = localStorage.getItem("themeMode");
    return (savedMode === "light" || savedMode === "dark") ? savedMode : "light";
  });

  // Update localStorage whenever mode changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ p: 3, minHeight: 150 }}>
        <Typography variant="h6" gutterBottom>
          Persisted Theme: {mode.toUpperCase()}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
            Refresh the page! The theme selection will remain.
        </Typography>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle & Save
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default Lab5PersistTheme;
