import React from "react";
import fotoNosotros from "../assets/Foto_nosotros.png";
import fotoTobi from "../assets/foto_tobi.jpg";
import fotoAgus from "../assets/foto_agus.jpg";

const Nosotros = () => {
  return (
    <div className="px-6 md:px-8 py-8 md:py-12 bg-gradient-to-r from-yellow-500 to-yellow-200">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-10">
        <img
          className="w-full md:w-1/2 h-auto rounded-lg object-cover"
          src={fotoNosotros}
          alt="Foto de nosotros"
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1 mt-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Nosotros</h1>
            <p className="font-medium text-gray-900 max-w-3xl">
              Somos CODEando, una comunidad enfocada en potenciar tu crecimiento
              profesional a través del aprendizaje práctico y colaborativo.
            </p>
          </div>
          <div className="gap-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Desarrolladores
            </h1>
            <div className="flex gap-6 align-top">
              <div className="flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Tobías Escoca
                </h2>
                <img
                  className="rounded-lg w-20"
                  src={fotoTobi}
                  alt="Foto de Tobi"
                />
              </div>
              <div className="flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Agustín Morán
                </h2>
                <img
                  className="rounded-lg w-20"
                  src={fotoAgus}
                  alt="Foto de Tobi"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
