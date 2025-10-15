import React from "react";

const Privacidad = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Política de Privacidad
          </h1>
        </header>

        <section className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            En <span className="text-yellow-400 font-semibold">CODEando</span>, respetamos tu privacidad y nos comprometemos a proteger
            los datos personales que nos confías al usar nuestra plataforma de venta de
            cursos online. Esta política explica qué datos recopilamos, con qué propósito
            y cómo puedes gestionar tus derechos.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            1. Datos que recopilamos
          </h2>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li><strong>Datos de cuenta:</strong> nombre, correo electrónico, contraseña (hash), foto de perfil si corresponde.</li>
            <li><strong>Datos de compra y facturación:</strong> información de pago, historial de compras, dirección de facturación.</li>
            <li><strong>Datos de uso:</strong> cursos vistos, progreso, interacciones, preferencias.</li>
            <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo.</li>
            <li><strong>Comunicación:</strong> mensajes enviados a soporte o dentro de la plataforma.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            2. Cómo usamos tus datos
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Utilizamos tus datos con los siguientes fines:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Proveer, operar y mejorar la plataforma y los cursos.</li>
            <li>Procesar pagos y gestionar facturación.</li>
            <li>Personalizar la experiencia del usuario.</li>
            <li>Atender solicitudes de soporte.</li>
            <li>Cumplir obligaciones legales y prevenir fraudes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            3. Cookies y tecnologías similares
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Empleamos cookies y tecnologías similares para recordar tus preferencias, analizar
            el uso de la plataforma y ofrecer funciones esenciales.
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li><strong>Necesarias:</strong> mantener la sesión y funcionalidades básicas.</li>
            <li><strong>Analíticas:</strong> comprender el uso y mejorar la plataforma.</li>
            <li><strong>Marketing:</strong> mostrar contenido y anuncios relevantes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            4. Proveedores y terceros
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Podemos compartir datos con proveedores que nos ayudan a operar la plataforma, como:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Pasarelas de pago (Stripe, PayPal).</li>
            <li>Servicios de alojamiento y almacenamiento.</li>
            <li>Herramientas de análisis (Google Analytics).</li>
            <li>Plataformas de email y mensajería.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            5. Seguridad
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Implementamos medidas técnicas y organizativas razonables para proteger tus datos
            frente al acceso no autorizado, pérdida o alteración. Sin embargo, ningún método
            de transmisión por Internet o almacenamiento electrónico es 100% seguro.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            6. Retención de datos
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Conservamos tus datos mientras tu cuenta esté activa o sea necesario para cumplir
            fines legales o resolver disputas. Luego los eliminamos o anonimizamos de forma segura.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            7. Tus derechos
          </h2>
          <p className="text-gray-300 leading-relaxed mb-3">
            Dependiendo de tu jurisdicción, podés tener derechos sobre tus datos:
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 mb-6">
            <li>Acceder, rectificar o eliminar tus datos personales.</li>
            <li>Solicitar la portabilidad o limitar el tratamiento.</li>
            <li>Oponerte en ciertos casos al procesamiento.</li>
          </ul>
          <p className="text-gray-300 mb-6">
            Para ejercerlos, escribinos a{" "}
            <a
              href="mailto:soporte@codeando.com"
              className="text-yellow-400 underline"
            >
              soporte@codeando.com
            </a>.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            8. Menores
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Nuestra plataforma está dirigida a mayores de edad. Si sos padre o tutor y creés
            que tu hijo nos proporcionó datos, contactanos para su eliminación.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            9. Cambios en la política
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios
            significativos mediante la plataforma o correo electrónico.
          </p>

          <p className="text-gray-400 mt-8 italic">
            Gracias por confiar en{" "}
            <span className="text-yellow-400 font-semibold">CODEando</span>.  
            El uso continuo de la plataforma implica la aceptación de esta Política de Privacidad.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacidad;
