import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type Mode = "light" | "dark";
const STORAGE_KEY = "cmpe280_theme_mode";

function readInitialMode(): Mode {
  const saved = localStorage.getItem(STORAGE_KEY) as Mode | null;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Lab5PersistTheme(){
  const [mode, setMode] = useState<Mode>(() => readInitialMode());
  useEffect(() => { localStorage.setItem(STORAGE_KEY, mode); }, [mode]);
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 3, display: "grid", gap: 2 }}>
        <h2>Theme: {mode}</h2>
        <Button variant="contained" onClick={() => setMode(m => m === "light" ? "dark" : "light")}>
          Toggle Theme
        </Button>
        <p>Refresh — your choice persists.</p>
      </Box>
    </ThemeProvider>
  );
}