import { useState } from 'react';
import { Box, Tabs, Tab, Typography, Container, Paper } from '@mui/material';
import Form from '../components/week13/Form';
import RAGIntegration from '../components/week13/RAGIntegration';
import EthicsGuardrails from '../components/week13/EthicsGuardrails';

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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function Week13() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        Week 13: Copilot, RAG & Ethics
      </Typography>
      
      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Part 1: Copilot Hands-On" />
            <Tab label="Part 2: RAG Integration" />
            <Tab label="Part 3: Ethics & Guardrails" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Typography variant="h6" gutterBottom align="center">
            Task 1 & 2: Login Form with 'Remember me'
          </Typography>
          <Form />
          <Box sx={{ mt: 4, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Notes:
            </Typography>
            <Typography variant="body2">
              The login form implements standard authentication fields. 
              State management handles the input changes, and the "Remember me" checkbox is included as per requirements.
              Material-UI components are used for consistent styling.
            </Typography>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <RAGIntegration />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <EthicsGuardrails />
        </TabPanel>
      </Paper>
    </Container>
  );
}
