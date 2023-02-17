import * as Yup from "yup";

const passwordRegExr = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

const password = Yup.string()
  .matches(
    passwordRegExr,
    "Password must contain at least 5 characters, including Upper/lower case and numbers"
  )
  .required("Please enter your password")
  .min(8, "Password must be at least 8 characters long")
  .label("Password");

const email = Yup.string()
  .required("Please enter your email")
  .email("Email is invalid")
  .label("Email");

  const confirmPassword = Yup.string()
  .oneOf([Yup.ref("password"), undefined], "Passwords must match")
  .required("Please confirm your password");


const phoneNumber = Yup.string()
  .required("Please enter your phone number")
  .min(10, "Phone number must be at least 10 digits long")
  .label("Phone Number");

const firstName = Yup.string()
  .required("Please input your legal first name")
  .min(2, "First name must be at least 2 digits long")
  .label("First Name");

const lastName = Yup.string()
  .required("Please input your legal last name")
  .min(2, "Last name must be at least 2 digits long")
  .label("Last Name");

export const loginValidationSchema = Yup.object().shape({
  email,
  password,
});

export const signUpValidationSchema = Yup.object().shape({
  confirmPassword,
  email,
  password,
  phoneNumber,
});

export const nameValidationSchema = Yup.object().shape({
  firstName,
  lastName,
});
