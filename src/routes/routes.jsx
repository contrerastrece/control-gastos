import { Routes, Route } from "react-router-dom";
import { Login, Home, ProtectedRoute, UserAuth, Configuration, Categories, Transactions } from "../index";
export const MyRoutes = () => {
  const { user } = UserAuth();

  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/configurar" element={<Configuration />} />
          <Route path="/categorias" element={<Categories />} />
          <Route path="/movimientos" element={<Transactions />} />
          
        </Route>
      </Routes>
  );
};
