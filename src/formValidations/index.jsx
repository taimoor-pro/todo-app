import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a email!"),
  password: yup
    .string()
    .min(6)
    .max(10)
    .required("Please enter a valid password!"),
  role: yup.string().required("Please select a role!"),
});

export const regSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a email!"),
  password: yup
    .string()
    .min(6)
    .max(10)
    .required("Please enter a valid password!"),
});

export const todoSchema = yup.object().shape({
  todo: yup.string().required("Please enter a text to create todo!")
});
