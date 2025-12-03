import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    const t = input.trim();
    if (!t) return;
    setTodos([...todos, t]);
    setInput("");
  };

  const remove = (idx: number) => setTodos(todos.filter((_, i) => i !== idx));

  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          size="small"
          fullWidth
          aria-label="New todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a todo..."
        />
        <Button variant="contained" onClick={addTodo}>
          Add
        </Button>
      </Box>
      {todos.length === 0 ? (
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
          No todos yet. Add one above!
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {todos.map((t, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                p: 1,
                bgcolor: "action.hover",
                borderRadius: 1,
              }}
            >
              <Typography sx={{ flex: 1 }}>{t}</Typography>
              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={() => remove(i)}
                aria-label={`Remove ${t}`}
              >
                ✕
              </Button>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}
