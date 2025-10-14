import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setMessage("");
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "El email no es valido.";
    }

    if (!form.password.trim()) {
      newErrors.password = "La contraseña es obligatoria.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Inicio de sesión exitoso");
      console.log("Datos enviados:", form);
    }
  };

  const handleForgotPassword = () => {
    setMessage(""); // limpia mensaje previo
    const emailError = {};

    if (!form.email.trim()) {
      emailError.email = "Ingrese su email antes de recuperar la contraseña.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      emailError.email = "Ingrese un email valido para recuperar la contraseña.";
    }

    if (Object.keys(emailError).length > 0) {
      setErrors(emailError);
    } else {
      // Aquí podrías hacer la petición al backend para enviar el email de recuperación
      setMessage("Se ha enviado un enlace de recuperación a su correo electrónico.");
      console.log("Solicitud de recuperación enviada a:", form.email);
    }
  };

  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
          Iniciar Sesión
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

          <button
            type="submit"
            className="px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer"
          > Entrar
          </button>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-yellow-400 text-sm hover:underline hover:text-yellow-300 transition self-center mt-2 cursor-pointer"
            > ¿Olvidaste tu contraseña?
          </button>


          {message && (
            <p className="text-green-400 text-sm mt-2 text-center">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
