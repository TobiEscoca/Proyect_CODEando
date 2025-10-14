import React from "react";

const Ustedes = () => {
  const testimonios = [
    {
      nombre: "María López",
      texto: "Gracias a CODEando conseguí mi primer trabajo como desarrolladora frontend. Los cursos son claros y prácticos.",
      curso: "Desarrollo Web con React",
    },
    {
      nombre: "Juan Pérez",
      texto: "Aprendí a programar desde cero. Hoy desarrollo proyectos personales que antes veía imposibles.",
      curso: "Introducción a la Programación",
    },
    {
      nombre: "Lucía Fernández",
      texto: "CODEando me ayudó a desarrollar una base sólida en Python. La comunidad es increíble.",
      curso: "Python desde Cero",
    },
    {
      nombre: "Santiago Díaz",
      texto: "El acompañamiento y la claridad de los contenidos hicieron toda la diferencia. Recomendadísimo.",
      curso: "Desarrollo Backend",
    },
    {
      nombre: "Ana Gómez",
      texto: "La plataforma es intuitiva y motivadora. Los proyectos prácticos me ayudaron muchísimo.",
      curso: "Diseño UX/UI",
    },
    {
      nombre: "Carlos Romero",
      texto: "Nunca pensé que aprender programación podía ser tan dinámico. Gran experiencia.",
      curso: "JavaScript Avanzado",
    },
  ];

  const proyectos = [
    {
      titulo: "Gestor de Tareas",
      descripcion: "Aplicación web creada por estudiantes de JavaScript.",
      tecnologias: ["React", "Firebase"],
    },
    {
      titulo: "API de Películas",
      descripcion: "Proyecto colaborativo usando Node.js y Express.",
      tecnologias: ["Node.js", "MongoDB"],
    },
    {
      titulo: "Dashboard de Ventas",
      descripcion:
        "Panel interactivo desarrollado por estudiantes de Full Stack para análisis de datos.",
      tecnologias: ["React", "Chart.js", "Node.js"],
    },
    {
      titulo: "Blog Personal",
      descripcion:
        "Proyecto individual de los alumnos de Django con integración a base de datos.",
      tecnologias: ["Django", "SQLite"],
    },
  ];

  return (
    <div className="px-4 md:px-8 py-12 md:py-16 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6 text-center md:text-left">
          Ustedes
        </h1>
        <p className="text-gray-400 mb-10 text-center md:text-left">
          Historias, proyectos y logros de nuestra comunidad de estudiantes.
        </p>

        {/* Frase inspiradora */}
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 mb-10 text-center shadow-lg shadow-yellow-500/10">
          <p className="text-lg italic">
            “El código no solo se escribe, se construye con pasión y comunidad.”
          </p>
        </div>

        {/* Testimonios */}
        <h2 className="text-2xl font-semibold text-white mb-4">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonios.map((t, index) => (
            <div
              key={index}
              className="bg-gray-800/60 p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg hover:shadow-yellow-500/10 transition"
            >
              <p className="italic text-gray-300 mb-4">“{t.texto}”</p>
              <p className="font-bold text-yellow-400">{t.nombre}</p>
              <p className="text-sm text-gray-400">{t.curso}</p>
            </div>
          ))}
        </div>

        {/* Proyectos */}
        <h2 className="text-2xl font-semibold text-white mb-4">Proyectos destacados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((p, index) => (
            <div
              key={index}
              className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 hover:shadow-lg hover:shadow-yellow-500/10 transition"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-2">
                {p.titulo}
              </h3>
              <p className="text-gray-300 mb-3">{p.descripcion}</p>
              <p className="text-sm text-gray-400">
                Tecnologías: {p.tecnologias.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ustedes;
