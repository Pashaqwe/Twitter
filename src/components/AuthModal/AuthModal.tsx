import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthModalProps } from "./types";

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

function AuthModal({ children }: AuthModalProps) {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <Modal open onClose={navigateToHomePage} disableAutoFocus>
      <StyledBox>{children}</StyledBox>
    </Modal>
  );
}

export default AuthModal;
