import * as Yup from "yup";

// Regex for alphanumeric validation
const alphanumericRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      alphanumericRegex,
      "Password must contain both letters and numbers"
    )
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
});
