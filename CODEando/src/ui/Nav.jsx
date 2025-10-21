import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gray-900 w-full">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Izquierda: Logo y nombre */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/src/assets/Logo-Full-Cover-removebg.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="text-white text-xl font-bold">CODEando</span>
        </Link>

        {/* Centro: Dropdown y enlaces (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-white font-semibold text-base hover:text-yellow-400 focus:outline-none cursor-pointer"
            >
              Categorías
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="absolute left-0 mt-2 w-40 rounded-md bg-gray-800 shadow-lg z-20"
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink
                  to="/category/Frontend"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Frontend
                </NavLink>
                <NavLink
                  to="/category/Backend"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Backend
                </NavLink>
                <NavLink
                  to="/category/Fullstack"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Fullstack
                </NavLink>
                <NavLink
                  to="/category/Database"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => setDropdownOpen(false)}
                >
                  Database
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/nosotros"
            className="no-underline text-white font-semibold text-base hover:text-yellow-400 hover-underline-animation"
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/ustedes"
            className="no-underline text-white font-semibold text-base hover:text-yellow-400 hover-underline-animation"
          >
            Ustedes
          </NavLink>
          <NavLink
            to="/ayuda"
            className="no-underline text-white font-semibold text-base hover:text-yellow-400 hover-underline-animation"
          >
            Ayuda
          </NavLink>
        </div>

        {/* Derecha: Botones (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/login"
            className="px-6 py-2 rounded-lg font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-white/30 cursor-pointer no-underline"
            > Iniciar Sesión
          </NavLink>
          <NavLink
            to="/register"
            className="px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer no-underline"
            > Registrarse
          </NavLink>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white p-2"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Panel móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-3">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/ustedes"
              className="text-white font-semibold no-underline py-2 hover-underline-animation"
              onClick={() => setMobileOpen(false)}
            >
              Ustedes
            </NavLink>
            <NavLink
              to="/nosotros"
              className="text-white font-semibold no-underline py-2 hover-underline-animation"
              onClick={() => setMobileOpen(false)}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/ayuda"
              className="text-white font-semibold no-underline py-2 hover-underline-animation"
              onClick={() => setMobileOpen(false)}
            >
              Ayuda
            </NavLink>
            <div className="h-px bg-gray-800 my-2" />
            <NavLink
              to="/login"
              className="text-white no-underline py-2"
              onClick={() => setMobileOpen(false)}
            >
              Iniciar Sesion
            </NavLink>
            <NavLink
              to="/register"
              className="no-underline py-2 text-gray-900 bg-yellow-400 rounded text-center font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Registrarse
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
