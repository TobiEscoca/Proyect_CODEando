import React from "react";

const sampleCourses = [
  {
    id: 1,
    name: "React desde Cero",
    available: true,
    price: 19999,
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop",
  },
];

const formatPrice = (value) =>
  new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS" }).format(
    value
  );

const Catalog = ({ courses = sampleCourses, title = "Catálogo de cursos" }) => {
  return (
    <section className="w-full py-12 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          {title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="overflow-hidden rounded-lg bg-white trasition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[16/9] w-full bg-gray-200">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                  {course.name}
                </h3>

                <div className="mt-2 flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      course.available ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {course.available ? "Disponible" : "No disponible"}
                  </span>

                  <span className="text-base font-bold text-gray-900">
                    {formatPrice(course.price)}
                  </span>
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
