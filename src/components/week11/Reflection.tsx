import { Box, Typography } from "@mui/material";

export default function Reflection() {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Typography variant="body1">
        <strong>1. Which framework felt easier to use?</strong>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        Consider the setup time, code verbosity, and learning curve.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>2. Which framework felt safer in terms of accessibility?</strong>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        Compare Lighthouse accessibility scores. Check keyboard navigation, screen reader
        support, and ARIA attributes.
      </Typography>

      <Typography variant="body1" sx={{ mt: 2 }}>
        <strong>3. Developer Effort vs Accessibility Outcome:</strong>
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ pl: 2 }}>
        Did the framework that required less code also achieve better accessibility scores?
        Document your findings.
      </Typography>
    </Box>
  );
}
