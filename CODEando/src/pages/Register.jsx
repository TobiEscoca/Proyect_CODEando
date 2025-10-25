import React, { useState } from "react";

// ✅ Función que envía los datos al backend
const register = async (email, contraseña) => {
  const res = await fetch("http://localhost:4000/courses/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, contraseña }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Error al registrarse");
  return data;
};

// 🔹 Componente con validación
const Register = () => {
  const [form, setForm] = useState({
    email: "",
    contraseña: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (!form.contraseña) newErrors.contraseña = "La contraseña es obligatoria.";
    else if (form.contraseña.length < 6)
      newErrors.contraseña = "La contraseña debe tener al menos 6 caracteres.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await register(form.email, form.contraseña);
        alert("✅ Registro exitoso");
        console.log("Usuario creado:", response);
      } catch (err) {
        alert("❌ " + err.message);
      }
    }
  };

  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
          Registrar Cuenta
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <input
              name="email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="contraseña"
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Contraseña"
              value={form.contraseña}
              onChange={handleChange}
            />
            {errors.contraseña && (
              <p className="text-red-400 text-sm mt-1">{errors.contraseña}</p>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
