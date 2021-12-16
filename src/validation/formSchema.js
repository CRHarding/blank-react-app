import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required fam")
    .min(3, "Username has to be at least 3 characters long fam"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  role: yup
    .string()
    .oneOf(
      ["White Belt", "Blue Belt", "Purple Belt", "Brown Belt", "Black Belt"],
      "Please select your rank"
    ),
  experience: yup
    .string()
    .oneOf(
      ["Beginner", "Advanced", "Master"],
      "Please select your experience level"
    ),
});

export default formSchema;
