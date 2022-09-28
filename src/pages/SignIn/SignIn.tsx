import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)`
  border: none !important;
  outline: none !important;
  background-color: rgb(143, 157, 250) !important;
  &:hover {
    background: rgba(143, 157, 250 0.8) !important;
  }
`;

const StyledTextField = styled(TextField)`
  .Mui-focused {
    color: #4d5eb0 !important;
  }
  .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #4d5eb0;
    }
  }

  .MuiOutlinedInput-root {
    &:hover {
      .MuiOutlinedInput-notchedOutline {
        border-color: #4d5eb0 !important;
      }
    }
  }

  margin-bottom: 20px !important;
`;

function SignIn() {
  const navigate = useNavigate();

  const loginRequest = async (values: any) => {
    await axios.post("http://localhost:3000/login", values);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: () => {},
    onSubmit: (values, { resetForm }) => {
      loginRequest(values).then(() => {
        navigate("/");
        resetForm();
      });
    },
  });

  return (
    <Modal
      open
      onClose={() => {
        navigate("/");
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#fff",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <StyledTextField
            variant="outlined"
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            error={!!formik.errors.email}
            helperText={formik.errors.email}
            onChange={formik.handleChange}
            type="email"
            size="small"
            color="secondary"
          />
          <StyledTextField
            variant="outlined"
            fullWidth
            id="password"
            name="password"
            type="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            size="small"
            color="secondary"
          />
          <StyledButton color="inherit" fullWidth type="submit">
            Submit
          </StyledButton>
        </form>
      </Box>
    </Modal>
  );
}

export default SignIn;
