import React from "react";

const Soporte = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Soporte Técnico
          </h1>
        </header>

        <section className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            En <span className="text-yellow-400 font-semibold">CODEando</span>, 
            nos comprometemos a ofrecerte un servicio de soporte técnico confiable, rápido y eficiente para garantizar que disfrutes de la mejor experiencia posible dentro de nuestra plataforma de venta de cursos online.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            1. Alcance del soporte
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nuestro equipo de soporte puede ayudarte con cualquier inconveniente relacionado con:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Problemas al iniciar sesión o recuperar tu cuenta.</li>
            <li>Errores durante el proceso de compra o pago de cursos.</li>
            <li>Fallas al reproducir videos o acceder al contenido del curso.</li>
            <li>Inconvenientes con tu perfil o datos personales.</li>
            <li>Reportes de errores técnicos en la plataforma.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            2. Canales de contacto
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Podés comunicarte con nuestro equipo técnico a través de los siguientes medios:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>
              <strong>Correo electrónico:</strong>{" "}
              <a
                href="mailto:soporte@codeando.com"
                className="text-yellow-400 underline"
              >
                soporte@codeando.com
              </a>
            </li>
            <li>
              <strong>Formulario de contacto:</strong> disponible en la sección “Contacto” de nuestra página.
            </li>
            <li>
              <strong>Chat en línea:</strong> en horario de atención de lunes a viernes de 9:00 a 18:00 (hora local).
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            3. Tiempos de respuesta
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nuestro objetivo es brindarte una respuesta dentro de los siguientes plazos:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li><strong>Consultas generales:</strong> hasta 24 horas hábiles.</li>
            <li><strong>Incidentes técnicos:</strong> entre 24 y 48 horas hábiles, dependiendo de la complejidad.</li>
            <li><strong>Problemas urgentes (por ejemplo, pagos no acreditados):</strong> atención prioritaria inmediata.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            4. Procedimiento de atención
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Al contactar al soporte, te recomendamos incluir la siguiente información para agilizar la resolución:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Tu nombre completo y correo asociado a la cuenta.</li>
            <li>Descripción detallada del problema.</li>
            <li>Capturas de pantalla o mensajes de error, si los hubiera.</li>
            <li>Fecha y hora aproximada en que ocurrió el inconveniente.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            5. Soporte fuera del horario laboral
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Si envías una solicitud fuera del horario de atención, nuestro equipo la recibirá y responderá en la siguiente jornada hábil. En casos excepcionales, mantenemos guardias técnicas para incidentes críticos.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            6. Mejora continua
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Valoramos tus comentarios sobre el servicio recibido. Cada caso de soporte es analizado para mejorar nuestros procesos y la estabilidad de la plataforma.
          </p>

          <p className="text-gray-400 mt-8 italic">
            Gracias por comunicarte con el equipo de{" "}
            <span className="text-yellow-400 font-semibold">CODEando</span>.  
            Nuestro objetivo es que cada usuario disfrute de una experiencia fluida, segura y sin interrupciones.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Soporte;
