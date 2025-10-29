import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:4000";

export default function ProfePanel() {
  const { authFetch } = useAuth();
  const [cursos, setCursos] = useState([]);
  const [alumnos, setAlumnos] = useState({});
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    (async () => {
      const r = await authFetch(`${API}/courses/me/cursos-dictados`);
      const d = await r.json();
      console.log("cursos-dictados ->", d); // DEBUG
      const arr = Array.isArray(d) ? d : [];

      const norm = arr
        .map((x) => {
          if (x?.curso?.id) return x;
          const c = {
            id: x?.id ?? x?.curso_id ?? null,
            name: x?.name ?? x?.curso_name ?? null,
            image: x?.image ?? null,
            category: x?.category ?? null,
          };
          return { curso: c, asignado_en: x?.asignado_en ?? x?.desde ?? null };
        })
        .filter((x) => x.curso?.id); // eliminar entradas sin id
      setCursos(norm);
    })();
  }, []);

  const loadAlumnos = async (cursoId) => {
    if (!cursoId) return;
    setOpenId(openId === cursoId ? null : cursoId);
    if (alumnos[cursoId]) return;
    const r = await authFetch(`${API}/courses/${cursoId}/alumnos`);
    const d = await r.json();
    console.log(`alumnos curso ${cursoId} ->`, d); // DEBUG
    setAlumnos((prev) => ({ ...prev, [cursoId]: Array.isArray(d) ? d : [] }));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Panel del profesor</h1>
      {!cursos.length && <p>No dictás cursos todavía.</p>}

      <ul className="space-y-3">
        {cursos.map(({ curso, asignado_en }) => (
          <li key={curso.id} className="border border-gray-700 rounded p-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">
                  {curso.name || `Curso #${curso.id}`}
                </div>
                {asignado_en && (
                  <div className="text-xs opacity-70">
                    Desde: {new Date(asignado_en).toLocaleString()}
                  </div>
                )}
              </div>
              <button
                onClick={() => loadAlumnos(curso.id)}
                className="px-3 py-1 border border-yellow-400 text-yellow-300 rounded hover:bg-yellow-400/20"
              >
                {openId === curso.id ? "Ocultar alumnos" : "Ver alumnos"}
              </button>
            </div>

            {openId === curso.id && (
              <div className="mt-3">
                {!alumnos[curso.id] ? (
                  <div className="text-sm opacity-70">Cargando...</div>
                ) : !alumnos[curso.id].length ? (
                  <div className="text-sm">Sin alumnos.</div>
                ) : (
                  <table className="w-full text-sm border border-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="p-2 text-left">Alumno</th>
                        <th className="p-2 text-left">Estado</th>
                        <th className="p-2 text-left">Inscripto</th>
                      </tr>
                    </thead>
                    <tbody>
                      {alumnos[curso.id].map((a, i) => (
                        <tr key={i} className="border-t border-gray-700">
                          <td className="p-2">{a.alumno_email}</td>
                          <td className="p-2">{a.estado}</td>
                          <td className="p-2">
                            {new Date(a.inscripto_en).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
