import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const Login = () => {
    const [form, setForm] = useState({ email: "", contraseña: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // 🔹 Hook para redireccionar

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

            // Guardar token
            localStorage.setItem("token", data.token);

            // Decodificar token
            const decoded = jwtDecode(data.token);

            // Redirigir según rol
            switch (decoded.id_rol) {
                case 1: // usuario
                    navigate("/");
                    break;
                case 2: // admin/profesor
                    navigate("/");
                    break;
                case 3: // superadmin
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

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    name="contraseña"
                    type="password"
                    placeholder="Contraseña"
                    value={form.contraseña}
                    onChange={handleChange}
                />
                <button type="submit">Entrar</button>
            </form>
            {message && <p className="mt-2">{message}</p>}
        </div>
    );
};

export default Login;
