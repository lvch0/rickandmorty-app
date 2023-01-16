import * as yup from "yup";

export const LoginValidate = yup.object().shape({
  username: yup.string().trim().required("Este campo es obligatorio."),
  password: yup.string().trim().required("Este campo es obligatorio."),
});
