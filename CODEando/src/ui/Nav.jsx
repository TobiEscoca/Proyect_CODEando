import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuth, user, logout } = useAuth();

  return (
    <header className="bg-gray-900 w-full">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img src="/src/assets/Logo-Full-Cover-removebg.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-white text-xl font-bold">CODEando</span>
        </Link>

        {/* ... (tu parte central con categorías) ... */}

        {/* DERECHA (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {isAuth ? (
            <div className="flex items-center gap-3">
              <span className="text-white">
                Hola, <strong>{user?.name || user?.email}</strong>
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg font-semibold text-white border-2 border-red-400 hover:bg-red-400/20 transition-all duration-300"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-6 py-2 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-white/30 cursor-pointer no-underline"
              >
                Iniciar Sesión
              </NavLink>
              <NavLink
                to="/register"
                className="px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer no-underline"
              >
                Registrarse
              </NavLink>
            </>
          )}
        </div>

        {/* botón menú móvil ... */}
      </nav>

      {/* PANEL MÓVIL */}
      {/* en el panel móvil también mostrás/ocultás según isAuth */}
      {/* ... tu panel ... */}
    </header>
  );
}
