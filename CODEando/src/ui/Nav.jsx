// src/ui/Nav.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuth, user, logout } = useAuth();

  // castea a número por si el payload viene como string
  const role = Number(user?.id_rol);
  const isAlumno = role === 1;
  const isProfesor = role === 2;
  const isSuperadmin = role === 3;

  const puedeCrearCurso = isProfesor || isSuperadmin;

  return (
    <header className="bg-gray-900 w-full">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Izquierda: Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <img
            src="/src/assets/Logo-Full-Cover-removebg.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="text-white text-xl font-bold">CODEando</span>
        </Link>

        {/* Centro: Categorías + accesos por rol (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {/* Dropdown categorías */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-white font-semibold text-base hover:text-yellow-400 focus:outline-none cursor-pointer"
            >
              Categorías
              <svg
                className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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

          <NavLink to="/nosotros" className="no-underline text-white font-semibold text-base hover:text-yellow-400">
            Nosotros
          </NavLink>
          <NavLink to="/ustedes" className="no-underline text-white font-semibold text-base hover:text-yellow-400">
            Ustedes
          </NavLink>
          <NavLink to="/ayuda" className="no-underline text-white font-semibold text-base hover:text-yellow-400">
            Ayuda
          </NavLink>

          {/* Accesos por rol (desktop) */}
          {isAuth && isAlumno && (
            <NavLink
              to="/mis-cursos"
              className="no-underline text-yellow-400 font-semibold text-base hover:text-yellow-300"
            >
              Mis cursos
            </NavLink>
          )}

          {isAuth && puedeCrearCurso && (
            <NavLink
              to="/admin/crear-curso"
              className="no-underline text-yellow-400 font-semibold text-base hover:text-yellow-300"
            >
              Crear curso
            </NavLink>
          )}

          {/* SOLO PROFESOR (NO superadmin) */}
          {isAuth && isProfesor && (
            <NavLink
              to="/profesor"
              className="no-underline text-yellow-400 font-semibold text-base hover:text-yellow-300"
            >
              Panel profesor
            </NavLink>
          )}

          {isAuth && isSuperadmin && (
            <>
              <NavLink
                to="/superadmin/crear-profesor"
                className="no-underline text-yellow-400 font-semibold text-base hover:text-yellow-300"
              >
                Crear profesor
              </NavLink>
              <NavLink
                to="/admin/profesores"
                className="no-underline text-yellow-400 font-semibold text-base hover:text-yellow-300"
              >
                Profesores
              </NavLink>
            </>
          )}
        </div>

        {/* Derecha: auth (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {isAuth ? (
            <>
              <span className="text-white">
                Hola, <strong>{user?.name || user?.email}</strong>
              </span>
              <button
                onClick={logout}
                className="px-4 py-2 rounded-lg font-semibold text-white border-2 border-red-400 hover:bg-red-400/20 transition-all duration-300"
              >
                Cerrar sesión
              </button>
            </>
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

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-white p-2"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            <NavLink to="/ustedes" className="text-white font-semibold no-underline py-2" onClick={() => setMobileOpen(false)}>
              Ustedes
            </NavLink>
            <NavLink to="/nosotros" className="text-white font-semibold no-underline py-2" onClick={() => setMobileOpen(false)}>
              Nosotros
            </NavLink>
            <NavLink to="/ayuda" className="text-white font-semibold no-underline py-2" onClick={() => setMobileOpen(false)}>
              Ayuda
            </NavLink>

            <div className="h-px bg-gray-800 my-2" />

            {isAuth && isAlumno && (
              <NavLink to="/mis-cursos" className="text-yellow-400 font-semibold py-2 no-underline" onClick={() => setMobileOpen(false)}>
                Mis cursos
              </NavLink>
            )}

            {isAuth && puedeCrearCurso && (
              <NavLink to="/admin/crear-curso" className="text-yellow-400 font-semibold py-2 no-underline" onClick={() => setMobileOpen(false)}>
                Crear cursos
              </NavLink>
            )}

            {/* SOLO PROFESOR (rol 2) */}
            {isAuth && isProfesor && (
              <NavLink
                to="/profesor"
                className="text-yellow-400 font-semibold py-2 no-underline"
                onClick={() => setMobileOpen(false)}
              >
                Panel profesor
              </NavLink>
            )}

            {isAuth && isSuperadmin && (
              <>
                <NavLink to="/superadmin/crear-profesor" className="text-yellow-400 font-semibold py-2 no-underline" onClick={() => setMobileOpen(false)}>
                  Crear profesor
                </NavLink>
                <NavLink to="/admin/profesores" className="text-yellow-400 font-semibold py-2 no-underline" onClick={() => setMobileOpen(false)}>
                  Profesores
                </NavLink>
              </>
            )}

            <div className="h-px bg-gray-800 my-2" />

            {isAuth ? (
              <button
                onClick={() => { logout(); setMobileOpen(false); }}
                className="text-white border border-red-400 rounded px-3 py-2"
              >
                Cerrar sesión
              </button>
            ) : (
              <>
                <NavLink to="/login" className="text-white no-underline py-2" onClick={() => setMobileOpen(false)}>
                  Iniciar Sesión
                </NavLink>
                <NavLink
                  to="/register"
                  className="no-underline py-2 text-gray-900 bg-yellow-400 rounded text-center font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Registrarse
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
