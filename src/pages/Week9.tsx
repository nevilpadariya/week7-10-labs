import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import tokensBefore from "../../labs_w9/tokens_before.json";
import tokensAfter from "../../labs_w9/tokens_after.json";
import { useState } from "react";

// Theme with accessible tokens
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

// Theme with inaccessible tokens
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

function AccessibleDemo() {
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

function InaccessibleDemo() {
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

// Week 9 Page Component
export default function Week9() {
  const [showBefore, setShowBefore] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 9 Labs - Figma → Tokens & Accessibility
      </Typography>

      <Box sx={{ display: "grid", gap: 4 }}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Lab: Design Tokens & Accessibility
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ display: "grid", gap: 3 }}>
            <Box>
              <Button
                variant="outlined"
                onClick={() => setShowBefore(!showBefore)}
                sx={{ mb: 2 }}
              >
                {showBefore ? "Show Accessible Tokens" : "Show Inaccessible Tokens (Before)"}
              </Button>
            </Box>
            {showBefore ? <InaccessibleDemo /> : <AccessibleDemo />}
            
            <Box sx={{ mt: 3, display: "grid", gap: 2 }}>
              <Typography variant="h6">Tokens Comparison</Typography>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2 }}>
                <Paper sx={{ p: 2, bgcolor: "grey.100" }}>
                  <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                    Before (Inaccessible)
                  </Typography>
                  <Typography variant="body2" component="pre" sx={{ fontSize: "0.75rem", overflow: "auto" }}>
                    {JSON.stringify(tokensBefore, null, 2)}
                  </Typography>
                </Paper>
                <Paper sx={{ p: 2, bgcolor: "rgba(76, 175, 80, 0.1)" }}>
                  <Typography variant="subtitle2" gutterBottom fontWeight={600}>
                    After (Accessible)
                  </Typography>
                  <Typography variant="body2" component="pre" sx={{ fontSize: "0.75rem", overflow: "auto" }}>
                    {JSON.stringify(tokensAfter, null, 2)}
                  </Typography>
                </Paper>
              </Box>
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" gutterBottom>Key Changes:</Typography>
              <Box component="ul" sx={{ pl: 3 }}>
                <li>
                  <strong>Primary:</strong> {tokensBefore.color.primary} → {tokensAfter.color.primary}
                </li>
                <li>
                  <strong>Secondary:</strong> {tokensBefore.color.secondary} → {tokensAfter.color.secondary}
                </li>
                <li>
                  <strong>Text Primary:</strong> {tokensBefore.color.textPrimary} → {tokensAfter.color.textPrimary}
                </li>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                The accessible tokens meet WCAG AA contrast requirements for better readability and accessibility.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

