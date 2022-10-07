import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { postRequest } from "../../api";
import { FormValuesType, OnSubmitTypes } from "./types";
import AuthModal from "../../components/AuthModal";
import { emailSchema, passwordSchema } from "../../utils/validate";
import PasswordInput from "../../components/_ui/PasswordInput";

const StyledSignUpLink = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeading = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #1a76d2;
  text-decoration: none;
  margin-left: 5px;
  &:hover {
    text-decoration: underline;
  }
`;

function SignIn() {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  const SignInSchema = Yup.object().shape({
    email: emailSchema,
    password: passwordSchema,
  });

  const onSubmit = (
    values: FormValuesType,
    { resetForm, setErrors }: OnSubmitTypes
  ) => {
    postRequest("/login", values)
      .then(() => {
        navigateToHomePage();
        resetForm();
      })
      .catch((err) =>
        setErrors({ email: err.response.data, password: err.response.data })
      );
  };

  return (
    <AuthModal>
      <StyledHeading>Sign In</StyledHeading>
      <StyledSignUpLink>
        <p>No account?</p>
        <StyledLink to="/signup">Registration</StyledLink>
      </StyledSignUpLink>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={SignInSchema}
      >
        {({ values, errors, handleChange, handleSubmit, touched }) => (
          <form onSubmit={handleSubmit}>
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
              onChange={handleChange}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
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

export default SignIn;
