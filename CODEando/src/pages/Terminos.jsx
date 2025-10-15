import React from "react";

const Terminos = () => {
  return (
    <div className="flex-1 bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-gray-200 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
            Términos y Condiciones
          </h1>
        </header>

        <section className="bg-gray-800/40 border border-gray-700 rounded-2xl p-6 mb-6">
          <p className="text-gray-300 leading-relaxed mb-4">
            Bienvenido a nuestra plataforma de venta de cursos online. Al utilizar
            nuestro sitio web, usted acepta cumplir y estar sujeto a los siguientes
            términos y condiciones. Le recomendamos leerlos atentamente antes de
            realizar cualquier compra o registrarse en nuestra plataforma.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            1. Uso del sitio web
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Usted se compromete a utilizar este sitio únicamente para fines legales
            y de acuerdo con todas las leyes aplicables. Está prohibido el uso del
            sitio para actividades fraudulentas, difamatorias o que violen los
            derechos de terceros.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            2. Compra de cursos
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Todos los cursos ofrecidos en nuestra plataforma están sujetos a
            disponibilidad. Nos reservamos el derecho de modificar, actualizar o
            descontinuar cualquier curso sin previo aviso. Las descripciones y
            precios pueden cambiar en cualquier momento.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            3. Pagos y reembolsos
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Los pagos se procesan de manera segura a través de nuestros proveedores
            autorizados. Las solicitudes de reembolso serán evaluadas caso por caso
            y podrán estar sujetas a condiciones específicas, dependiendo del curso
            adquirido y del tiempo transcurrido desde la compra.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            4. Propiedad intelectual
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Todo el contenido disponible en los cursos —incluyendo videos,
            documentos, ejercicios, textos y otros materiales— es propiedad
            intelectual de sus respectivos autores o de la plataforma. Está
            estrictamente prohibida su reproducción, distribución o uso sin
            autorización expresa por escrito.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            5. Responsabilidades del usuario
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Usted es responsable de mantener la confidencialidad de su cuenta y
            contraseña. Cualquier actividad realizada bajo su cuenta será
            responsabilidad suya. La plataforma no será responsable de pérdidas o
            daños derivados del incumplimiento de esta obligación.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            6. Modificaciones a los términos
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Los cambios serán efectivos inmediatamente después de su
            publicación en el sitio web. Se recomienda revisar esta sección
            periódicamente para mantenerse informado.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">
            7. Limitación de responsabilidad
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            No garantizamos que la plataforma esté libre de errores, interrupciones
            o fallos técnicos. En ningún caso seremos responsables por daños
            directos, indirectos o consecuentes que surjan del uso o la imposibilidad
            de uso de nuestros servicios.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-3">8. Contacto</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Si tiene preguntas o inquietudes sobre estos términos, puede
            contactarnos a través de nuestro formulario de contacto o por correo
            electrónico a{" "}
            <a
              href="mailto:soporte@codeando.com"
              className="text-yellow-400 underline"
            >
              soporte@codeando.com
            </a>.
          </p>

          <p className="text-gray-400 mt-8 italic">
            Gracias por confiar en nuestra plataforma. El uso continuo del sitio
            implica la aceptación de estos Términos y Condiciones.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terminos;
