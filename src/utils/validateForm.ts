import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("El nombre de usuario es obligatorio."),
  password: yup
    .string()
    .trim()
    .required("La contraseña es obligatorio.")
    .min(6, "El mínimo debe ser 6 caracteres")
    .max(20, "El máximo debe ser 20 caracteres"),
});
