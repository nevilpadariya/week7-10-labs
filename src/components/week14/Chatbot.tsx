import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Stack,
  Chip,
  Avatar
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import { queryAI } from './queryAI';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [role, setRole] = useState('Tutor');
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GEMINI_API_KEY || '');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await queryAI(input, role, apiKey);
      const aiMessage: Message = { role: 'ai', text: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chatbot Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePromptModifier = (modifier: string) => {
    setInput(prev => {
      const trimmed = prev.trim();
      return trimmed ? `${trimmed} ${modifier}` : modifier;
    });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, height: '80vh', display: 'flex', flexDirection: 'column' }}>
      <Paper elevation={3} sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToyIcon color="primary" />
          AI Assistant
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <TextField
            size="small"
            label="Gemini API Key"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter API Key"
            sx={{ width: 200 }}
          />
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <InputLabel>Role Mode</InputLabel>
            <Select
              value={role}
              label="Role Mode"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value="Tutor">Tutor</MenuItem>
              <MenuItem value="Critic">Critic</MenuItem>
              <MenuItem value="Coach">Coach</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ flexGrow: 1, mb: 2, p: 2, overflowY: 'auto', bgcolor: '#f5f5f5' }}>
        <Stack spacing={2}>
          {messages.length === 0 && (
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
              Start a conversation with your AI {role}...
              {!apiKey && <br />}
              {!apiKey && "(Enter API Key for real responses, otherwise mock mode is active)"}
            </Typography>
          )}
          {messages.map((msg, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                gap: 1
              }}
            >
              {msg.role === 'ai' && <Avatar sx={{ bgcolor: 'primary.main' }}><SmartToyIcon /></Avatar>}
              <Paper 
                elevation={1} 
                sx={{ 
                  p: 2, 
                  maxWidth: '70%', 
                  bgcolor: msg.role === 'user' ? 'primary.light' : 'white',
                  color: msg.role === 'user' ? 'white' : 'text.primary',
                  borderRadius: 2
                }}
              >
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>{msg.text}</Typography>
              </Paper>
              {msg.role === 'user' && <Avatar sx={{ bgcolor: 'secondary.main' }}><PersonIcon /></Avatar>}
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Stack>
      </Paper>

      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <Chip 
          label="Explain like I'm 5" 
          onClick={() => handlePromptModifier("Explain like I'm 5")} 
          clickable 
          color="primary" 
          variant="outlined" 
        />
        <Chip 
          label="Summarize in 3 bullets" 
          onClick={() => handlePromptModifier("Summarize in 3 bullets")} 
          clickable 
          color="primary" 
          variant="outlined" 
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 1 }}>
        <TextField
          fullWidth
          placeholder={`Message as ${role}...`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          disabled={loading}
          autoFocus
        />
        <Button 
          variant="contained" 
          endIcon={<SendIcon />} 
          onClick={handleSend}
          disabled={loading || !input.trim()}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
