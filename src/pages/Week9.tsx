import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
} from "@mui/material";
import AccessibleDemo from "../components/week9/AccessibleDemo";
import InaccessibleDemo from "../components/week9/InaccessibleDemo";
import tokensBefore from "../components/week9/tokens_before.json";
import tokensAfter from "../components/week9/tokens_after.json";

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
      id={`week9-tabpanel-${index}`}
      aria-labelledby={`week9-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Week9() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 9 Labs
      </Typography>

      <Paper elevation={3}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs 
            value={value} 
            onChange={handleChange} 
            variant="scrollable" 
            scrollButtons="auto"
            aria-label="Week 9 Labs Tabs"
          >
            <Tab label="Design Tokens Demo" />
            <Tab label="Tokens Comparison" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={{ display: "grid", gap: 4 }}>
             <Box>
                <Typography variant="h6" gutterBottom>Before (Inaccessible)</Typography>
                <InaccessibleDemo />
             </Box>
             <Box>
                <Typography variant="h6" gutterBottom>After (Accessible)</Typography>
                <AccessibleDemo />
             </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <Box sx={{ display: "grid", gap: 2 }}>
              <Typography variant="h6">Tokens JSON Comparison</Typography>
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
        </TabPanel>
      </Paper>
    </Container>
  );
}
