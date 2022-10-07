import { Routes, Route, Link, Outlet } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Link to="signin">
              sssssssssssssssssssssssssssssssssssssssssssssssss
            </Link>{" "}
            <br />
            <Link to="signup">zzzzzzzzzzzzzzzzzzzzz</Link>
            <Outlet />
          </>
        }
      >
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
