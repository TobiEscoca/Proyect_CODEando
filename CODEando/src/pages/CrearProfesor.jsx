import React, { useState } from "react";

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
