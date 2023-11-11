import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth } from "../index";
export const MyRoutes = () => {
  const { user } = UserAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
