import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TOKENS = {
  color: { primary: "#1976d2", secondary: "#9c27b0", surface: "#fafafa" },
  spacing: { md: 8, lg: 16 },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans"',
  },
};

const theme = createTheme({
  palette: {
    primary: { main: TOKENS.color.primary },
    secondary: { main: TOKENS.color.secondary },
    background: { default: TOKENS.color.surface },
  },
  spacing: TOKENS.spacing.md,
  typography: { fontFamily: TOKENS.typography.fontFamily },
});

export default function Lab6DesignTokens() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ p: 3, display: "grid", gap: 2 }}>
        <h2>Design Tokens → Theme</h2>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Box sx={{ p: 2, bgcolor: "background.default" }}>Surface area</Box>
      </Box>
    </ThemeProvider>
  );
}