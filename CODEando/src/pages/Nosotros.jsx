import React from "react";
import fotoNosotros from "../assets/Foto_nosotros.png";
import fotoTobi from "../assets/foto_tobi.jpg";
import fotoAgus from "../assets/foto_agus2.png";

const Nosotros = () => {
  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200">
      <div className="w-full px-6 md:px-10 py-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagen principal */}
        <img
          className="w-full md:w-1/2 h-auto rounded-2xl shadow-lg shadow-yellow-500/10 border border-gray-700 object-cover"
          src={fotoNosotros}
          alt="Foto de nosotros"
        />

        {/* Texto principal */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Nosotros
            </h1>
            <p className="text-gray-400 leading-relaxed text-lg">
              Somos{" "}
              <span className="text-yellow-400 font-semibold">CODEando</span>, una comunidad enfocada en potenciar tu crecimiento profesional a través del aprendizaje práctico, proyectos colaborativos y una red de apoyo constante entre desarrolladores.
            </p>
          </div>

          {/* Frase inspiradora */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 text-center shadow-md shadow-yellow-500/10">
            <p className="italic text-gray-300 text-lg">
              “Creemos en aprender creando, y en crear aprendiendo.”
            </p>
          </div>

          {/* Desarrolladores */}
          <div>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Desarrolladores
            </h2>
            <div className="flex flex-wrap gap-8">
              {/* Tobi */}
              <div className="flex flex-col items-center bg-gray-800/60 p-5 rounded-2xl border border-gray-700 shadow-md hover:shadow-lg hover:shadow-yellow-500/10 transition">
                <a
                  href="https://github.com/TobiEscoca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-full w-24 h-24 object-cover mb-3 border-2 border-yellow-400/60 cursor-pointer"
                    src={fotoTobi}
                    alt="Foto de Tobías Escoca"
                  />
                </a>
                <h3 className="text-xl font-bold text-yellow-400">
                  Tobías Escoca
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  Desarrollador Full Stack
                </p>
              </div>

              {/* Agus */}
              <div className="flex flex-col items-center bg-gray-800/60 p-5 rounded-2xl border border-gray-700 shadow-md hover:shadow-lg hover:shadow-yellow-500/10 transition">
                <a
                  href="https://github.com/Agustin-Moran"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-full w-24 h-24 object-cover mb-3 border-2 border-yellow-400/60 cursor-pointer"
                    src={fotoAgus}
                    alt="Foto de Agustín Morán"
                  />
                </a>
                <h3 className="text-xl font-bold text-yellow-400">
                  Agustín Morán
                </h3>
                <p className="text-gray-400 text-sm text-center">
                  Desarrollador Full Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
