import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/courses";

const CursoInfo = () => {
  const { courseId } = useParams();

  // Buscar el curso por ID
  const course = courses.find((course) => course.id === parseInt(courseId));

  // Si no se encuentra el curso, mostrar un mensaje
  if (!course) {
    return (
      <div>
        <h2>Curso no encontrado</h2>
        <p>El curso con ID {courseId} no existe.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6">
      <div className="w-full md:w-full order-1">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-full order-2 text-center">
        <p>
          <span
            className={`text-sm font-extrabold ${
              course.available ? "text-green-600" : "text-red-600"
            }`}
          >
            &bull;{" "}
          </span>
          Incripción {course.available ? "abierta" : "cerrada"}
        </p>
        <h1
          className="text-2xl md:text-3xl font-bold text-white mb-6"
          key={course.id}
        >
          {course.name}
        </h1>
        <p>{course.description}</p>

        <div className="flex justify-center gap-6">
          <p>
            <strong>Categoría:</strong> {course.category}
          </p>
          {" | "}
          <p>
            <strong>Precio:</strong> ${course.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CursoInfo;
