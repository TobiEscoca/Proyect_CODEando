import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:4000";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(
    value
  );

const CursoInfo = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [busy, setBusy] = useState(false);

  const { isAuth, user, authFetch } = useAuth(); // estado de sesión/rol
  const isUser = user?.id_rol === 1;
  const isProfesorOrSuper = user?.id_rol === 2 || user?.id_rol === 3;

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        const mapped = {
          ...data,
          description: data.descripcion || data.decripcion || "",
        };
        setCourse(mapped);
      })
      .catch((err) => console.error("Error al cargar el curso:", err))
      .finally(() => setLoading(false));
  }, [courseId]);

  const inscribirme = async () => {
    if (!isAuth) return setMsg("⚠️ Iniciá sesión para inscribirte.");
    setBusy(true);
    setMsg("");
    try {
      const res = await authFetch(`${API}/courses/${courseId}/inscribirme`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al inscribirse");
      setMsg("✅ Inscripción realizada.");
    } catch (e) {
      setMsg("❌ " + e.message);
    } finally {
      setBusy(false);
    }
  };

  const asignarme = async () => {
    if (!isAuth) return setMsg("⚠️ Iniciá sesión.");
    setBusy(true);
    setMsg("");
    try {
      const res = await authFetch(
        `${API}/courses/${courseId}/asignar-profesor`,
        { method: "POST" }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al asignarte");
      setMsg("✅ Te asignaste como profesor del curso.");
    } catch (e) {
      setMsg("❌ " + e.message);
    } finally {
      setBusy(false);
    }
  };

  if (loading)
    return <p className="text-center text-white py-16">Cargando curso...</p>;
  if (!course)
    return <p className="text-center text-white py-16">Curso no encontrado</p>;

  return (
    <section className="w-full py-16 bg-gray-950 text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-4">{course.name}</h2>
        <h4 className="text-sm text-yellow-400 font-semibold mb-4 uppercase">
          {course.category}
        </h4>
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-200 mb-4">{course.description}</p>
        <p className="text-lg font-bold text-yellow-400 mb-6">
          Precio: {formatPrice(course.price)}
        </p>

        <div className="flex items-center gap-3 mb-4">
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer"
          >
            Volver al catálogo
          </Link>

          {/* Alumno */}
          {isAuth && isUser && (
            <button
              disabled={busy}
              onClick={inscribirme}
              className="px-6 py-2 rounded-lg font-semibold border border-green-400 text-green-300 hover:bg-green-400/20 disabled:opacity-50"
            >
              {busy ? "Procesando..." : "Inscribirme"}
            </button>
          )}

          {/* Profesor / Superadmin */}
          {isAuth && isProfesorOrSuper && (
            <button
              disabled={busy}
              onClick={asignarme}
              className="px-6 py-2 rounded-lg font-semibold border border-blue-400 text-blue-300 hover:bg-blue-400/20 disabled:opacity-50"
            >
              {busy ? "Procesando..." : "Dar este curso"}
            </button>
          )}
        </div>

        {msg && <p className="text-sm">{msg}</p>}
      </div>
    </section>
  );
};

export default CursoInfo;
