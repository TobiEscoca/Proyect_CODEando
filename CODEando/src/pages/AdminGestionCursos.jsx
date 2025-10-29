import React, { useEffect, useState, useCallback } from "react";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:4000";

export default function AdminGestionCursos() {
  const { authFetch } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    category: "",
    descripcion: "",
    price: "",
    available: true,
  });
  const [message, setMessage] = useState("");

  const fetchCursos = useCallback(async () => {
    const r = await authFetch(`${API}/courses/admin/cursos`);
    const d = await r.json();
    setCursos(Array.isArray(d) ? d : []);
  }, [authFetch]);

  useEffect(() => {
    fetchCursos();
  }, [fetchCursos]);

  const handleEdit = (curso) => {
    setEditingId(curso.id);
    setEditForm({
      name: curso.name || "",
      category: curso.category || "",
      descripcion: curso.descripcion || "",
      price: curso.price || "",
      available: curso.available ?? true,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({
      name: "",
      category: "",
      descripcion: "",
      price: "",
      available: true,
    });
    setMessage("");
  };

  const handleUpdate = async (id) => {
    setMessage("");
    try {
      const res = await authFetch(`${API}/courses/${id}`, {
        method: "PUT",
        body: JSON.stringify(editForm),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al actualizar");

      setMessage("✅ Curso actualizado!");
      setEditingId(null);
      fetchCursos();
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  const handleDeleteEstudiante = async (cursoId, estudianteId) => {
    if (
      !window.confirm(
        "¿Estás seguro de que quieres eliminar este estudiante del curso?"
      )
    )
      return;

    setMessage("");
    try {
      const res = await authFetch(
        `${API}/courses/admin/cursos/${cursoId}/estudiantes/${estudianteId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al eliminar");

      setMessage("✅ Estudiante eliminado!");
      fetchCursos();
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  const handleDeleteProfesor = async (cursoId, profesorId) => {
    if (
      !window.confirm(
        "¿Estás seguro de que quieres eliminar este profesor del curso?"
      )
    )
      return;

    setMessage("");
    try {
      const res = await authFetch(
        `${API}/courses/admin/cursos/${cursoId}/profesores/${profesorId}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al eliminar");

      setMessage("✅ Profesor eliminado!");
      fetchCursos();
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Gestión de Cursos</h1>
      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.startsWith("✅") ? "bg-green-500/20" : "bg-red-500/20"
          }`}
        >
          {message}
        </div>
      )}

      {!cursos.length && <p>Sin cursos.</p>}

      <div className="space-y-6">
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="border border-gray-700 rounded p-5 bg-gray-800/50"
          >
            {editingId === curso.id ? (
              <div className="space-y-3">
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Nombre"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Categoría"
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm({ ...editForm, category: e.target.value })
                  }
                />
                <textarea
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Descripción"
                  value={editForm.descripcion}
                  onChange={(e) =>
                    setEditForm({ ...editForm, descripcion: e.target.value })
                  }
                  rows="3"
                />
                <input
                  type="number"
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Precio"
                  value={editForm.price}
                  onChange={(e) =>
                    setEditForm({ ...editForm, price: e.target.value })
                  }
                />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={editForm.available}
                    onChange={(e) =>
                      setEditForm({ ...editForm, available: e.target.checked })
                    }
                  />
                  Disponible
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(curso.id)}
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
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{curso.name}</h3>
                    <p className="text-sm text-gray-400">
                      Categoría: {curso.category}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      {curso.descripcion}
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Precio: ${curso.price} | Estado:{" "}
                      {curso.available ? "Disponible" : "No disponible"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleEdit(curso)}
                    className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 ml-4"
                  >
                    Editar
                  </button>
                </div>

                {/* Profesores */}
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">
                    Profesores ({curso.profesores?.length || 0})
                  </h4>
                  {!curso.profesores?.length ? (
                    <p className="text-sm text-gray-500">
                      No hay profesores asignados
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {curso.profesores.map((prof) => (
                        <div
                          key={prof.id}
                          className="flex justify-between items-center bg-gray-700/50 p-2 rounded"
                        >
                          <div>
                            <span className="font-medium">{prof.email}</span>
                            {prof.nombre && (
                              <span className="text-sm text-gray-400">
                                {" "}
                                - {prof.nombre}
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() =>
                              handleDeleteProfesor(curso.id, prof.id)
                            }
                            className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-sm"
                          >
                            Eliminar
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Estudiantes */}
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">
                    Estudiantes ({curso.estudiantes?.length || 0})
                  </h4>
                  {!curso.estudiantes?.length ? (
                    <p className="text-sm text-gray-500">
                      No hay estudiantes inscritos
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {curso.estudiantes.map((est) => (
                        <div
                          key={est.id}
                          className="flex justify-between items-center bg-gray-700/50 p-2 rounded"
                        >
                          <div>
                            <span className="font-medium">{est.email}</span>
                            {est.nombre && (
                              <span className="text-sm text-gray-400">
                                {" "}
                                - {est.nombre}
                              </span>
                            )}
                            <span className="text-xs text-gray-500 ml-2">
                              ({est.estado})
                            </span>
                          </div>
                          <button
                            onClick={() =>
                              handleDeleteEstudiante(curso.id, est.id)
                            }
                            className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 text-sm"
                          >
                            Eliminar
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
