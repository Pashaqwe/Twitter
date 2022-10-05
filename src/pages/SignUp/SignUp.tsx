import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

function SignUp() {
  const navigate = useNavigate();

  const navigateToHomePage = () => navigate("/");

  return (
    <Modal open disableAutoFocus onClose={navigateToHomePage}>
      <StyledBox>
        <Button onClick={() => navigate("/signin")}>Registration</Button>
      </StyledBox>
    </Modal>
  );
}

export default SignUp;
