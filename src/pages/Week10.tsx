import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Alert,
} from "@mui/material";
import { CheckCircle as CheckCircleIcon, Cancel as CancelIcon } from "@mui/icons-material";

// Week 10 Page Component
export default function Week10() {
  const issues = [
    { id: 1, issue: "Zoom disabled", description: "`user-scalable=no` in viewport meta tag", severity: "High" },
    { id: 2, issue: "Bad heading order", description: "Starts at `<h3>` instead of `<h1>`", severity: "High" },
    { id: 3, issue: "Low contrast text", description: "Text colors don't meet WCAG AA standards", severity: "High" },
    { id: 4, issue: "Non-semantic controls", description: "Divs/spans used as buttons without proper roles", severity: "High" },
    { id: 5, issue: "Color-only meaning", description: "Green 'OK' indicator without icon or text", severity: "Medium" },
    { id: 6, issue: "Vague link text", description: "Links say 'Click here' instead of descriptive text", severity: "Medium" },
    { id: 7, issue: "Missing alt text", description: "Images without `alt` attributes", severity: "High" },
    { id: 8, issue: "Tiny tap targets", description: "Navigation buttons too small for touch", severity: "Medium" },
    { id: 9, issue: "Missing form labels", description: "Form fields without associated `<label>` elements", severity: "High" },
    { id: 10, issue: "Wrong input types", description: "Email/tel/password fields use wrong `type` attribute", severity: "Medium" },
    { id: 11, issue: "Useless error messages", description: "Error messages like 'Invalid' without context", severity: "Medium" },
    { id: 12, issue: "Focus outline removed", description: "Global `:focus { outline: none }` removes keyboard navigation indicator", severity: "High" },
    { id: 13, issue: "Keyboard trap", description: "Modal traps focus with no ESC key or focus management", severity: "High" },
    { id: 14, issue: "Auto-advancing carousel", description: "Carousel auto-plays without pause/stop controls", severity: "Medium" },
  ];

  const fixes = [
    "Allow zoom: `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`",
    "Start with `<h1>` and use proper heading hierarchy",
    "Increase contrast: darken text or lighten background to meet WCAG AA",
    "Replace `<div>`/`<span>` with `<button>` or add proper ARIA roles and keyboard handlers",
    "Add icons or text labels (e.g., ✓ OK / ✕ Error)",
    "Use descriptive link text (e.g., 'Create account' instead of 'Click here')",
    "Add `alt=\"descriptive text\"` to images (or `alt=\"\"` if decorative)",
    "Increase tap target size to at least 44x44px",
    "Add `<label for=\"id\">` elements for all form inputs",
    "Use correct `type` attributes: `email`, `tel`, `password`",
    "Provide specific, actionable error messages",
    "Never remove focus outlines; design visible focus states instead",
    "Trap focus in modal, close on ESC, restore focus to trigger",
    "Provide Play/Pause and previous/next controls; stop auto-advance",
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 10 Labs - Accessibility Audit & Fixes
      </Typography>

      <Box sx={{ display: "grid", gap: 4 }}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Lab: Broken Accessibility Demo
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Alert severity="info" sx={{ mb: 3 }}>
            This lab focuses on auditing and fixing common WCAG accessibility issues. 
            The HTML files are located in the <code>labs_w10</code> directory.
          </Alert>

          <Typography variant="h6" gutterBottom sx={{ mt: 3, mb: 2 }}>
            HTML Files Available:
          </Typography>
          <Box component="ul" sx={{ mb: 3 }}>
            <li><code>index.html</code> — Broken page with intentional issues</li>
            <li><code>index_fixed.html</code> — Reference fixed version</li>
            <li><code>zoom-disabled.html</code> / <code>zoom-enabled.html</code> — Zoom examples</li>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Open the HTML files directly in your browser or use the provided server scripts to test accessibility.
          </Typography>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Common Accessibility Issues Found
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <List>
            {issues.map((item) => (
              <ListItem key={item.id} sx={{ flexDirection: "column", alignItems: "flex-start", mb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CancelIcon color="error" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography variant="body1" fontWeight={500}>{item.issue}</Typography>
                        <Chip 
                          label={item.severity} 
                          size="small" 
                          color={item.severity === "High" ? "error" : "warning"}
                        />
                      </Box>
                    }
                    secondary={item.description}
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Fixes & Solutions
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <List>
            {fixes.map((fix, index) => (
              <ListItem key={index} sx={{ flexDirection: "column", alignItems: "flex-start", mb: 1 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", width: "100%" }}>
                  <ListItemIcon sx={{ minWidth: 40, pt: 0.5 }}>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  <ListItemText primary={fix} />
                </Box>
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
            Testing Tools & Workflow
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ display: "grid", gap: 2 }}>
            <Typography variant="h6">1. Automated Testing:</Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>Run <strong>Lighthouse</strong> (Chrome DevTools) - Mobile accessibility audit</li>
              <li>Use <strong>axe DevTools</strong> browser extension</li>
            </Box>

            <Typography variant="h6" sx={{ mt: 2 }}>2. Manual Testing:</Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>Keyboard only navigation (Tab, Shift+Tab, Enter, Space, ESC)</li>
              <li>Screen reader testing (VoiceOver on Mac, NVDA on Windows)</li>
              <li>Pinch-to-zoom on mobile devices</li>
            </Box>

            <Typography variant="h6" sx={{ mt: 2 }}>3. Goals:</Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <li>Fix at least 3 issues (more encouraged)</li>
              <li>Aim for ≥90 Accessibility score in Lighthouse</li>
              <li>Document all changes made</li>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

