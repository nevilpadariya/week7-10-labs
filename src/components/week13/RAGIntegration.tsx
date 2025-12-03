import { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Card, 
  CardContent, 
  Link,
  CircularProgress,
  Chip
} from '@mui/material';
import { queryRAG, RAGResult } from './userRAGQuery';

export default function RAGIntegration() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<RAGResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleQuery = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      const response = await queryRAG(query);
      setResult(response);
    } catch (error) {
      console.error("RAG Query failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        RAG Integration Demo
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          label="Ask a question about SJSU"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., Who founded SJSU?"
          onKeyPress={(e) => e.key === 'Enter' && handleQuery()}
        />
        <Button 
          variant="contained" 
          onClick={handleQuery}
          disabled={loading}
          sx={{ minWidth: 100 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Ask'}
        </Button>
      </Box>

      {result && (
        <Paper elevation={2} sx={{ p: 3, bgcolor: 'background.default' }}>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem' }}>
            {result.answer}
          </Typography>
          
          {result.citations.length > 0 && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Sources:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {result.citations.map((citation) => (
                  <Card key={citation.id} variant="outlined" sx={{ mb: 1, width: '100%' }}>
                    <CardContent sx={{ py: 1, '&:last-child': { pb: 1 } }}>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        "{citation.text}"
                      </Typography>
                      <Link 
                        href={citation.source} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontSize: '0.875rem' }}
                      >
                        <Chip label="Source" size="small" color="primary" variant="outlined" clickable />
                        {citation.source}
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
          )}
        </Paper>
      )}
    </Box>
  );
}
