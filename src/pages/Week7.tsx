import { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Divider,
  Chip,
} from "@mui/material";

// Lab 1: Counter with Reset
function CounterWithReset() {
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

// Lab 2: Todo List
function TodoList() {
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

// Lab 3: Window Width Tracker
function useWindowWidth() {
  const [width, setWidth] = useState(() => window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return width;
}

function WindowWidth() {
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

// Lab 4: Confirm Password
const confirmPasswordSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "At least 6 chars"),
    confirmPassword: z.string().min(6, "At least 6 chars"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type ConfirmPasswordValues = z.infer<typeof confirmPasswordSchema>;

function SignupConfirm() {
  const { control, handleSubmit } = useForm<ConfirmPasswordValues>({
    resolver: zodResolver(confirmPasswordSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<ConfirmPasswordValues> = (d) =>
    alert(JSON.stringify(d, null, 2));

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "grid", gap: 2, maxWidth: 500 }}
    >
      {(["email", "password", "confirmPassword"] as const).map((name) => (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={name[0].toUpperCase() + name.slice(1)}
              type={name.includes("password") ? "password" : name === "email" ? "email" : "text"}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />
      ))}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

// Lab 5: Terms Checkbox
const termsSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "At least 6 chars"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the Terms",
  }),
});

type TermsValues = z.infer<typeof termsSchema>;

function SignupTerms() {
  const { control, handleSubmit, watch } = useForm<TermsValues>({
    resolver: zodResolver(termsSchema),
    defaultValues: { email: "", password: "", terms: false },
  });

  const onSubmit: SubmitHandler<TermsValues> = (d) => alert(JSON.stringify(d, null, 2));
  const termsChecked = watch("terms");

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "grid", gap: 2, maxWidth: 500 }}
    >
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            fullWidth
          />
        )}
      />
      <Controller
        name="terms"
        control={control}
        render={({ field, fieldState }) => (
          <Box>
            <FormControlLabel
              control={<Checkbox {...field} checked={!!field.value} />}
              label="I accept the Terms of Service"
            />
            {!!fieldState.error && <FormHelperText error>{fieldState.error.message}</FormHelperText>}
          </Box>
        )}
      />
      <Button type="submit" variant="contained" disabled={!termsChecked}>
        Create Account
      </Button>
    </Box>
  );
}

// Week 7 Page Component
export default function Week7() {
  const labs = [
    { title: "Lab 1: Counter with Reset", component: <CounterWithReset /> },
    { title: "Lab 2: Todo List", component: <TodoList /> },
    { title: "Lab 3: Window Width Tracker", component: <WindowWidth /> },
    { title: "Lab 4: Confirm Password", component: <SignupConfirm /> },
    { title: "Lab 5: Terms Checkbox", component: <SignupTerms /> },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        Week 7 Labs - All Solutions
      </Typography>

      <Box sx={{ display: "grid", gap: 4 }}>
        {labs.map((lab, index) => (
          <Paper key={index} elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 2, fontWeight: 500 }}>
              {lab.title}
            </Typography>
            <Divider sx={{ mb: 3 }} />
            {lab.component}
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

