import * as yup from "yup";

const formSchema = yup.object().shape({
  first_name: yup
    .string()
    .trim()
    .required("First name is required.")
    .min(3, "Name must be 2 characters in length."),
  last_name: yup
    .string()
    .trim()
    .required("Last name is required.")
    .min(3, "Name must be 3 characters in length."),
  email: yup
    .string()
    .email("Must be a valid email address.")
    .required("Email is required."),
  password: yup
    .string()
    .required("Must enter your password")
    .min(8, "Password should be 8 characters in length"),
  termsOfService: yup.boolean(),
});

export default formSchema;