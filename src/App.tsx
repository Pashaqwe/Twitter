import { Routes, Route, Link, Outlet } from "react-router-dom";

import SignIn from "./pages/SignIn";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Link to="signin">
              sssssssssssssssssssssssssssssssssssssssssssssssss
            </Link>
            <Outlet />
          </>
        }
      >
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
