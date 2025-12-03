import { Box, Alert } from "@mui/material";

export default function LighthouseInstructions() {
  return (
    <Box>
      <Box component="ol" sx={{ pl: 3 }}>
        <li>Open Chrome DevTools (F12)</li>
        <li>Navigate to the "Lighthouse" tab</li>
        <li>Select "Accessibility" category</li>
        <li>Choose "Mobile" or "Desktop"</li>
        <li>Click "Generate report"</li>
        <li>Compare scores between MUI and AntD implementations</li>
      </Box>
      <Alert severity="success" sx={{ mt: 2 }}>
        Both frameworks should score well on accessibility, but there may be differences in
        specific areas. Document your findings!
      </Alert>
    </Box>
  );
}
