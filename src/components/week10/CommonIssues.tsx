import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import { Cancel as CancelIcon } from "@mui/icons-material";

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

export default function CommonIssues() {
  return (
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
  );
}
