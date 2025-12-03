import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import tokensAfter from "./tokens_after.json";

const accessibleTheme = createTheme({
  palette: {
    primary: { main: tokensAfter.color.primary },
    secondary: { main: tokensAfter.color.secondary },
    text: { primary: tokensAfter.color.textPrimary },
  },
  typography: {
    h1: {
      fontSize: tokensAfter.typography.h1.fontSize,
      fontWeight: tokensAfter.typography.h1.fontWeight,
    },
    body1: {
      fontSize: tokensAfter.typography.body.fontSize,
      fontWeight: tokensAfter.typography.body.fontWeight,
    },
  },
  spacing: tokensAfter.spacing.base,
});

export default function AccessibleDemo() {
  return (
    <ThemeProvider theme={accessibleTheme}>
      <CssBaseline />
      <Box sx={{ p: 3, display: "grid", gap: 2 }}>
        <Typography variant="h4">Accessible Design Tokens</Typography>
        <Button variant="contained" color="primary">Primary Button</Button>
        <Button variant="outlined" color="secondary">Secondary Button</Button>
        <Typography>
          This theme uses accessible color tokens that meet WCAG AA contrast requirements.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
