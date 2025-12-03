import { useState, useEffect } from "react";
import { Box, Typography, Chip } from "@mui/material";

function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

export default function WindowWidth() {
  const width = useWindowWidth();
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
      <Typography variant="body1">Window width:</Typography>
      <Chip label={`${width}px`} color="primary" variant="outlined" />
      <Typography variant="caption" color="text.secondary">
        (Resize your browser to see it update)
      </Typography>
    </Box>
  );
}
