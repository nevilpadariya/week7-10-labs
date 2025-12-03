import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import BrokenAccessibilityDemo from "../components/week10/BrokenAccessibilityDemo";
import CommonIssues from "../components/week10/CommonIssues";
import FixesSolutions from "../components/week10/FixesSolutions";
import TestingTools from "../components/week10/TestingTools";

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
      id={`week10-tabpanel-${index}`}
      aria-labelledby={`week10-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Week10() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 10 Labs - Accessibility Audit
      </Typography>

      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            aria-label="Week 10 Labs Tabs"
          >
            <Tab label="Broken Demo" />
            <Tab label="Common Issues" />
            <Tab label="Fixes & Solutions" />
            <Tab label="Testing Tools" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <BrokenAccessibilityDemo />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <CommonIssues />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <FixesSolutions />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <TestingTools />
        </TabPanel>
      </Paper>
    </Container>
  );
}
