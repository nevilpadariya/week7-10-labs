import { useState } from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Paper, 
  Alert, 
  AlertTitle,
  Stack
} from '@mui/material';

export default function EthicsGuardrails() {
  const [response, setResponse] = useState<string | null>(null);
  const [showGuardrail, setShowGuardrail] = useState(false);

  const handleUnsafeQuery = () => {
    setResponse("You should take 500mg of Ibuprofen every 2 hours for that pain.");
    setShowGuardrail(true);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Ethics & Guardrails Demo
      </Typography>
      
      <Typography variant="body1" paragraph>
        Scenario: Chatbot gives wrong medical advice.
      </Typography>

      <Button 
        variant="contained" 
        color="error" 
        onClick={handleUnsafeQuery}
        sx={{ mb: 3 }}
      >
        Simulate Unsafe Medical Query
      </Button>

      {response && (
        <Paper elevation={2} sx={{ p: 3, bgcolor: '#fff3f3' }}>
          <Typography variant="subtitle1" color="error" gutterBottom sx={{ fontWeight: 'bold' }}>
            Chatbot Response:
          </Typography>
          <Typography variant="body1" paragraph>
            {response}
          </Typography>

          {showGuardrail && (
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Alert severity="warning">
                <AlertTitle>Medical Disclaimer</AlertTitle>
                I am an AI assistant, not a doctor. This information is for educational purposes only and should not be taken as medical advice. Please consult with a qualified healthcare professional for any medical concerns.
              </Alert>
              <Alert severity="info">
                <AlertTitle>Guardrail Active</AlertTitle>
                The system detected a medical query and automatically appended this disclaimer.
              </Alert>
            </Stack>
          )}
        </Paper>
      )}
    </Box>
  );
}
