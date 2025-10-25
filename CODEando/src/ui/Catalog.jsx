
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);

const Catalog = ({ title = "Catálogo de cursos" }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/courses") // URL de tu backend
      .then((res) => res.json())
      .then((data) => {
        // Mapeamos para que el frontend tenga la propiedad "description"
        const mappedCourses = data.map((c) => ({
          id: c.id,
          name: c.name,
          category: c.category,
          available: c.available,
          description: c.descripcion || c.decripcion || "", // 🔹
          price: c.price,
          image: c.image,
        }));
        setCourses(mappedCourses);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los cursos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-white py-16">Cargando cursos...</p>;
  }

  return (
    <section className="w-full py-16 bg-gray-950 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-10 tracking-tight">
          {title}
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-400/20"
            >
              <div className="aspect-[16/9] w-full bg-gray-800">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 line-clamp-2">
                  {course.name}
                </h3>
                <h4 className="text-sm text-yellow-400 font-semibold mb-3 uppercase tracking-wide">
                  {course.category}
                </h4>
                <div className="mt-2 flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      course.available ? "text-green-400" : "text-red-500"
                    }`}
                  >
                    {course.available ? "Disponible" : "No disponible"}
                  </span>
                  <span className="text-lg font-bold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-md border border-yellow-400/20">
                    {formatPrice(course.price)}
                  </span>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/InfoCurso/${course.id}`}
                    className="inline-block w-full text-center px-6 py-2 rounded-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 border-2 border-yellow-400 hover:border-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 cursor-pointer"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
