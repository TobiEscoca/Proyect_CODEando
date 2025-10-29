import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:4000";

export default function AdminProfesores() {
  const { authFetch } = useAuth();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      const r = await authFetch(`${API}/courses/admin/profesores`);
      const d = await r.json();
      setRows(Array.isArray(d) ? d : []);
    })();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Profesores</h1>
      {!rows.length && <p>Sin profesores.</p>}
      <ul className="space-y-3">
        {rows.map((p) => (
          <li key={p.id} className="border border-gray-700 rounded p-3">
            <div className="font-semibold">{p.email}</div>
            {!p.cursos?.length ? (
              <div className="text-sm opacity-70">No dicta cursos</div>
            ) : (
              <ul className="list-disc ml-5 text-sm mt-1">
                {p.cursos.map((c) => (
                  <li key={c.id}>{c.name}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
