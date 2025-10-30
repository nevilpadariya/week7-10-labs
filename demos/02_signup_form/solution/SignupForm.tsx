import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "At least 6 characters"),
});

type FormValues = z.infer<typeof schema>;

export default function SignupForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "grid", gap: 2, maxWidth: 420 }}>
      {(["name","email","password"] as const).map((name) => (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={name[0].toUpperCase()+name.slice(1)}
              type={name === "password" ? "password" : name === "email" ? "email" : "text"}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      ))}
      <Button type="submit" variant="contained">Sign Up</Button>
    </Box>
  );
}
