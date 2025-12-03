import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Grid,
  Alert,
} from "@mui/material";
import MuiLoginForm from "../components/week11/MuiLoginForm";
import AntDLoginForm from "../components/week11/AntDLoginForm";
import MuiTable from "../components/week11/MuiTable";
import AntDTable from "../components/week11/AntDTable";
import Reflection from "../components/week11/Reflection";
import LighthouseInstructions from "../components/week11/LighthouseInstructions";

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
      id={`week11-tabpanel-${index}`}
      aria-labelledby={`week11-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Week11() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 11 Labs - Framework Trade-Offs
      </Typography>

      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            aria-label="Week 11 Labs Tabs"
          >
            <Tab label="Login Forms" />
            <Tab label="Data Tables" />
            <Tab label="Reflection" />
            <Tab label="Lighthouse" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Alert severity="info" sx={{ mb: 3 }}>
            Build a login form in both Material-UI and Ant Design. Compare developer effort vs
            accessibility outcome.
          </Alert>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MuiLoginForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <AntDLoginForm />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Comparison Notes:
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>
                <strong>MUI:</strong> Uses react-hook-form + zod for validation. Requires more
                boilerplate with Controller components.
              </li>
              <li>
                <strong>AntD:</strong> Built-in Form component with validation rules. Less code
                required, more declarative.
              </li>
              <li>
                <strong>Accessibility:</strong> Both frameworks provide good accessibility by
                default. Run Lighthouse audits to compare scores.
              </li>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <MuiTable />
            </Grid>
            <Grid item xs={12} md={6}>
              <AntDTable />
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Reflection />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <LighthouseInstructions />
        </TabPanel>
      </Paper>
    </Container>
  );
}
