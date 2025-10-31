import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "At least 6 chars"),
  confirmPassword: z.string().min(6, "At least 6 chars"),
}).refine((d) => d.password === d.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

type Values = z.infer<typeof schema>;

export default function SignupConfirm() {
  const { control, handleSubmit } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<Values> = (d) => alert(JSON.stringify(d, null, 2));

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "grid", gap: 2, maxWidth: 420 }}>
      {(["email","password","confirmPassword"] as const).map((name) => (
        <Controller
          key={name}
          name={name}
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label={name[0].toUpperCase()+name.slice(1)}
              type={name.includes("password") ? "password" : name === "email" ? "email" : "text"}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />
      ))}
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
}
