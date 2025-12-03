import { Container, Typography } from '@mui/material';
import Chatbot from '../components/week14/Chatbot';

export default function Week14() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Week 14: Conversational UI Mini Project
      </Typography>
      <Chatbot />
    </Container>
  );
}
