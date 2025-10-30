# Demo 2 — Signup Form (RHF + Zod + MUI) (15–18 min)

## Goal
Demonstrate a production-grade form with validation and MUI inputs.

## Setup
Install once in your project:
```
npm i @mui/material @emotion/react @emotion/styled react-hook-form zod @hookform/resolvers
```

## Steps
1) Define Zod schema (name, email, password).
2) Initialize form: `useForm({ resolver: zodResolver(schema) })`.
3) Use `Controller` to bind MUI `TextField`.
4) Show validation errors via `fieldState.error?.message`.
5) Submit → `alert(JSON.stringify(values))`.

## Talking Points
- RHF minimizes re-renders.
- Zod centralizes validation.
- A11y via MUI `error` + `helperText`.
