import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/context";
function ProtectedRoutes() {
  const { user } = useAuth();
  if (user.isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
