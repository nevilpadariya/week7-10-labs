import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "At least 6 chars"),
  terms: z.literal(true, { errorMap: () => ({ message: "You must accept the Terms" }) }),
});

type Values = z.infer<typeof schema>;

export default function SignupTerms() {
  const { control, handleSubmit, watch } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "", terms: false },
  });

  const onSubmit: SubmitHandler<Values> = (d) => alert(JSON.stringify(d, null, 2));
  const termsChecked = watch("terms");

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "grid", gap: 2, maxWidth: 420 }}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <TextField {...field} label="Email" error={!!fieldState.error} helperText={fieldState.error?.message} />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <TextField {...field} type="password" label="Password" error={!!fieldState.error} helperText={fieldState.error?.message} />
        )}
      />
      <Controller
        name="terms"
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <FormControlLabel control={<Checkbox {...field} checked={!!field.value} />} label="I accept the Terms of Service" />
            {!!fieldState.error && <FormHelperText error>{fieldState.error.message}</FormHelperText>}
          </div>
        )}
      />
      <Button type="submit" variant="contained" disabled={!termsChecked}>Create Account</Button>
    </Box>
  );
}
