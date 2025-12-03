import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Button, Typography, Paper } from "@mui/material";

// 1. Define TOKENS
const TOKENS = {
  colors: {
    primary: "#9c27b0", // Purple
    secondary: "#ff9800", // Orange
    background: "#f3e5f5", // Light Purple
  },
  typography: {
    fontFamily: "'Courier New', Courier, monospace",
  },
  spacing: 8, // Base spacing unit
};

// 2. Create Theme using Tokens
const theme = createTheme({
  palette: {
    primary: {
      main: TOKENS.colors.primary,
    },
    secondary: {
      main: TOKENS.colors.secondary,
    },
    background: {
      default: TOKENS.colors.background,
    },
  },
  typography: {
    fontFamily: TOKENS.typography.fontFamily,
  },
  spacing: TOKENS.spacing,
});

const Lab6DesignTokens = () => {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ p: 3, bgcolor: 'background.default' }}>
        <Typography variant="h5" gutterBottom color="primary">
          Design Tokens Demo
        </Typography>
        
        <Box sx={{ mb: 2, p: 2, border: '1px solid', borderColor: 'primary.main' }}>
            <Typography>This box uses primary color border.</Typography>
        </Box>

        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        
        <Typography sx={{ mt: 2 }}>
            Font Family: {theme.typography.fontFamily}
        </Typography>
      </Paper>
    </ThemeProvider>
  );
};

export default Lab6DesignTokens;
