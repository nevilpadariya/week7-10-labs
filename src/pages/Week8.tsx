import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import Lab1RouterBasics from "../components/week8/Lab1RouterBasics";
import Lab2NestedRoute from "../components/week8/Lab2NestedRoute";
import Lab3UsersParams from "../components/week8/Lab3UsersParams";
import Lab4ThemeToggle from "../components/week8/Lab4ThemeToggle";
import Lab5PersistTheme from "../components/week8/Lab5PersistTheme";
import Lab6DesignTokens from "../components/week8/Lab6DesignTokens";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`week8-tabpanel-${index}`}
      aria-labelledby={`week8-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Week8() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const labs = [
    { title: "Lab 1: Router Basics", component: <Lab1RouterBasics /> },
    { title: "Lab 2: Nested Route", component: <Lab2NestedRoute /> },
    { title: "Lab 3: Route Params", component: <Lab3UsersParams /> },
    { title: "Lab 4: Theme Toggle", component: <Lab4ThemeToggle /> },
    { title: "Lab 5: Persist Theme", component: <Lab5PersistTheme /> },
    { title: "Lab 6: Design Tokens", component: <Lab6DesignTokens /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 8 Labs
      </Typography>

      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            aria-label="Week 8 Labs Tabs"
          >
            {labs.map((lab, index) => (
              <Tab key={index} label={lab.title} />
            ))}
          </Tabs>
        </Box>

        {labs.map((lab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {lab.component}
          </TabPanel>
        ))}
      </Paper>
    </Container>
  );
}

