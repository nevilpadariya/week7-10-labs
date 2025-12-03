import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, Typography, Paper } from "@mui/material";

const Lab4ThemeToggle = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

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
          Current Theme: {mode.toUpperCase()}
        </Typography>
        <Button variant="contained" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Paper>
    </ThemeProvider>
  );
};

export default Lab4ThemeToggle;
