import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:4000";

export default function AdminProfesores() {
  const { authFetch } = useAuth();
  const [rows, setRows] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    email: "",
    contraseña: "",
  });
  const [message, setMessage] = useState("");

  const fetchProfesores = useCallback(async () => {
    try {
      const r = await authFetch(`${API}/courses/admin/profesores`);
      const d = await r.json();
      console.log("Profesores fetched:", d);
      console.log("Full response:", JSON.stringify(d, null, 2));

      // Check if it's an array or an object with an error
      if (Array.isArray(d)) {
        setRows(d);
      } else if (d.error) {
        console.error("API Error:", d.error);
        setMessage("❌ " + d.error);
        setRows([]);
      } else {
        console.warn("Unexpected response format:", d);
        setRows([]);
      }
    } catch (error) {
      console.error("Error fetching profesores:", error);
      setRows([]);
    }
  }, [authFetch]);

  useEffect(() => {
    fetchProfesores();
  }, [fetchProfesores]);

  const handleEdit = (profesor) => {
    setEditingId(profesor.id);
    setEditForm({
      email: profesor.email,
      contraseña: "",
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ email: "", contraseña: "" });
    setMessage("");
  };

  const handleUpdate = async (id) => {
    setMessage("");
    try {
      const res = await authFetch(`${API}/courses/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al actualizar");

      setMessage("✅ Profesor actualizado!");
      setEditingId(null);
      fetchProfesores();
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este profesor?"))
      return;

    setMessage("");
    try {
      const res = await authFetch(`${API}/courses/users/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al eliminar");

      setMessage("✅ Profesor eliminado!");
      fetchProfesores();
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Gestión de Profesores</h1>
      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.startsWith("✅") ? "bg-green-500/20" : "bg-red-500/20"
          }`}
        >
          {message}
        </div>
      )}

      {!rows.length && <p>Sin profesores.</p>}

      <div className="space-y-3">
        {rows.map((p) => (
          <div
            key={p.id}
            className="border border-gray-700 rounded p-4 bg-gray-800/50"
          >
            {editingId === p.id ? (
              <div className="space-y-3">
                <input
                  type="email"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Email"
                  value={editForm.email}
                  onChange={(e) =>
                    setEditForm({ ...editForm, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Nueva contraseña (dejar vacío para no cambiar)"
                  value={editForm.contraseña}
                  onChange={(e) =>
                    setEditForm({ ...editForm, contraseña: e.target.value })
                  }
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(p.id)}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                  >
                    Guardar
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{p.email}</div>
                    {!p.cursos?.length ? (
                      <div className="text-sm opacity-70 mt-1">
                        No dicta cursos
                      </div>
                    ) : (
                      <div className="mt-2">
                        <div className="text-sm font-semibold mb-1">
                          Cursos que dicta:
                        </div>
                        <ul className="list-disc ml-5 text-sm">
                          {p.cursos.map((c) => (
                            <li key={c.id}>{c.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(p)}
                      className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
