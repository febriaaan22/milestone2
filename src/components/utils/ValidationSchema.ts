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

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])/,
      "Password must contain both letters and numbers"
    )
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirming password is required"),
});

export const changePasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(8, "Old password must be at least 8 characters long.")
    .required("Old password is required"),
  newPassword: Yup.string()
    .min(8, "New password must be at least 8 characters long.")
    .matches(
      /^(?=.*[a-z])/,
      "New password must contain at least one lowercase letter."
    )
    .matches(
      /^(?=.*[A-Z])/,
      "New password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*[0-9])/, "New password must contain at least one number.")
    .notOneOf(
      [Yup.ref("oldPassword")],
      "New password must be different from the old password."
    )
    .required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), undefined], "Passwords must match")
    .required("Confirming new password is required"),
});

export const applyAsCounselorValidationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  strNumber: Yup.string().required("STR Number is required"),
  specialization: Yup.string().required("Specialization is required"),
  yearsOfExperience: Yup.number()
    .typeError("You must enter a number")
    .min(0, "Years of experience cannot be negative")
    .required("Years of experience is required"),
});
