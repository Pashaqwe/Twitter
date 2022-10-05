import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AuthModal from "../../components/AuthModal";

function SignUp() {
  const navigate = useNavigate();

  return (
    <AuthModal>
      <Button onClick={() => navigate("/signin")}>Registration</Button>
    </AuthModal>
  );
}

export default SignUp;
