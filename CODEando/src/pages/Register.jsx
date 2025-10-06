import React from "react";

const Register = () => {
  return (
    <div className="px-4 md:px-8 py-8 md:py-12">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left">
          Crear cuenta
        </h1>
        <form className="flex flex-col gap-4">
          <input
            className="px-3 py-2 rounded bg-gray-800 text-white"
            placeholder="Nombre"
          />
          <input
            className="px-3 py-2 rounded bg-gray-800 text-white"
            placeholder="Email"
          />
          <input
            className="px-3 py-2 rounded bg-gray-800 text-white"
            placeholder="Contraseña"
            type="password"
          />
          <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded font-semibold hover:bg-yellow-300 transition">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
