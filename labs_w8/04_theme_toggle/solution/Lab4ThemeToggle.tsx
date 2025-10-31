import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Lab4ThemeToggle(){
  const [mode, setMode] = useState<"light"|"dark">("light");
  const theme = useMemo(()=> createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 3, display: "grid", gap: 2 }}>
        <h2>Theme: {mode}</h2>
        <Button variant="contained" onClick={()=> setMode(m => m==="light"?"dark":"light")}>
          Toggle Theme
        </Button>
        <Button variant="outlined">Try me</Button>
      </Box>
    </ThemeProvider>
  );
}