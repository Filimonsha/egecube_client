"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useRouter, useSearchParams} from "next/navigation";
import {registerUser} from "@/auth/api/register";
import {UserBase} from "@/types/backend/user";

const textFields = [
  {id: "firstName", label: "Имя", required: true},
  {id: "lastName", label: "Фамилия", required: true},
  {id: "phone", label: "Телефон", required: false}
]


const SignIn = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl") || "/profile"

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const regRes = await registerUser({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      userMail: data.get("email"),
      userPhone: data.get("phone"),
      password: data.get("password")
    } as UserBase)

    if (regRes) router.push(callbackUrl)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Приветствую нового пользователя!
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {textFields.map(field =>
            <TextField
              margin="normal" required={field.required} fullWidth
              name={field.id} label={field.label} type="text"
              id={field.id}
            />
          )}
          <TextField
            margin="normal" required fullWidth
            id="email" label="Электронная почта"
            name="email" autoComplete="email" type="email"
            autoFocus
          />
          <TextField
            margin="normal" required fullWidth
            name="password" label="Пароль" id="password"
            type="password" autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Зарегистрироваться
          </Button>
          <Grid container>
            <Grid item>
              <Link href={"/signin?" + searchParams} variant="body2">
                {"Уже есть аккаунт? Войти"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default SignIn