import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
const [form, setForm] = useState({ email: "", contraseña: "" });
const [message, setMessage] = useState("");
const navigate = useNavigate();

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
setMessage("");
};

const handleSubmit = async (e) => {
e.preventDefault();
setMessage("");


try {
  const res = await fetch("http://localhost:4000/courses/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Error");

  localStorage.setItem("token", data.token);
  const decoded = jwtDecode(data.token);

  switch (decoded.id_rol) {
    case 1:
      navigate("/");
      break;
    case 2:
      navigate("/");
      break;
    case 3:
      navigate("/superadmin/crear-profesor");
      break;
    default:
      navigate("/login");
  }

  setMessage("✅ Login exitoso!");
} catch (err) {
  setMessage("❌ " + err.message);
}


};

return ( <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200 min-h-screen"> <div className="bg-[#1e293b] p-8 rounded-2xl shadow-lg w-full max-w-md"> <h1 className="text-2xl font-semibold text-center mb-6">
Iniciar Sesión </h1>


    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
      />
      <input
        name="contraseña"
        type="password"
        placeholder="Contraseña"
        value={form.contraseña}
        onChange={handleChange}
        className="p-3 rounded-lg bg-[#0f172a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
      />

      <button
        type="submit"
        className="bg-[#facc15] text-black font-semibold py-2 rounded-lg hover:bg-[#eab308] transition"
      >
        Entrar
      </button>
    </form>

    {message && (
      <p className="mt-4 text-center text-sm">
        {message}
      </p>
    )}
  </div>
</div>


);
};

export default Login;
