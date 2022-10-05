import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { postRequest } from "../../api";
import { FormValuesType, OnSubmitTypes } from "./types";

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  min-width: 550px;
`;

const StyledRegistrationSection = styled.div`
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
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
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
    <Modal open onClose={navigateToHomePage} disableAutoFocus>
      <StyledBox>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={SignInSchema}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => (
            <form onSubmit={handleSubmit}>
              <StyledHeading>Sign In</StyledHeading>
              <StyledRegistrationSection>
                <p>No account?</p>
                <StyledLink to="/signup">Registration</StyledLink>
              </StyledRegistrationSection>
              <TextField
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
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                size="small"
                margin="normal"
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
      </StyledBox>
    </Modal>
  );
}

export default SignIn;
