import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth, Configuration } from "../index";
export const MyRoutes = () => {
  const { user } = UserAuth();

  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/configurar" element={<Configuration />} />
        </Route>
      </Routes>
  );
};
