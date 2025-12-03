import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const weeks = [7, 8, 9, 10, 11, 13, 14];

  return (
    <AppBar position="static" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 4, fontWeight: 600 }}>
          Labs Portal
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {weeks.map((week) => {
            const path = `/week${week}`;
            const isActive = location.pathname === path || (location.pathname === "/" && week === 7);
            return (
              <Button
                key={week}
                component={Link}
                to={path}
                color="inherit"
                variant={isActive ? "outlined" : "text"}
                sx={{
                  borderColor: isActive ? "rgba(255, 255, 255, 0.5)" : "transparent",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Week {week}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

