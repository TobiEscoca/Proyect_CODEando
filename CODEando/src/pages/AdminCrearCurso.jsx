import React, { useState } from "react";

const AdminCrearCurso = () => {
    const [form, setForm] = useState({
        name: "",
        category: "",
        descripcion: "", // 👈 aquí
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
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:4000/courses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Error al crear curso");

            setMessage("✅ Curso creado con éxito");
            setForm({
                name: "",
                category: "",
                decripcion: "",
                price: 0,
                image: "",
                available: true,
            });
        } catch (err) {
            setMessage("❌ " + err.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 text-white">
            <h1 className="text-2xl font-bold mb-4">Crear Curso</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Nombre"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    name="category"
                    placeholder="Categoría"
                    value={form.category}
                    onChange={handleChange}
                />
                <input
                    name="descripcion" // 👈 aquí
                    placeholder="Descripción"
                    value={form.descripcion}
                    onChange={handleChange}
                />
                <input
                    name="price"
                    type="number"
                    placeholder="Precio"
                    value={form.price}
                    onChange={handleChange}
                />
                <input
                    name="image"
                    placeholder="URL imagen"
                    value={form.image}
                    onChange={handleChange}
                />
                <label>
                    <input
                        type="checkbox"
                        name="available"
                        checked={form.available}
                        onChange={handleChange}
                    />{" "}
                    Disponible
                </label>
                <button
                    type="submit"
                    className="bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg mt-2"
                >
                    Crear
                </button>
            </form>
            {message && <p className="mt-2">{message}</p>}
        </div>
    );
};

export default AdminCrearCurso;
