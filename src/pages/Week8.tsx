import { Container, Typography, Paper } from "@mui/material";

export default function Week8() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 8 Labs
      </Typography>
      <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" color="text.secondary" sx={{ fontStyle: "italic" }}>
          Week 8 labs coming soon...
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          Content will be added here when ready.
        </Typography>
      </Paper>
    </Container>
  );
}

