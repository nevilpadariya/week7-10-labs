import { createTheme } from '@mui/material/styles';
import tokens from './tokens_after.json';

const theme = createTheme({
  palette: {
    primary: { main: tokens.color.primary },
    secondary: { main: tokens.color.secondary },
    text: { primary: tokens.color.textPrimary }
  },
  typography: tokens.typography,
  spacing: tokens.spacing.base
});

export default theme;
