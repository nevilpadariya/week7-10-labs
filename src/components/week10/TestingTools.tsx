import { Box, Typography, Alert } from "@mui/material";

export default function TestingTools() {
  return (
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
      
      <Alert severity="success" sx={{ mt: 2 }}>
        Both frameworks should score well on accessibility, but there may be differences in
        specific areas. Document your findings!
      </Alert>
    </Box>
  );
}
