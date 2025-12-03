import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";

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

export default function FixesSolutions() {
  return (
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
  );
}
