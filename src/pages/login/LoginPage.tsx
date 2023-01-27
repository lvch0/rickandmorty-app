import {
  Container,
  Button,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useNotification } from "../../context/NotificationProvider";
import { LoginValidate } from "../../utils/validateForm";
import { useFormik } from "formik";

type LoginType = {
  username: string;
  password: string;
};

const LoginPage: FC<{}> = () => {
  const { getSuccess } = useNotification();
  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {
      getSuccess(JSON.stringify(values))
    }
  });

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4">Iniciar Sesión</Typography>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                name="username"
                type="text"
                margin="normal"
                size="small"
                fullWidth
                label="Email"
                sx={{ mt: 2, mb: 1.5 }}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                name="password"
                type="password"
                size="small"
                margin="normal"
                fullWidth
                label="Contraseña"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
