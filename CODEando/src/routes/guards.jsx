import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function RequireAuth({ children }) {
  const { isAuth, loading } = useAuth();
  const location = useLocation();

  if (loading) return null; // o un spinner
  if (!isAuth) return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
}

export function RequireRole({ roles = [], children }) {
  const { isAuth, user, loading } = useAuth();
  const location = useLocation();

  if (loading) return null;
  if (!isAuth) return <Navigate to="/login" replace state={{ from: location }} />;

  const hasRole = roles.includes(user?.id_rol);
  if (!hasRole) return <Navigate to="/" replace />;

  return children;
}
