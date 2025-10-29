/* import React, { useState } from "react";

const CrearProfesor = () => {
  const [form, setForm] = useState({ email: "", nombre: "", contraseña: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const token = localStorage.getItem("token"); // token del superadmin

      const res = await fetch("http://localhost:4000/courses/crear-profesor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");

      setMessage("✅ Profesor creado!");
      setForm({ email: "", nombre: "", contraseña: "" });
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl font-bold mb-4">Crear Profesor</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input
          name="contraseña"
          type="password"
          placeholder="Contraseña"
          value={form.contraseña}
          onChange={handleChange}
        />
        <button type="submit">Crear</button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
};

export default CrearProfesor;
 */
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const CrearProfesor = () => {
  const [form, setForm] = useState({ email: "", contraseña: "" });
  const [message, setMessage] = useState("");
  const { authFetch } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await authFetch(
        "http://localhost:4000/courses/crear-profesor",
        {
          method: "POST",
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error");

      setMessage("✅ Profesor creado!");
      setForm({ email: "", contraseña: "" });
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200">
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          {/* Título principal */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Crear Profesor
          </h1>
          <p className="text-gray-400 mb-10 text-center">
            Completa los datos para registrar un nuevo profesor en la
            plataforma.
          </p>

          {/* Formulario */}
          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Contraseña
                </label>
                <input
                  name="contraseña"
                  type="password"
                  placeholder="Contraseña del profesor"
                  value={form.contraseña}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    message.startsWith("✅")
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : "bg-red-500/20 border border-red-500/30 text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30"
              >
                Crear Profesor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearProfesor;
