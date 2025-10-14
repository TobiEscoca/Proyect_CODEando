import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQItem = ({ question, answer, accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 px-3 text-left text-gray-200 font-medium hover:bg-gray-700/40 transition-colors rounded-md"
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 transform transition-transform duration-300 ${accentColor} ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Contenedor con transición */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 opacity-100 px-3 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Ayuda = () => {
  const accentColor = "text-blue-400"; // 🔹 Ajustá este color a tu branding
  const faqs = [
    {
      question: "¿Cómo me registro en la plataforma?",
      answer:
        "Hacé clic en 'Registrarse' en la parte superior derecha, completá tus datos y confirmá tu correo electrónico."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos tarjetas de crédito, débito y pagos a través de Mercado Pago."
    },
    {
      question: "¿Puedo obtener un certificado al finalizar un curso?",
      answer:
        "Sí, al completar un curso recibirás un certificado digital que podés descargar desde tu perfil."
    }
  ];

  return (
    <div className="px-4 md:px-8 py-12 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-3xl mx-auto text-gray-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-8 text-center">
          Centro de Ayuda
        </h1>
        <p className="mb-10 text-center text-gray-400">
          Encuentra respuestas a preguntas frecuentes o contáctanos para soporte.
        </p>

        {/* Preguntas Frecuentes con Accordion */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">
            Preguntas Frecuentes
          </h2>
          <div className="bg-gray-800/60 rounded-lg shadow-lg divide-y divide-gray-700">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                accentColor={accentColor}
              />
            ))}
          </div>
        </section>

        {/* Contacto */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-400">
            Si no encontrás tu respuesta aquí, escribinos a{" "}
            <a
              href="mailto:soporte@codeando.com"
              className="text-blue-400 hover:underline"
            >
              soporte@codeando.com
            </a>
          </p>
        </section>

        {/* Recursos */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Recursos útiles
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <a href="/terminos" className="text-blue-400 hover:underline">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href="/privacidad" className="text-blue-400 hover:underline">
                Política de privacidad
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Ayuda;
