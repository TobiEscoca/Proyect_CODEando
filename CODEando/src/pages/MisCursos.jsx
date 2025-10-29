import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:4000";
const money = v => new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS"}).format(v||0);

export default function MisCursos() {
  const { authFetch } = useAuth();
  const [rows, setRows] = useState([]);
  const [busyId, setBusyId] = useState(null);
  const [msg, setMsg] = useState("");

  const load = async () => {
    const r = await authFetch(`${API}/courses/me/inscripciones`);
    const d = await r.json();
    // d debe ser un array con objetos: { id, estado, inscripto_en, curso:{...}, profesor_email }
    setRows(Array.isArray(d) ? d : []);
  };

  useEffect(() => { load(); }, []);

  const desinscribirme = async (cursoId) => {
    if (!cursoId) return;
    setMsg(""); setBusyId(cursoId);
    try {
      const r = await authFetch(`${API}/courses/${cursoId}/desinscribirme`, { method: "DELETE" });
      const d = await r.json();
      if (!r.ok) throw new Error(d.error || "No se pudo desinscribir");
      setMsg("✅ Desinscripción realizada");
      await load();
    } catch (e) {
      setMsg("❌ " + e.message);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Mis cursos</h1>
      {msg && <p className="mb-3 text-sm">{msg}</p>}
      {!rows.length && <p>No tenés inscripciones.</p>}

      <ul className="space-y-3">
        {rows.map((row) => (
          <li key={row.id} className="border border-gray-700 rounded p-3 flex gap-3">
            {row.curso?.image && (
              <img src={row.curso.image} alt={row.curso.name} className="w-24 h-16 object-cover rounded" />
            )}
            <div className="flex-1">
              <div className="font-semibold">{row.curso?.name || `Curso #${row.curso?.id}`}</div>
              <div className="text-xs opacity-70">
                {(row.curso?.category || "-")} • {money(row.curso?.price)} • {new Date(row.inscripto_en).toLocaleString()}
              </div>
              <div className="text-sm opacity-80">
                Profesor: {row.profesor_email || "Sin asignar"}
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => desinscribirme(row.curso?.id)}
                disabled={!row.curso?.id || busyId === row.curso?.id}
                className="px-3 py-1 border border-red-400 text-red-300 rounded hover:bg-red-400/20 disabled:opacity-50"
              >
                {busyId === row.curso?.id ? "..." : "Desinscribirme"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
