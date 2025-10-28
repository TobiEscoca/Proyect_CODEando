import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(null);      // { email, name, id_rol }
  const [loading, setLoading] = useState(true);

  // hidratar user desde token (en refresh)
  useEffect(() => {
    const hydrate = () => {
      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }
      try {
        const decoded = jwtDecode(token);
        // ajustá estos campos si tu payload tiene otros nombres
        const email  = decoded.email || decoded.correo || decoded.user?.email || null;
        const name   = decoded.name  || decoded.nombre || decoded.user?.name  || email || "Usuario";
        const id_rol = decoded.id_rol ?? decoded.roleId ?? decoded.role ?? null;
        setUser({ email, name, id_rol });
      } catch (err) {
        console.error("JWT inválido:", err);
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    hydrate();
  }, [token]);

  // helpers
  const login = async ({ email, contraseña }) => {
    // 👇 usás exactamente los campos que ya usa tu Login/Register
    const res = await fetch("http://localhost:4000/courses/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, contraseña }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al iniciar sesión");

    localStorage.setItem("token", data.token);
    setToken(data.token);

    const decoded = jwtDecode(data.token);
    const emailJWT  = decoded.email || decoded.correo || decoded.user?.email || email;
    const nameJWT   = decoded.name  || decoded.nombre || decoded.user?.name  || emailJWT;
    const id_rolJWT = decoded.id_rol ?? decoded.roleId ?? decoded.role ?? null;
    setUser({ email: emailJWT, name: nameJWT, id_rol: id_rolJWT });

    return { decoded }; // por si querés rutear por rol desde el caller
  };

  const register = async ({ email, contraseña }) => {
    const res = await fetch("http://localhost:4000/courses/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, contraseña }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Error al registrarse");
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // header listo para endpoints protegidos
  const authHeader = useMemo(
    () => (token ? { Authorization: `Bearer ${token}` } : {}),
    [token]
  );

  // fetch con token incluido (útil en CrearProfesor / AdminCrearCurso)
  const authFetch = async (url, options = {}) => {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
        ...authHeader,
      },
    });
    return res;
  };

  const value = useMemo(
    () => ({
      token,
      user,
      loading,
      isAuth: !!user,
      login,
      register,
      logout,
      authHeader,
      authFetch,
    }),
    [token, user, loading, authHeader]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
}
