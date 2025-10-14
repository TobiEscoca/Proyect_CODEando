import React, { useState } from "react";

// 🔹 Componente con validación
const Register = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) newErrors.nombre = "El nombre es obligatorio.";
    if (!form.apellido.trim()) newErrors.apellido = "El apellido es obligatorio.";
    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "El email no es valido.";
    }
    if (!form.password) newErrors.password = "La contraseña es obligatoria.";
    else if (form.password.length < 6)
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    if (form.confirmPassword !== form.password)
      newErrors.confirmPassword = "Las contraseñas no coinciden.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("✅ Registro exitoso");
      console.log("Datos enviados:", form);
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
              name="nombre"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
            />
            {errors.nombre && (
              <p className="text-red-400 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          <div>
            <input
              name="apellido"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Apellido"
              value={form.apellido}
              onChange={handleChange}
            />
            {errors.apellido && (
              <p className="text-red-400 text-sm mt-1">{errors.apellido}</p>
            )}
          </div>

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
              name="password"
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Contraseña"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              name="confirmPassword"
              type="password"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              placeholder="Confirmar Contraseña"
              value={form.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer"
            > Registrarme
          </button>


        </form>
      </div>
    </div>
  );
};

export default Register;
