import { useNavigate, Link } from "react-router-dom";
import { Formik } from "formik";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import AuthModal from "../../components/AuthModal";
import {
  emailSchema,
  passwordSchema,
  requiredSchema,
  repeatPasswordSchema,
} from "../../utils/validate";
import PasswordInput from "../../components/_ui/PasswordInput";

const StyledHeading = styled.h1`
  margin: 0;
`;

const StyledSignInLink = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #1a76d2;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

function SignUp() {
  const navigate = useNavigate();

  const SignUpSchema = Yup.object().shape({
    email: emailSchema,
    password: passwordSchema,
    repeatPassword: repeatPasswordSchema,
    firstName: requiredSchema,
    lastName: requiredSchema,
  });

  return (
    <AuthModal>
      <StyledHeading>Sign Up</StyledHeading>
      <StyledSignInLink>
        <p>Already have an account?</p>
        <StyledLink to="/signin">Log in</StyledLink>
      </StyledSignInLink>
      <Formik
        onSubmit={() => navigate("/")}
        initialValues={{
          email: "",
          password: "",
          repeatPassword: "",
          firstName: "",
          lastName: "",
        }}
        validationSchema={SignUpSchema}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              id="firstName"
              name="firstName"
              label="First name"
              value={values.firstName}
              error={touched.firstName && !!errors.firstName}
              helperText={touched.firstName && errors.firstName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              id="lastName"
              name="lastName"
              label="Last name"
              value={values.lastName}
              error={touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              onChange={handleChange}
              size="small"
            />
            <TextField
              sx={{ marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={values.email}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              type="email"
              size="small"
            />
            <PasswordInput
              sx={{ marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              id="password"
              name="password"
              label="Password"
              value={values.password}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              onChange={handleChange}
              size="small"
            />
            <PasswordInput
              sx={{ marginBottom: "10px" }}
              variant="outlined"
              fullWidth
              id="repeatPassword"
              name="repeatPassword"
              label="Repeat password"
              value={values.repeatPassword}
              error={touched.repeatPassword && !!errors.repeatPassword}
              helperText={touched.repeatPassword && errors.repeatPassword}
              onChange={handleChange}
              size="small"
            />
            <Button
              sx={{ marginTop: "10px" }}
              variant="contained"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </AuthModal>
  );
}

export default SignUp;
