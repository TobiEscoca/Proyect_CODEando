
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);

const CursoInfo = () => {
  const { courseId } = useParams(); // obtenemos el ID de la URL
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:4000/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        // mapeamos descripcion → description
        const mappedCourse = {
          ...data,
          description: data.descripcion || data.decripcion || "",
        };
        setCourse(mappedCourse);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar el curso:", err);
        setLoading(false);
      });
  }, [courseId]);

  if (loading) {
    return <p className="text-center text-white py-16">Cargando curso...</p>;
  }

  if (!course) {
    return <p className="text-center text-white py-16">Curso no encontrado</p>;
  }

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
        <Link
          to="/"
          className="inline-block px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer"
        >
          Volver al catálogo
        </Link>
      </div>
    </section>
  );
};

export default CursoInfo;
