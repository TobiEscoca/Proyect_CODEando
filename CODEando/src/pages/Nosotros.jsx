import React from "react";
import teamPhoto from "../assets/Foto_nosotros.png";
import fotoTobi from "../assets/foto_tobi.jpg";
import fotoAgus from "../assets/foto_agus.jpg";
import fotoFranco from "../assets/foto_franco.jpg";

const Nosotros = () => {
  return (
    // Usamos 'main' para estructura semántica y el fondo oscuro
    <main className="flex flex-1 items-center justify-center bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200">
      <div className="w-full max-w-6xl mx-auto py-16 px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Imagen principal */}
          <img
            className="w-full md:w-1/2 h-auto object-cover rounded-2xl border border-gray-700 shadow-lg shadow-yellow-500/10"
            src={teamPhoto}
            alt="Foto de nosotros, el equipo de CODEando"
          />

          {/* Texto y detalles */}
          <div className="flex flex-col gap-8 md:w-1/2">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Nosotros
              </h1>
              <p className="text-lg leading-relaxed text-gray-400">
                Somos{" "}
                <strong className="text-yellow-400 font-semibold">
                  CODEando
                </strong>
                , una comunidad enfocada en potenciar tu crecimiento profesional
                a través del aprendizaje práctico, proyectos colaborativos y una
                red de apoyo constante entre desarrolladores.
              </p>
            </div>

            <blockquote className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-6 text-center shadow-md shadow-yellow-500/10">
              <p className="italic text-lg text-gray-300">
                “Creemos en aprender creando, y en crear aprendiendo.”
              </p>
            </blockquote>

            {/* Sección Desarrolladores*/}
            <section>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Desarrolladores
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Tobi */}
                <div className="flex flex-col items-center p-5 rounded-2xl bg-gray-800/60 border border-gray-700 shadow-md transition hover:shadow-lg hover:shadow-yellow-500/10">
                  <a
                    href="https://github.com/TobiEscoca"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Tobías Escoca"
                  >
                    <img
                      className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-yellow-400/60 transition duration-300 transform hover:scale-105"
                      src={fotoTobi}
                      alt="Foto de perfil de Tobías Escoca"
                    />
                  </a>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Tobías Escoca
                  </h3>
                  <p className="text-sm text-center text-gray-400">
                    Desarrollador Full Stack
                  </p>
                </div>

                {/* Agus */}
                <div className="flex flex-col items-center p-5 rounded-2xl bg-gray-800/60 border border-gray-700 shadow-md transition hover:shadow-lg hover:shadow-yellow-500/10">
                  <a
                    href="https://github.com/Agustin-Moran"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Agustín Morán"
                  >
                    <img
                      className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-yellow-400/60 transition duration-300 transform hover:scale-105"
                      src={fotoAgus}
                      alt="Foto de perfil de Agustín Morán"
                    />
                  </a>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Agustín Morán
                  </h3>
                  <p className="text-sm text-center text-gray-400">
                    Desarrollador Full Stack
                  </p>
                </div>

                {/* Franco */}
                <div className="flex flex-col items-center p-5 rounded-2xl bg-gray-800/60 border border-gray-700 shadow-md transition hover:shadow-lg hover:shadow-yellow-500/10 sm:col-span-2 sm:max-w-xs sm:mx-auto">
                  <a
                    href="https://github.com/FrannGz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Franco Di Pangracio"
                  >
                    <img
                      className="w-24 h-24 object-cover rounded-full mb-3 border-2 border-yellow-400/60 transition duration-300 transform hover:scale-105"
                      src={fotoFranco}
                      alt="Foto de perfil de Franco Di Pangracio"
                    />
                  </a>
                  <h3 className="text-xl font-bold text-yellow-400">
                    Franco Di Pangrazio
                  </h3>
                  <p className="text-sm text-center text-gray-400">
                    Desarrollador Full Stack
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
