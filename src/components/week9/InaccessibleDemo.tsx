import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import tokensBefore from "./tokens_before.json";

const inaccessibleTheme = createTheme({
  palette: {
    primary: { main: tokensBefore.color.primary },
    secondary: { main: tokensBefore.color.secondary },
    text: { primary: tokensBefore.color.textPrimary },
  },
  typography: {
    h1: {
      fontSize: tokensBefore.typography.h1.fontSize,
      fontWeight: tokensBefore.typography.h1.fontWeight,
    },
    body1: {
      fontSize: tokensBefore.typography.body.fontSize,
      fontWeight: tokensBefore.typography.body.fontWeight,
    },
  },
  spacing: tokensBefore.spacing.base,
});

export default function InaccessibleDemo() {
  return (
    <ThemeProvider theme={inaccessibleTheme}>
      <CssBaseline />
      <Box sx={{ p: 3, display: "grid", gap: 2, bgcolor: "background.default" }}>
        <Typography variant="h4">Inaccessible Design Tokens (Before)</Typography>
        <Button variant="contained" color="primary">Primary Button</Button>
        <Button variant="outlined" color="secondary">Secondary Button</Button>
        <Typography>
          This theme uses low-contrast tokens that fail WCAG AA contrast requirements.
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
