import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import CounterWithReset from "../components/week7/CounterWithReset";
import TodoList from "../components/week7/TodoList";
import WindowWidth from "../components/week7/WindowWidth";
import SignupConfirm from "../components/week7/SignupConfirm";
import SignupTerms from "../components/week7/SignupTerms";

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
      id={`week7-tabpanel-${index}`}
      aria-labelledby={`week7-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Week7() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const labs = [
    { title: "Lab 1: Counter", component: <CounterWithReset /> },
    { title: "Lab 2: Todo List", component: <TodoList /> },
    { title: "Lab 3: Window Width", component: <WindowWidth /> },
    { title: "Lab 4: Confirm Password", component: <SignupConfirm /> },
    { title: "Lab 5: Terms Checkbox", component: <SignupTerms /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week CMPE 280 Labs
      </Typography>

      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            aria-label="Week CMPE 280 Labs Tabs"
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
