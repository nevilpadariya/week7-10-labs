import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CounterWithReset() {
  const [count, setCount] = useState(0);
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap" }}>
      <Typography variant="body1" sx={{ minWidth: 100 }}>
        Count: <strong>{count}</strong>
      </Typography>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        +1
      </Button>
      <Button variant="outlined" onClick={() => setCount(0)}>
        Reset
      </Button>
    </Box>
  );
}
