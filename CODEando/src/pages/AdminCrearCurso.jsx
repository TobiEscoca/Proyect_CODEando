import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const AdminCrearCurso = () => {
  const { authFetch } = useAuth();
  const [form, setForm] = useState({
    name: "",
    category: "",
    descripcion: "",
    price: 0,
    image: "",
    available: true,
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await authFetch("http://localhost:4000/courses", {
        method: "POST",
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al crear curso");

      setMessage("✅ Curso creado con éxito");
      setForm({
        name: "",
        category: "",
        descripcion: "",
        price: 0,
        image: "",
        available: true,
      });
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200">
      <div className="px-4 md:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center">
            Crear Curso
          </h1>
          <p className="text-gray-400 mb-10 text-center">
            Completa los datos para agregar un nuevo curso a la plataforma.
          </p>

          <div className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 shadow-lg">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre del Curso
                </label>
                <input
                  name="name"
                  placeholder="ej. React Avanzado"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Categoría
                </label>
                <input
                  name="category"
                  placeholder="ej. Frontend, Backend, Fullstack, Database"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción
                </label>
                <textarea
                  name="descripcion"
                  placeholder="Describe el contenido del curso..."
                  value={form.descripcion}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Precio ($)
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="0"
                  value={form.price}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL de la Imagen
                </label>
                <input
                  name="image"
                  type="url"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg border border-gray-600">
                <input
                  type="checkbox"
                  name="available"
                  checked={form.available}
                  onChange={handleChange}
                  className="w-5 h-5 accent-yellow-400 cursor-pointer"
                />
                <label className="text-gray-300 cursor-pointer">
                  Disponible para inscripción
                </label>
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
                Crear Curso
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCrearCurso;
