import { useState } from "react";

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-gray-900 w-full">
      <nav className="flex items-center justify-between px-8 py-4">
        {/* Izquierda: Logo y nombre */}
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/Logo-Full-Cover-removebg.png"
            alt="Logo"
            className="h-10 w-auto"
          />
          <span className="text-white text-xl font-bold">CODEando</span>
        </div>

        {/* Centro: Dropdown y enlaces */}
        <div className="flex items-center gap-8">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((v) => !v)}
              className="flex items-center gap-1 text-white font-semibold text-base hover:text-yellow-400 focus:outline-none"
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
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Categoría 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Categoría 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                >
                  Categoría 3
                </a>
              </div>
            )}
          </div>
          <a
            href="#"
            className="no-underline text-white font-semibold text-base hover:text-yellow-400 "
          >
            Ustedes
          </a>
          <a
            href="#"
            className="no-underline text-white font-semibold text-base hover:text-yellow-400 "
          >
            Nosotros
          </a>
          <a
            href="#"
            className="no-underline text-white font-semibold text-base hover:text-yellow-400 "
          >
            Ayuda
          </a>
        </div>

        {/* Derecha: Botones */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-gray-900 transition">
            Log in
          </button>
          <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded font-semibold hover:bg-yellow-300 transition">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}
