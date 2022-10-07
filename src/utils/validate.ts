import * as Yup from "yup";

export const emailSchema = Yup.string()
  .email("Invalid email")
  .required("Required");

export const passwordSchema = Yup.string()
  .min(5, "Password must be at least 6 characters")
  .required("Required");

export const repeatPasswordSchema = Yup.string()
  .required()
  .min(5, "Password must be at least 6 characters")
  .oneOf([Yup.ref("password"), null], "Passwords must match");

export const requiredSchema = Yup.string().required("Required");
