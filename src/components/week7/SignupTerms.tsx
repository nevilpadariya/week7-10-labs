import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, TextField, Button, FormControlLabel, Checkbox, FormHelperText } from "@mui/material";

const termsSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "At least 6 chars"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the Terms",
  }),
});

type TermsValues = z.infer<typeof termsSchema>;

export default function SignupTerms() {
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
