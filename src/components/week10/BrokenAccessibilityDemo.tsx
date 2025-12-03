import { Box, Typography, Alert } from "@mui/material";

export default function BrokenAccessibilityDemo() {
  return (
    <Box>
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
    </Box>
  );
}
