import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import Lab1RouterBasics from "../../labs_w8/01_router_basics/solution/Lab1RouterBasics";
import Lab2NestedRoute from "../../labs_w8/02_nested_route/solution/Lab2NestedRoute";
import Lab3UsersParams from "../../labs_w8/03_route_params_users/solution/Lab3UsersParams";
import Lab4ThemeToggle from "../../labs_w8/04_theme_toggle/solution/Lab4ThemeToggle";
import Lab5PersistTheme from "../../labs_w8/05_persist_theme_localstorage/solution/Lab5PersistTheme";
import Lab6DesignTokens from "../../labs_w8/06_design_tokens_custom_palette/solution/Lab6DesignTokens";

// Week 8 Page Component
export default function Week8() {
  const labs = [
    { title: "Lab 1 - Router Basic", component: <Lab1RouterBasics /> },
    { title: "Lab 2: Nested Route", component: <Lab2NestedRoute /> },
    { title: "Lab 3: Route Params (Users)", component: <Lab3UsersParams /> },
    { title: "Lab 4: Theme Toggle", component: <Lab4ThemeToggle /> },
    { title: "Lab 5: Persist Theme (LocalStorage)", component: <Lab5PersistTheme /> },
    { title: "Lab 6: Design Tokens (Custom Palette)", component: <Lab6DesignTokens /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 8 Labs - All Solutions
      </Typography>

      <Box sx={{ display: "grid", gap: 4 }}>
        {labs.map((lab, index) => (
          <Paper key={index} elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
              {lab.title}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {lab.component}
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

