const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 w-full">
        <div className="flex mx-auto max-w-7xl px-2 md:px-4 py-4 md:grid-cols- justify-between">
          <section>
            <h1 className="text-2xl md:text-3xl text-white">CODEando</h1>
            <p className="text-gray-300 mt-2">
              Cursos online de programación para todos los niveles. Aprendé las
              tecnologías más demandadas y potenciá tu futuro profesional.
            </p>
          </section>
          <section>
            <h2 className="text-xl md:text-2xl text-white">Encontranos</h2>
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/TobiEscoca/Proyect_CODEando.git"
                target="_blank"
                aria-label="git"
                title="Ir al Repo GitHub"
              >
                <svg className="w-6 h-6 fill-white hover:fill-gray-400">
                  <use xlinkHref="/sprite.svg#github" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="git"
                title="Ir al Instagram"
              >
                <svg className="w-6 h-6 fill-white hover:fill-gray-400">
                  <use xlinkHref="/sprite.svg#instagram" />
                </svg>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                aria-label="git"
                title="Ir al X (Twitter)"
              >
                <svg className="w-6 h-6 fill-white hover:fill-gray-400">
                  <use xlinkHref="/sprite.svg#x" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
